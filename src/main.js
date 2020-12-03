import Vue from "vue";
import VueResource from "vue-resource";
import io from "socket.io-client";
import "mux.js";
import Buefy from "buefy";
import "@mdi/font/css/materialdesignicons.css";
import App from "./App.vue";
import router from "./router";
import createStore from "./store";
import { VueSocketIOPlugin } from "./lib/vue-socketio";
import { ValidatorPlugin, ApiContextPlugin } from "./plugins";
import createStreamAPI from "./api";

Vue.config.productionTip = false;

// const streamSocket = io("http://127.0.0.1:3016", {
//   path: "/stream",
//   autoConnect: true
// });

// Vue.use(
//   new VueSocketIOPlugin({
//     socketObj: {
//       stream: streamSocket
//     }
//   })
// );

const apiPlugin = new ApiContextPlugin({
  useFactory: createStreamAPI,
  endpoint: "http://localhost:3000"
});

const store = createStore({
  apiContext: {
    stream: apiPlugin.API
  }
});

Vue.use(Buefy);
Vue.use(VueResource);
Vue.use(new ValidatorPlugin());
Vue.use(apiPlugin, { key: "stream" });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
