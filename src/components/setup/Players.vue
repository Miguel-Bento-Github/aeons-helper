<script>
import { deletePlayer, useLoadPlayers } from "@/api/player";

export default {
  setup() {
    const players = useLoadPlayers();
    return { players: players, deletePlayer };
  },
};
</script>

<template>
  <div v-if="players.length">
    <div v-for="{ name, health, id } in players" :key="name">
      <div class="player">
        <header class="player-header">
          <h4 class="name">Name: {{ name }}</h4>
          <h4
            title="health can only be changed with game difficulty"
            class="health"
          >
            Health: {{ health }}
          </h4>
        </header>
        <div class="controls">
          <router-link
            class="edit button"
            :to="{
              name: 'Edit',
              params: { name: name, id: id },
              path: `/edit/${name}`,
            }"
            >Edit</router-link
          >
          <button class="delete" type="button" @click="deletePlayer(id)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.controls {
  display: flex;
}

.edit,
.delete {
  display: inline-block;
  font-size: calc(12px + (18 - 14) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 600;
}

.delete {
  background: linear-gradient(#482828, #283848);
}
</style>
