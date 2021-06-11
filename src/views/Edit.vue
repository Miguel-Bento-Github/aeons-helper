<script>
import { reactive } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { fields, defaultFields } from "@/players/players";
import { computed, onMounted } from "@vue/runtime-core";
import { getPlayer, updatePlayer } from "@/firebase";
import { resetObjectValues } from "@/utils/resetObjectValues";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const id = computed(() => route.params.id);

    const form = reactive(defaultFields);
    onMounted(async () => {
      const player = await getPlayer(id.value);

      for (const field in player) {
        form[field] = player[field];
      }
    });

    const update = async () => {
      await updatePlayer(id.value, { ...form });
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
