<script>
import { deletePlayer } from "@/api/player";
import { useLoadPlayers } from "@/api/player";

export default {
  setup() {
    const players = useLoadPlayers();
    return { players: players, deletePlayer };
  },
};
</script>

<template>
  <section v-if="players.length">
    <div v-for="{ name, health, id } in players" :key="name">
      <div>
        Name: {{ name }}
        <router-link
          :to="{
            name: 'Edit',
            params: { name: name, id: id },
            path: `/edit/${name}`,
          }"
        >
          Edit
        </router-link>
        <button type="button" @click="deletePlayer(id)">Delete</button>
      </div>
      <div>Health: {{ health }}</div>
    </div>
  </section>
</template>
