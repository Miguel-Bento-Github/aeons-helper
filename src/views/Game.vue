<script lang="ts">
import Players from "@/components/game/Players.vue";
import Gravehold from "@/components/game/Gravehold.vue";
import Nemesis from "@/components/game/Nemesis.vue";
import { useRouter } from "vue-router";
import { deleteNemesis } from "@/api/nemesis";
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
    <h1>Game</h1>
    <div class="content">
      <Nemesis />
      <Players />
      <Gravehold />
    </div>
  </section>
  <button @click="gameOver()" type="button">Game over</button>
</template>

<style lang="scss" scoped>
.content {
  display: grid;
}
</style>
