<script>
import { onBeforeMount, onMounted } from "@vue/runtime-core";
import { getPlayers } from "./api/player";
import { useLoadNemesis } from "./api/nemesis";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { getGravehold } from "./api/gravehold";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const setupGameData = async () => {
      const { gravehold } = await getGravehold();
      store.commit("setGravehold", gravehold);

      const players = await getPlayers();
      players.forEach((player) => {
        store.commit("setPlayer", player);
      });

      const data = await useLoadNemesis();
      store.commit("setNemesis", data.active || data.nemesis.rageborne);
    };

    const returnToPreviousPoint = () => {
      if (localStorage.activeRoute) router.push(localStorage.activeRoute);
    };

    /**
     * Fetches and updates all game data
     */
    onBeforeMount(setupGameData);

    onMounted(returnToPreviousPoint);
  },
};
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <a
      target="_blank"
      rel="noopener"
      href="https://boardgamegeek.com/boardgame/191189/aeons-end"
      >About</a
    >
  </div>
  <router-view />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  color: #f3f3f3;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #2c3e50;
  height: 100%;
  width: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #bbd6f0;

    & + a {
      margin-left: 8px;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
