<script>
import Creation from "@/components/setup/Creation.vue";
import Players from "@/components/setup/Players.vue";
import Nemesis from "@/components/setup/Nemesis.vue";
import Difficulty from "@/components/setup/Difficulty.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  components: {
    Creation,
    Players,
    Nemesis,
    Difficulty,
  },
  setup() {
    const { state } = useStore();
    return { players: computed(() => state.players.length) };
  },
};
</script>

<template>
  <div class="wrapper">
    <div key="Creation" class="section-wrapper">
      <h1>Creation</h1>
      <Creation />
    </div>
    <div key="Players" class="section-wrapper">
      <h1>Players</h1>
      <Players />
    </div>
    <div key="Nemesis" class="section-wrapper">
      <h1>Nemesis</h1>
      <Nemesis />
    </div>
    <div key="Difficulty" class="section-wrapper">
      <h1>Difficulty</h1>
      <Difficulty />
    </div>
  </div>

  <transition name="fade" mode="out-in">
    <router-link v-if="players" class="start" to="/game"> Start </router-link>
  </transition>
</template>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}

.start {
  border-radius: 48px;
  border: 0;
  padding: 8px 16px;
  box-shadow: -2px -2px 4px #f4f4f4, -2px -2px 4px #222;
  text-decoration: none;
  background-color: #2b2e2d;
  color: #eefaff;
  transition: all 0.25s ease-out;
  text-transform: uppercase;

  &:hover {
    filter: invert(100%);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out, transform 0.5s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

@for $i from 1 through 4 {
  .section-wrapper:nth-child(#{$i}) {
    transition-delay: $i * 0.08s;
  }
}
</style>
