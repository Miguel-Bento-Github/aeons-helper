<template>
  <button
    @click="updateDifficulty(level)"
    v-for="level in difficulties"
    :key="level"
  >
    {{ level }}
  </button>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const difficulties = ["easy", "normal", "expert"];
    return {
      difficulties,
      updateDifficulty: (level) => store.commit("setDifficulty", level),
    };
  },
};
</script>
