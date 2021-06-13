import { createStore } from "vuex";
export default createStore({
  state() {
    return {
      nemesis: { name: "", health: null },
      players: [],
      difficulty: "easy",
    };
  },
  mutations: {
    setNemesis(state, payload) {
      state.nemesis = payload;
    },
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
