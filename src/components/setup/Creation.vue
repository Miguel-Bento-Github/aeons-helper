<script>
import { reactive } from "@vue/reactivity";
import { createPlayer } from "@/api/player";
import { requiredFields, defaultFields, playersHealth } from "@/global/players";
import { resetObjectValues } from "@/utils/resetObjectValues";
import { useStore } from "vuex";
import { getPlayer } from "@/api/player";

export default {
  setup() {
    const form = reactive({ ...defaultFields });
    const store = useStore();

    const onSubmit = async () => {
      form.health = playersHealth[store.state.difficulty];
      const id = await createPlayer({ ...form });
      const player = await getPlayer(id);
      store.commit("setPlayer", { ...player, id });
      resetObjectValues(form);
    };

    return { form, onSubmit, requiredFields };
  },
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div v-for="field in requiredFields" :key="field">
      <label for="name">
        {{ field }}
      </label>
      <input id="name" v-model="form[field]" required />
    </div>
    <button type="submit">Create player</button>
  </form>
</template>

<style lang="scss" scoped>
input {
  border-radius: 1rem;
  border: 0;
  padding: 0.25rem;
  margin: 1rem;
}
</style>
