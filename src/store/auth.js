export default api => ({
  namespaced: true,
  state: {
    uid: "123",
    is_auth: false
  },
  mutations: {
    updateAuth(state, auth = null) {
      if (!auth) {
        state.is_auth = false;
        return;
      }
      if (!auth.uid) {
        state.is_auth = false;
        return;
      }
      state.uid = auth.uid;
      state.is_auth = true;
    }
  },
  getters: {
    isAuthenticated: state => {
      return state.is_auth;
    },
    user: state => {
      return state;
    }
  },
  actions: {
    async login({ commit, state }, data) {
      const result = await api.auth.login(data);
      // success
      if (result.data) {
        commit("updateAuth", result.data);
      } else {
        commit("updateAuth", null);
      }
      console.log(result);
      return {
        error: result.error
      };
    }
  }
});
