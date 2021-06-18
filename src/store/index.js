import { updatePlayer } from "@/api/player";
import { graveholdHealth, playersHealth } from "@/global/healthDefaults";
import { findInArrayOfObjectsById } from "@/utils/findInArrayOfObjects";
import { createStore } from "vuex";
import { updateGravehold } from "../api/gravehold";
import { updateNemesis } from "../api/nemesis";

export default createStore({
  state() {
    return {
      nemesis: {},
      players: [],
      difficulty: "normal",
      gravehold: 0,
    };
  },
  mutations: {
    /**
     * Difficulty
     */
    setDifficulty(state, payload) {
      state.difficulty = payload;
    },

    /**
     * Players
     */
    setPlayersDefaultHealth(state) {
      state.players.forEach((player) => {
        player.health = playersHealth[state.difficulty];
        updatePlayer(player.id, player);
      });
    },

    /**
     * Player
     */
    setPlayer(state, payload) {
      state.players.push(payload);
    },
    increasePlayerHealth(state, { id, amount }) {
      const [player] = findInArrayOfObjectsById(state.players, id);
      player.health += amount;
      updatePlayer(id, player);
    },
    decreasePlayerHealth(state, { id, amount }) {
      const [player] = findInArrayOfObjectsById(state.players, id);
      player.health -= player.health ? amount : 0;
      updatePlayer(id, player);
    },

    /**
     * Nemesis
     */
    setNemesis(state, payload) {
      state.nemesis = payload;
      state.nemesis.defaultHealth = payload.health;
      updateNemesis({ active: state.nemesis });
    },
    setNemesisDefaultHealth({ nemesis, difficulty }) {
      const nemesisHealth = {
        easy: () => (nemesis.health = nemesis.defaultHealth - 10),
        normal: () => (nemesis.health = nemesis.defaultHealth),
        expert: () => (nemesis.health = nemesis.defaultHealth + 10),
      };

      nemesis.health = nemesisHealth[difficulty]();
      updateNemesis({ active: nemesis });
    },
    increaseNemesisHealth({ nemesis }, payload) {
      nemesis.health += payload;
      updateNemesis({ active: nemesis });
    },
    decreaseNemesisHealth({ nemesis }, payload) {
      nemesis.health -= nemesis.health ? payload : 0;
      updateNemesis({ active: nemesis });
    },

    /**
     * Gravehold
     */
    setGravehold(state, payload) {
      state.gravehold = payload;
    },
    setGraveholdDefaultHealth(state) {
      state.gravehold = graveholdHealth[state.difficulty];
    },
    increaseGraveholdHealth(state, payload) {
      state.gravehold += payload;
      updateGravehold({ gravehold: state.gravehold });
    },
    decreaseGraveholdHealth(state, payload) {
      state.gravehold -= state.gravehold ? payload : 0;
      updateGravehold({ gravehold: state.gravehold });
    },

    /**
     * Minion
     */
    increaseMinionHealth(state, payload) {
      state.nemesis.minion[payload.minionName].health += payload.heal;
    },
    decreaseMinionHealth(state, payload) {
      const minion = state.nemesis.minion[payload.minionName].health;
      minion.health -= minion.health ? payload.damage : 0;
    },
  },
  actions: {
    setDifficulty(context, payload) {
      context.commit("setDifficulty", payload);
      context.commit("setGraveholdDefaultHealth");
      context.commit("setPlayersDefaultHealth");
      context.commit("setNemesisDefaultHealth");
    },
  },
});
