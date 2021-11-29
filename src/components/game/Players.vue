<script lang="ts">
import { computed } from "@vue/runtime-core";
import { mapMutations, useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    return {
      players: computed(() => store.state.players),
    };
  },
  methods: {
    ...mapMutations(["increasePlayerHealth", "decreasePlayerHealth"]),
  },
};
</script>

<template>
  <article>
    <div class="players">
      <div class="player" v-for="{ name, health, id } in players" :key="name">
        <h2>{{ name }}</h2>
        <p>{{ health }}hp</p>
        <button
          @click="decreasePlayerHealth({ id: id, amount: 1 })"
          class="health-button health-button--decrease"
          type="button"
        >
          -
        </button>
        <button
          @click="increasePlayerHealth({ id: id, amount: 1 })"
          class="health-button health-button--increase"
          type="button"
        >
          +
        </button>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use "@/style/health-button";
@use '@/style/border-radius-effect' as *;
@use '@/style/random-border' as *;
@use '@/style/elevate' as *;

.players {
  display: flex;
  justify-content: center;
}

.player {
  @include br;
  @include random-br;
  @include elevate;
  margin: 2vw;
  padding: 0.5rem 2rem;

  &:nth-child(2n + 2) {
    animation-duration: random(4) * 2 + s;
    @include random-br;
  }

  &:nth-child(1n + 3) {
    animation-duration: random(2) * 3 + s;
    @include random-br;
  }
}
</style>
