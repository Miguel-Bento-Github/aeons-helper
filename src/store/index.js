import { createStore } from "vuex";
export default createStore({
  state() {
    return { players: [], difficulty: "easy" };
  },
  mutations: {
    setPlayers(state, payload) {
      state.players.push(payload);
    },
    setDifficulty(state, payload) {
      state.difficulty = payload;
    },
  },
  getters: {
    players(state) {
      return state.players;
    },
  },
  modules: {},
});
