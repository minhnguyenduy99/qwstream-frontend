<template>
  <div class="channel-badge media is-align-items-center p-1">
    <div class="media-left">
      <b-image :src="channel.avatar" class="is-50x50"></b-image>
    </div>
    <div
      class="media-content is-flex is-flex-direction-column is-justify-content-center is-fullheight"
    >
      <p class="has-text-light has-text-weight-bold">{{ channel.name }}</p>
      <small class="has-text-light">{{ subCountString }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "QwChannelBadge",
  props: {
    channel: {
      avatar: {
        type: String,
        required: true,
        default: ""
      },
      name: {
        type: String,
        required: true,
        default: ""
      },
      subs: {
        type: Number,
        required: true,
        default: 0
      }
    }
  },
  computed: {
    subCountString() {
      return this.channel.subs;
    }
  }
};
</script>

<style scoped lang="scss">
.channel-badge {
  cursor: pointer;
  border-radius: $radius;
  transition: 0.05s ease-in;

  &:hover {
    background: $primary-dark;
  }

  .media-left {
    margin-right: 0.5rem;
  }
}
</style>
