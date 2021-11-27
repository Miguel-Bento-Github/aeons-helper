<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Home",
  setup() {
    const { state } = useStore();
    return { players: computed(() => state.players.length) };
  },
};
</script>

<template>
  <h1 class="home">Welcome to Aeon's End helper</h1>
  <router-link class="button" to="setup"> Setup </router-link>
  <router-link v-if="players" class="button" to="/game"> Start </router-link>
</template>

<style lang="scss" scoped>
.button {
  display: inline-block;
  margin-top: 4rem;
}
</style>
