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
    <h2 class="item">{{ nemesis.name }}</h2>
    <p class="item">{{ nemesis.health }}hp</p>
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
@use "@/style/health-button";
@use '@/style/border-radius-effect' as *;
@use '@/style/random-border' as *;
@use '@/style/elevate' as *;

article {
  @include random-br;
  @include br;
  @include elevate;
  margin: 4vw;
}
</style>
