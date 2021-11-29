<script>
import Creation from "@/components/setup/Creation.vue";
import Difficulty from "@/components/setup/Difficulty.vue";
import Nemesis from "@/components/setup/Nemesis.vue";
import Players from "@/components/setup/Players.vue";
import { computed } from "vue";
import { useStore } from "vuex";

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
    <div key="Difficulty" class="section-wrapper difficulty">
      <h1>Difficulty</h1>
      <Difficulty />
    </div>
    <div key="Nemesis" class="section-wrapper nemesis">
      <h1>Nemesis</h1>
      <Nemesis />
    </div>
    <router-link v-if="players" class="button start" to="/game">
      <span>Start</span>
      <span>▶</span>
    </router-link>
    <div key="Creation" class="section-wrapper creation">
      <h1>Creation</h1>
      <Creation />
    </div>
    <div key="Players" class="section-wrapper players">
      <h1>Players</h1>
      <Players />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/style/border-radius-effect' as *;
@use '@/style/random-border' as *;

.wrapper {
  gap: 1rem;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      "difficulty difficulty difficulty players"
      "nemesis nemesis start players"
      "creation creation creation players";
  }
}

.section-wrapper {
  padding: 2rem;
  background: linear-gradient(145deg, #2f4256, #283848);
  box-shadow: 0.5rem 0.5rem 1.5rem #162029, -0.5rem -0.5rem 1.5rem #425c77;
  @include random-br;
  @include br;

  @for $i from 1 through 3 {
    &:nth-child(#{$i}n) {
      @include random-br;
      animation-duration: $i * 2.8 + s;
      animation-delay: $i * 0.034 + s;
      transform: translateX(random(4) + rem);
    }
  }

  @media screen and (min-width: 800px) {
    padding: 1.5rem;
    width: max-content;
    height: max-content;
  }
}

.nemesis {
  grid-area: nemesis;
}

.creation {
  grid-area: creation;
}

.difficulty {
  grid-area: difficulty;
}

.players {
  grid-area: players;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @include random-br;
}

.start {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  place-self: center;
  grid-area: start;
  width: max-content;
  height: max-content;
  padding: 0.5rem 1rem;
  filter: hue-rotate(-0.7turn);
  -webkit-font-smoothing: subpixel-antialiased;
  backface-visibility: hidden;
  font-size: calc(16px + (36 - 16) * ((100vw - 300px) / (2160 - 300)));
  animation: start 6s infinite alternate-reverse;
}

@keyframes start {
  to {
    filter: hue-rotate(0.9turn);
    transform: translate3d(random(2) + rem, random(2) + rem, 0);
  }
}
</style>
