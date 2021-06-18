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
  <section>
    <h1>Game</h1>
    <gravehold />
    <players />
    <nemesis />
  </section>
  <button @click="gameOver()" type="button">Game over</button>
</template>
