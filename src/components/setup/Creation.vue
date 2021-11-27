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
  <form class="create-player" @submit.prevent="onSubmit">
    <fieldset
      class="player-control"
      v-for="field in requiredFields"
      :key="field"
    >
      <label for="name">
        {{ field }}
      </label>
      <input id="name" v-model="form[field]" required />
    </fieldset>
    <button class="create" type="submit">Create player</button>
  </form>
</template>

<style lang="scss" scoped>
.create-player {
  padding: 0.5rem;
  display: flex;
  align-items: center;
}

.player-control {
  border-radius: 52% 64% 10% 56% / 41% 35% 50% 18%;
}

input {
  border-radius: 1rem;
  border: 0;
  padding: 0.25rem;
  margin: 1rem;
}
</style>
