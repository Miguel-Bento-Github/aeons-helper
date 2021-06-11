import firebase from "firebase";
import { onUnmounted, ref } from "vue";

const config = {
  apiKey: "AIzaSyCck8xFHW4CGuek9Z4m8ZE0Z3ATereTXD4",
  authDomain: "board-game-tracker-bento.firebaseapp.com",
  projectId: "board-game-tracker-bento",
  storageBucket: "board-game-tracker-bento.appspot.com",
  messagingSenderId: "752185146572",
  appId: "1:752185146572:web:4135915d173043c0879669",
  measurementId: "G-D2BM5EHD6P",
};

export const firebaseApp = firebase.initializeApp(config);
export const db = firebaseApp.firestore();
export const playerCollection = db.collection("players");

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
