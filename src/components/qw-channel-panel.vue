<template>
  <div class="pw-channel-panel is-flex is-align-items-stretch">
    <b-button
      v-if="!active"
      class="panel-active active animated fadeIn"
      icon-left="angle-double-right"
      size="is-small"
      @click="onActiveChanged"
    ></b-button>
    <transition
      name="pannel-display"
      enter-active-class="animated slideInLeft faster"
      leave-active-class="animated slideOutLeft faster"
    >
      <div v-if="active" class="panel-content">
        <b-button
          class="panel-active"
          icon-left="angle-double-left"
          size="is-small"
          @click="onActiveChanged"
        ></b-button>
        <p class="has-text-light has-text-weight-bold">SUBCRIBED CHANNELS</p>
        <ul class="panel-list mt-3">
          <li class="panel-item" v-for="channel in channels" :key="channel.id">
            <slot name="channel-info" :v-bind="{ channel: channel }">
              <qw-channel-badge :channel="channel" />
            </slot>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import QwChannelBadge from "./channel/qw-channel-badge";

export default {
  name: "QWChannelPanel",
  components: {
    QwChannelBadge
  },
  data: () => ({
    active: true,
    channels: [
      {
        id: 1,
        name: "Channel A",
        subs: 1600,
        avatar:
          "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"
      },
      {
        id: 2,
        name: "Channel B",
        subs: 1600,
        avatar:
          "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"
      },
      {
        id: 3,
        name: "Channel C",
        subs: 1600,
        avatar:
          "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"
      },
      {
        id: 4,
        name: "Channel D",
        subs: 1600,
        avatar:
          "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"
      }
    ]
  }),
  methods: {
    onActiveChanged() {
      this.active = !this.active;
      this.$emit("active", this.active);
    }
  }
};
</script>

<style scoped lang="scss">
.pw-channel-panel {
  position: relative;
  min-height: 400px;

  .panel-content {
    @extend .box, .shadow-primary, .p-3, .has-background-primary-light;
    border-radius: 0;
    min-width: 250px;
  }

  .panel-active {
    position: absolute;
    top: 10px;
    right: 10px;

    &.active {
      left: 0;
      right: unset;
      animation-delay: 200ms;
    }
  }
}

.panel-item {
  &:not(:last-child) {
    @extend .mb-2;
  }
}
</style>
