<script>
import Creation from "@/components/setup/Creation.vue";
import Players from "@/components/setup/Players.vue";
import Nemesis from "@/components/setup/Nemesis.vue";
import Difficulty from "@/components/setup/Difficulty.vue";

export default {
  components: {
    Creation,
    Players,
    Nemesis,
    Difficulty,
  },
};
</script>

<template>
  <div class="wrapper">
    <div key="Nemesis" class="section-wrapper nemesis">
      <h1>Nemesis</h1>
      <Nemesis />
    </div>
    <div key="Creation" class="section-wrapper creation">
      <h1>Creation</h1>
      <Creation />
    </div>
    <div key="Difficulty" class="section-wrapper difficulty">
      <h1>Difficulty</h1>
      <Difficulty />
    </div>
    <div key="Players" class="section-wrapper players">
      <h1>Players</h1>
      <Players />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    ". nemesis nemesis ."
    "creation creation difficulty difficulty"
    ". players players .";
  gap: 1rem;
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
}

.section-wrapper {
  width: max-content;
  height: max-content;
  padding: 4rem;
  border: 0.25rem solid #162029;
  border-radius: 18% 82% 17% 83% / 77% 31% 69% 23%;

  @media screen and (max-width: 800px) {
    padding: 4rem;
    height: 70vh;
    margin-top: 20vh;
  }
}

.start {
  padding: 0.5rem 2rem;
  filter: hue-rotate(-0.7turn);
  animation: hue-rotating 6s infinite alternate-reverse;
}

@keyframes hue-rotating {
  to {
    filter: hue-rotate(0.9turn);
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
