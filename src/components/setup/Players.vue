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
      <div class="player">
        <div class="name">Name: {{ name }}</div>
        <div
          title="health can only be changed with game difficulty"
          class="health"
        >
          Health: {{ health }}
        </div>
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
  </section>
</template>

<style lang="scss" scoped>
.edit,
.delete {
  font-size: calc(12px + (18 - 14) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 600;
}

.edit {
  cursor: context-menu;
}

.delete {
  background: linear-gradient(#482828, #283848);
}
</style>
