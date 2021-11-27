<script lang="ts">
import { mapMutations } from "vuex";
import { useLoadGravehold } from "@/api/gravehold";

export default {
  setup() {
    const gravehold = useLoadGravehold();

    return {
      gravehold,
    };
  },
  methods: {
    ...mapMutations(["increaseGraveholdHealth", "decreaseGraveholdHealth"]),
  },
};
</script>

<template>
  <article>
    <h2>Gravehold</h2>
    <div class="item">
      <div>{{ gravehold }}hp</div>
    </div>

    <button
      @click="decreaseGraveholdHealth(1)"
      class="health-button health-button--decrease"
      type="button"
    >
      -
    </button>
    <button
      @click="increaseGraveholdHealth(1)"
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
