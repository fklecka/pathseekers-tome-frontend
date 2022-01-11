import axios from "axios";

export default {
  namespaced: true,

  state: {
    authenticated: false,
    user: null,
    errors: [],
  },

  getters: {
    authenticated(state) {
      return state.authenticated;
    },

    user(state) {
      return state.user;
    },
  },

  mutations: {
    SET_AUTHENTICATED(state, value) {
      state.authenticated = value;
    },

    SET_USER(state, value) {
      state.user = value;
    },
  },

  actions: {
    async getUser({ commit }, { apiUrl, headers }) {
      const apiEndpoint = `${apiUrl}/user`;
      await axios
        .get(apiEndpoint, headers)
        .then((response) => {
          commit("SET_AUTHENTICATED", true);
          commit("SET_USER", response.data);
        })
        .catch(() => {
          commit("SET_AUTHENTICATED", false);
          commit("SET_USER", null);
        });
    },
    logout({ commit }) {
      commit("SET_USER", {});
      commit("SET_AUTHENTICATED", false);
    },
  },
};
