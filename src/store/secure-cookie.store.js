import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";

export default ({ modulePath }) => {
  return createPersistedState({
    paths: [modulePath],
    storage: {
      getItem: key => {
        return Cookies.get(key);
      },
      setItem: (key, value) => Cookies.set(key, value),
      removeItem: key => Cookies.remove(key)
    }
  });
};
