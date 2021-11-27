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
    <h2>Players</h2>
    <div class="players">
      <div class="player" v-for="{ name, health, id } in players" :key="name">
        <div class="item">Name: {{ name }}</div>
        <div class="item">Health: {{ health }}hp</div>
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
@import "@/style/health-button.scss";
.players {
  display: flex;
  justify-content: center;
}

.player {
  margin: 2vw;
}
</style>
