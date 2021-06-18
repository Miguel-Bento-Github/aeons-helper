import { createStore } from "vuex";
export default createStore({
  state() {
    return { nemesis: {}, players: [], difficulty: "normal" };
  },
  mutations: {
    setPlayers(state, payload) {
      state.players.push(payload);
    },
    setNemesis(state, payload) {
      state.nemesis = payload;
      state.nemesis.defaultHealth = payload.health;
    },
    setDifficulty(state, payload) {
      state.difficulty = payload;
    },
    setPlayersHealth(state) {
      const playerHealth = {
        easy: 12,
        normal: 10,
        expert: 9,
      };

      state.players.forEach((player) => {
        player.health = playerHealth[state.difficulty];
      });
    },
    setNemesisHealth(state) {
      const updateNemesisHealth = () => {
        const { nemesis } = state;

        const nemesisHealth = {
          easy: () => (nemesis.health = nemesis.defaultHealth - 10),
          normal: () => (nemesis.health = nemesis.defaultHealth),
          expert: () => (nemesis.health = nemesis.defaultHealth + 10),
        };

        nemesis.health = nemesisHealth[state.difficulty]();
      };

      updateNemesisHealth();
    },
  },
  actions: {
    setDifficulty(context, payload) {
      context.commit("setDifficulty", payload);
      context.commit("setPlayersHealth");
      context.commit("setNemesisHealth");
    },
  },
  getters: {
    players(state) {
      return state.players;
    },
  },
  modules: {},
});
