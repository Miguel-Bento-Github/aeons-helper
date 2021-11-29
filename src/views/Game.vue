<script lang="ts">
import { deleteNemesis } from "@/api/nemesis";
import Gravehold from "@/components/game/Gravehold.vue";
import Nemesis from "@/components/game/Nemesis.vue";
import Players from "@/components/game/Players.vue";
import { useRouter } from "vue-router";
export default {
  components: { Players, Gravehold, Nemesis },
  setup() {
    const router = useRouter();

    return {
      gameOver: () => {
        localStorage.clear();
        router.push("/");
        deleteNemesis();
      },
    };
  },
};
</script>

<template>
  <section class="game-section">
    <h1 class="game-title">Game</h1>
    <div class="content">
      <Nemesis class="game-part game-nemesis" />
      <Gravehold class="game-part game-gravehold" />
      <Players class="game-part game-players" />
    </div>
  </section>
  <button class="game-over" @click="gameOver()" type="button">Game over</button>
</template>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "nemesis gravehold"
    "players players";
}

.game-title {
  margin-bottom: 3rem;
}

.game-part {
  height: max-content;
  width: max-content;
  padding: 2rem;
  margin: auto;
}

.game-players {
  grid-area: players;
}

.game-over {
  position: fixed;
  top: 2rem;
  right: 2rem;
}
</style>
