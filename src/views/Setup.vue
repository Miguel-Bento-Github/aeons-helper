<script>
import Creation from "@/components/Creation.vue";
import Players from "@/components/Players.vue";
import Nemesis from "@/components/Nemesis.vue";
import Difficulty from "@/components/Difficulty.vue";
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

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
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

<template>
  <div class="wrapper">
    <transition-group name="fade" mode="out-in">
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
    </transition-group>
  </div>
</template>
