export const VueSocketIOMixins = {
  beforeCreate: function() {
    Object.keys(this.$sockets).forEach(
      function(socketName) {
        if (this[socketName]) this[socketName] = {};
      }.bind(this)
    );
  },

  mounted: function() {
    Object.keys(this.$sockets).forEach(
      function(socketName) {
        // get the current socket
        let socket = this.$sockets[socketName];
        const events = this.$options[socketName] ?? {};

        Object.keys(events).forEach(
          function(eventName) {
            // add event listern to socket
            socket.on(eventName, events[eventName].bind(this));
          }.bind(this)
        );
      }.bind(this)
    );
  },

  beforeDestory: function() {
    Object.keys(this.$sockets).forEach(socketName => {
      let socket = this.$sockets[socketName];
      const events = this.$options[socketName] ?? {};
      if (!events) {
        return;
      }
      socket.removeAllListeners();
    });
  }
};
