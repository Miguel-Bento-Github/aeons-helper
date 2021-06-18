<script lang="ts">
import { computed } from "@vue/runtime-core";
import { mapMutations, useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    return {
      minion: computed(() => store.state.minion),
    };
  },
  methods: {
    ...mapMutations(["increaseMinionHealth", "decreaseMinionHealth"]),
  },
};
</script>

<template>
  <article>
    <h2>Minion</h2>
    <p>Health:{{ minion }}hp</p>

    <button
      @click="decreaseMinionHealth(1)"
      class="health-button health-button--decrease"
      type="button"
    >
      -
    </button>
    <button
      @click="increaseMinionHealth(1)"
      class="health-button health-button--increase"
      type="button"
    >
      +
    </button>
  </article>
</template>

<style lang="scss" scoped>
@import "@/style/health-button.scss";
</style>
