const DEFAULT_MIXIN_PREFIX = "socket";

const getBeforeCreate = function(mixins) {
  return function() {
    Object.keys(mixins).forEach(
      function(socketName) {
        if (this.$options[socketName]) {
          this[socketName] = this.$options[socketName];
        }
      }.bind(this)
    );
  };
};

export default class MultipleSocketsPlugin {
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
    let mixins = {};
    Object.keys(socketObj).forEach(key => {
      mixins[`${mixinPrefix}_${key}`] = socketObj[key].io;
    });
    console.log(mixins);
    Vue.mixin({
      ...mixins,
      beforeCreate: getBeforeCreate(mixins)
    });
  }
}
