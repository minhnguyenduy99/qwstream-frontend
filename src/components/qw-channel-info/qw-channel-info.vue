<template>
  <div class="qw-channel box">
    <div class="media">
      <div class="media-left">
        <b-image :src="channel.avatar" class="is-120x120"></b-image>
      </div>
      <div
        class="media-content is-align-self-stretch is-flex is-flex-direction-column"
      >
        <p class="is-size-4 has-text-weight-bold">{{ channel.name }}</p>
        <p class="is-size-6">{{ subCountString }}</p>
        <b-button
          class="follow-btn is-align-self-flex-start px-5"
          type="is-primary"
          :disabled="isFollowed"
        >
          follow
        </b-button>
      </div>
    </div>
    <div class="mt-6">
      <p class="is-size-5 has-text-weight-bold mb-3">About me</p>
      <p class="is-size-6 has-text-justified">{{ channel.description }}</p>
    </div>
    <div class="mt-6">
      <p class="is-size-5 has-text-weight-bold mb-3">Follow me</p>
      <div class="qw-channel__social is-flex">
        <div
          class="qw-channel__icon mr-3"
          v-for="social in channel.social"
          :key="social.id"
        >
          <slot name="social">
            <qw-social
              :icon="social.icon"
              :social="social"
              :custom-class="social['icon-class']"
            />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QwSocial from "./qw-social";

export default {
  name: "QwChannelInfo",
  components: {
    QwSocial
  },
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
        default: ""
      },
      description: String,
      social: {
        type: Array,
        default: []
      }
    },
    "is-followed": Boolean
  },
  computed: {
    subCountString() {
      return `${this.channel.subs} subcribers`;
    }
  }
};
</script>

<style scoped lang="scss">
.follow-btn {
  margin-top: auto;
  margin-bottom: 0.5rem;
}
</style>
