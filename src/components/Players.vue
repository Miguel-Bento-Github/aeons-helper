<script>
import { deletePlayer, useLoadPlayers } from "@/api/player";

export default {
  setup() {
    const players = useLoadPlayers();

    return { players, deletePlayer };
  },
};
</script>

<template>
  <section>
    <div v-for="{ name, life, id } in players" :key="name">
      <div class="player-wrapper">
        <div class="name">Name: {{ name }}</div>
        <div class="life">Life: {{ life }}</div>
        <router-link
          class="Edit-link"
          :to="{
            name: 'Edit',
            params: { name: name, id: id },
            path: `/edit/${name}`,
          }"
          >Edit</router-link
        >
        <button type="button" @click="deletePlayer(id)">Delete</button>
      </div>
      <!--<div>Life: {{ life }}</div> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
.player-wrapper {
  display: flex;
  justify-content: space-evenly;
  padding: 0 3rem;
}

.Edit-link {
  margin-left: 1.2rem;
  padding-right: 0.3rem;
  text-decoration: none;

  & :link {
    color: #fff;
  }

  &:visited {
    color: #fff;
  }
}

.name {
  width: 8rem;
  text-align: left;
}
</style>
