const DEFAULT_MIXIN_PREFIX = "socket";
import { VueSocketIOMixins } from "./mixins";

export class VueSocketIOPlugin {
  pluginOptions = {
    mixinPrefix: DEFAULT_MIXIN_PREFIX,
    socketObj: {}
  };

  constructor(pluginOptions) {
    this.pluginOptions = {
      ...this.pluginOptions,
      ...pluginOptions
    };
  }

  install(Vue) {
    const { mixinPrefix, socketObj } = this.pluginOptions;
    let sockets = {};
    Object.keys(socketObj).forEach(socketName => {
      let socket = socketObj[socketName];
      this.__registerRequestSocketType(socket);
      sockets[`${mixinPrefix}_${socketName}`] = socket;
    });
    Vue.prototype.$sockets = sockets;
    Vue.mixin(VueSocketIOMixins);
  }

  /**
   * Supports request-response communication in socket
   */
  __registerRequestSocketType(socket) {
    socket.request = (eventName, data = {}) => {
      return new Promise((resolve, reject) => {
        socket.emit(eventName, data, data => {
          if (data.error) {
            reject(data.error);
          } else {
            resolve(data);
          }
        });
      });
    };
  }
}
