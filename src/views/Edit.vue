<script>
import { reactive } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { fields, defaultFields } from "@/players/players";
import { onMounted, watch } from "@vue/runtime-core";
import { getPlayer, updatePlayer } from "@/api/player";
import store from "@/store";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const players = store.state.players;
    const id = currentPlayer ? currentPlayer.id : route.params.id;

    const getCurrentPlayer = () =>
      players.find((player) => player.name === route.params.name);

    let currentPlayer = null;

    const form = reactive({ ...defaultFields });

    const updateCurrentPlayer = async () => {
      const player = await getPlayer(id);

      for (const field in player) {
        form[field] = player[field];
      }
    };

    onMounted(() => updateCurrentPlayer());

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
      await updatePlayer(id, { ...form });
      router.push("/setup");
    };

    return { form, update, fields };
  },
};
</script>

<template>
  <form @submit.prevent="update">
    <div v-for="field in fields" :key="field">
      <label :for="field">
        {{ field }}
      </label>
      <input :id="field" v-model="form[field]" required />
    </div>
    <button type="submit">Done</button>
  </form>
</template>
