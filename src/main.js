import Vue from "vue";
import VueResource from "vue-resource";
import io from "socket.io-client";
import "mux.js";
import Buefy from "buefy";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { VueSocketIOPlugin } from "./lib/vue-socketio";

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

Vue.use(Buefy, {
  defaultIconPack: "fa"
});

Vue.use(VueResource);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
