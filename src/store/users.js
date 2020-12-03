export default api => ({
  namespaced: true,
  actions: {
    async createUser(context, data) {
      console.log(api);
      return api.user.register(data);
    }
  }
});
