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
      <div>
        Name: {{ name }}
        <router-link
          :to="{
            name: 'Edit',
            params: { name: name },
            path: `/edit/${name}`,
          }"
          >Edit</router-link
        >
        <button type="button" @click="deletePlayer(id)">Delete</button>
      </div>
      <div>Life: {{ life }}</div>
    </div>
  </section>
</template>
