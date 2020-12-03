import Vue from "vue";
import Vuex from "vuex";
import users from "./users";
import auth from "./auth";
import createPersistedState from "vuex-persistedstate";
import secureCookieStore from "./secure-cookie.store";

Vue.use(Vuex);

let _apiContext;

export default ({ apiContext }) => {
  _apiContext = apiContext;

  return new Vuex.Store({
    plugins: [secureCookieStore({ modulePath: "auth" })],
    // plugins: [secureCookieStore({ modulePath: "auth" })],
    modules: {
      users: users(_apiContext.stream),
      auth: auth(_apiContext.stream)
    }
  });
};
