<script>
import { auth } from "@/api/auth";
import { onBeforeMount, onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { getGravehold } from "./api/gravehold";
import { useLoadNemesis } from "./api/nemesis";
import { getPlayers } from "./api/player";

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
@use '@/style/border-radius-effect' as *;
@use '@/style/random-border' as *;
@use '@/style/elevate' as *;
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
}

body {
  background: conic-gradient(
    from 90deg at 50% 120%,
    #f17979,
    #ec777e,
    #e07189,
    #cc6896,
    #b55da0,
    #94509b,
    #65427f,
    #403565,
    #292b4e,
    #1f283a,
    #18222e,
    #162029
  );
  min-height: 100%;
  height: max-content;
}

h1,
h2,
h3,
h4 {
  cursor: default;
}

#app,
button,
a,
input {
  color: inherit;
  font: inherit;
  text-shadow: 2px 2px 4px #162029;
}

#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100%;
  height: max-content;
  width: 100%;
  max-width: 1300px;
  padding: 3rem;
  margin: auto;
}

a {
  text-decoration: inherit;
}

.button,
button,
fieldset {
  @include br-button;
  @include elevate;
  @include random-br;
  width: 5rem;
  margin: 1rem;
  padding: 0.5rem;
  color: #f4f4f4;
  transition: all 0.15s ease-in-out;
  cursor: pointer;

  &:nth-child(2n + 2) {
    animation-duration: random(4) * 2 + s;
    @include random-br;
  }

  &:nth-child(1n + 3) {
    animation-duration: random(6) * 2 + s;
    @include random-br;
  }

  &:nth-child(3n + 1) {
    animation-duration: random(4) * 2 + s;
    @include random-br;
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
