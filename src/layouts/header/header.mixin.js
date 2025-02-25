import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("auth", ["isAuthenticated", "user"])
  }
};
