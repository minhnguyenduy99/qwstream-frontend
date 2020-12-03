<template>
  <div class="qw-channel-info-horizontal box box-shadow-primary-light-br pl-0">
    <div class="media is-align-items-stretch">
      <div class="media-left">
        <b-image
          :src="channel.avatar"
          class="is-140x140"
          image-class="video-image"
        ></b-image>
      </div>
      <div class="media-content">
        <div class="channel-info">
          <div>
            <p class="is-size-4 has-text-weight-bold has-text-primary">
              {{ channel.name }}
            </p>
            <p class="is-size-6 has-text-secondary has-text-weight-bold">
              {{ subCountString }}
            </p>
          </div>
          <b-button
            class="follow-button"
            type="is-primary"
            :disabled="isFollowed"
          >
            follow
          </b-button>
        </div>
        <div class="channel-description">
          <span class="is-size-6 has-text-justified">{{
            channel.description
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChannelMixin from "./qw-channel.mixin";
export default {
  name: "QwChannelInfoHorizontal",
  mixins: [ChannelMixin]
};
</script>

<style scoped lang="scss">
.qw-channel-info-horizontal {
  box-sizing: border-box;
  border: none;
  cursor: pointer;

  .channel-info {
    height: 100%;
    padding: 0.25rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .follow-button {
      align-self: flex-start;
      margin-bottom: 1rem;
    }
  }

  .channel-description {
    display: none;
  }

  @include tablet {
    .channel-info {
      flex-direction: row;
      height: fit-content;
    }

    .channel-description {
      display: block;
      margin-top: 1rem;
    }
  }
}

@include box-shadow-hover("primary-light", "br");
</style>
