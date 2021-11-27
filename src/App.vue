<script>
import { onBeforeMount, onMounted } from "@vue/runtime-core";
import { getPlayers } from "./api/player";
import { useLoadNemesis } from "./api/nemesis";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { getGravehold } from "./api/gravehold";
import { auth } from "@/api/auth";

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

    onMounted(() => {
      returnToPreviousPoint();
      auth();
    });
  },
};
</script>

<template>
  <div id="firebaseui-auth-container"></div>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <span class="separator"> / </span>
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
@use '@/style/border-radius-effect.scss' as *;
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  color: #f3f3f3;
  font-size: calc(12px + (24 - 14) * ((100vw - 300px) / (2160 - 300)));
  line-height: 1.4;
  background: #2c3e50;
  display: grid;
  place-content: center;
}

#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  text-shadow: 2px 2px #162029;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: max-content;
  min-height: 100%;
  width: 100%;
  max-width: 1300px;
  padding: 3rem;
}

a,
button {
  color: inherit;
  font: inherit;
}

a {
  text-decoration: inherit;
}

.button,
button,
fieldset {
  border: solid #162029;
  border-radius: 18% 82% 17% 83% / 77% 31% 69% 23%;
  padding: 0.5rem;
  margin: 1rem;
  background: linear-gradient(145deg, #2f4256, #283848);
  box-shadow: 0.5rem 0.5rem 1.5rem #162029, -0.5rem -0.5rem 1.5rem #425c77;
  color: #f4f4f4;
  transition: all 0.15s ease-in-out;
  width: 5rem;
  cursor: pointer;
  @include br;

  &:nth-child(2n + 1) {
    animation-delay: random(4) / 10 + s;
  }

  &:nth-child(4n + 4) {
    animation-delay: random(2) / 10 + s;
  }

  &:hover {
    border-radius: 52% 64% 10% 56% / 41% 35% 50% 18%;
    filter: hue-rotate(0.15turn);
    transition: all 0.25s ease-in-out;
  }

  &:active {
    box-shadow: 0.5rem 0.5rem 1rem #162029, -0.5rem -0.5rem 1rem #425c77;
    transition: all 0.15s ease-in-out;
  }
}

.item {
  margin: 1rem;
}

#nav {
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(#000, 0.1);
  border-radius: 1rem;

  .separator {
    color: #bbd6f0;
  }

  a {
    position: relative;
    font-weight: bold;
    color: #bbd6f0;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 100%;
      transform: scaleX(0);
      background: currentColor;
      transition: transform 0.15s ease;
    }

    &:hover::before {
      transform: scaleX(1);
      transition: transform 0.25s ease;
    }

    & + a {
      margin-left: 8px;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
