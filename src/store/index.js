/**
 *
 * Enthält Store Settings und Charakter Store
 *
 */

/**
 * Plugins importieren
 */
import { createStore } from "vuex";
import auth from "./auth";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  /**
   * Ladestatus
   * Charaktere State
   * Charakterbogen State
   * Charakter Tool Zwischenspeicher
   */
  state: {
    isLoading: false,
    characters: {},
    charactersheetData: {},
    charactertoolData: {},
  },
  mutations: {
    SET_CHARACTERS(state, value) {
      state.characters = value;
    },
    SET_CHARACTERSHEETDATA(state, value) {
      state.charactersheetData = value;
    },
    SET_CHARACTERTOOLDATA(state, value) {
      state.charactertoolData = value;
    },
  },
  actions: {
    setCharacterState({ commit }, characters) {
      commit("SET_CHARACTERS", characters);
    },
    setCharacterSheetDataState({ commit }, character) {
      commit("SET_CHARACTERSHEETDATA", character);
    },
    setCharactertoolData({ commit }, character) {
      commit("SET_CHARACTERTOOLDATA", character);
    },
    clearCharactertoolData({ commit }) {
      commit("SET_CHARACTERTOOLDATA", {});
    },
    clearCharacterData({ commit }) {
      commit("SET_CHARACTERS", null);
      commit("SET_CHARACTERSHEETDATA", null);
    },
  },
  getters: {
    characters(state) {
      return state.characters;
    },
    charactersheetData(state) {
      return state.charactersheetData;
    },
    charactertoolData(state) {
      return state.charactertoolData;
    },
  },
  modules: { auth },
  plugins: [
    createPersistedState({
      paths: [
        "charactersheetData",
        "charactertoolData",
        "auth.user",
        "auth.authenticated",
      ],
    }),
  ],
});
