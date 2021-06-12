<script>
import { reactive } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { fields, defaultFields } from "@/players/players";
import { computed, onMounted, watch } from "@vue/runtime-core";
import { getPlayer, updatePlayer } from "@/api/player";
import { resetObjectValues } from "@/utils/resetObjectValues";
import store from "@/store";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const players = computed(() => store.getters.players);
    const name = computed(() => route.params.name);
    const getCurrentPlayer = () =>
      players.value.find((player) => player.name === name.value);
    let currentPlayer = getCurrentPlayer();

    const form = reactive(defaultFields);

    const updateCurrentPlayer = async () => {
      const player = await getPlayer(currentPlayer.id);

      for (const field in player) {
        form[field] = player[field];
      }
    };

    onMounted(() => {
      if (currentPlayer) updateCurrentPlayer();
    });

    watch(
      players,
      (newContent) => {
        if (newContent) {
          currentPlayer = getCurrentPlayer();
          updateCurrentPlayer();
        }
      },
      { deep: true }
    );

    const update = async () => {
      const currentPlayer = getCurrentPlayer();
      await updatePlayer(currentPlayer.id, { ...form });
      router.push("/");
      resetObjectValues(form);
    };

    return { form, update, fields };
  },
};
</script>

<template>
  <form @submit.prevent="update">
    <div v-for="field in fields" :key="field">
      <label for="name">
        {{ field }}
      </label>
      <input id="name" v-model="form[field]" required />
    </div>
    <button type="submit">Edit Player</button>
  </form>
</template>
