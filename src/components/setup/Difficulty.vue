<script>
import store from "@/store";

export default {
  data() {
    return {
      difficulties: ["easy", "normal", "expert"],
    };
  },
  methods: {
    updateDifficulty(level) {
      store.dispatch("setDifficulty", level);
    },
  },
};
</script>

<template>
  <button
    @click="updateDifficulty(level)"
    v-for="level in difficulties"
    :key="level"
  >
    {{ level }}
  </button>
</template>
