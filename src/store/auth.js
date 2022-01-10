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
    async login({ dispatch }, credentials) {
      await axios.get("/sanctum/csrf-cookie");
      await axios
        .post("/api/login", credentials)
        .then(() => {
          return dispatch("getUser");
        })
        .catch(({ response: data }) => {
          throw data;
        });
    },

    async logout({ dispatch }) {
      await axios.post("/api/logout");
      dispatch("clearCharacterData", null, { root: true });
      return dispatch("getUser");
    },

    async register({ dispatch }, credentials) {
      await axios
        .post("/api/register", credentials)
        .then(({ data }) => {
          console.log(data.message);
          return dispatch("getUser");
        })
        .catch(({ response: data }) => {
          throw data;
        });
    },

    async getUser({ commit }) {
      return await axios
        .get("/api/user")
        .then((response) => {
          commit("SET_AUTHENTICATED", true);
          commit("SET_USER", response.data);
        })
        .catch(() => {
          commit("SET_AUTHENTICATED", false);
          commit("SET_USER", null);
        });
    },
  },
};
