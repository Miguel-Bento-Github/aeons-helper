import { onUnmounted, ref } from "vue";
import { playerCollection } from "@/firebase";

/**
 *
 * @param {string} id
 * @returns A reactive player list
 */
export const getPlayer = async (id) => {
  const player = await playerCollection.doc(id).get();
  return player.exists ? player.data() : null;
};

/**
 * Creates a new player.
 * @param {string} player
 */
export const createPlayer = (player) => playerCollection.add(player);

/**
 * Deletes a player
 * @param {string} id
 */
export const deletePlayer = (id) => playerCollection.doc(id).delete();

/**
 * Updates a player
 * @param {string} id
 * @param {{ name: string, life: number }} user
 */
export const updatePlayer = (id, user) => playerCollection.doc(id).update(user);

/**
 * Gets a list of all players.
 */
export const getPlayers = async () => {
  const snapshot = await playerCollection.get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

/**
 * Load users hook.
 *
 * Whenever changes are detected in the database we update the hook.
 *
 * @returns The list of players
 */
export const useLoadPlayers = () => {
  const players = ref([]);
  const close = playerCollection.onSnapshot((snapshot) => {
    players.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });

  onUnmounted(close);
  return players;
};
