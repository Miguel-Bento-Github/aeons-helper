<script lang="ts">
import { computed } from "@vue/runtime-core";
import { mapMutations, useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    return {
      nemesis: computed(() => store.state.nemesis),
    };
  },
  methods: {
    ...mapMutations(["increaseNemesisHealth", "decreaseNemesisHealth"]),
  },
};
</script>

<template>
  <article>
    <h2>Nemesis</h2>
    <div>Name: {{ nemesis.name }}</div>
    <div>Health: {{ nemesis.health }}hp</div>
    <button
      @click="decreaseNemesisHealth(1)"
      class="health-button health-button--decrease"
      type="button"
    >
      -
    </button>
    <button
      @click="increaseNemesisHealth(1)"
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
