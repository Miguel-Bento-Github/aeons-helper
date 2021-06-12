import { createStore } from "vuex";
export default createStore({
  state() {
    return { players: [] };
  },
  mutations: {
    setPlayers(state, payload) {
      state.players.push(payload);
    },
  },
  getters: {
    players(state) {
      return state.players;
    },
  },
  modules: {},
});
