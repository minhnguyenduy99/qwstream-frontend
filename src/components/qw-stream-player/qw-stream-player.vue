<template>
  <div class="qw-stream-player">
    <div>
      <slot name="video">
        <qw-video-frame :video="stream.video" />
      </slot>
    </div>
    <div class="qw-stream-player__info box p-4 m-0">
      <div class="is-size-4 has-text-weight-bold mb-1">
        {{ stream.title }}
      </div>
      <div class="columns is-variable is-0 m-0">
        <div class="column is-three-quarters is-three-quarters-mobile">
          <p class="mb-3 is-size-6">
            Category:
            <strong>{{ stream.category }}</strong>
          </p>
          <b-taglist>
            <b-tag
              v-for="tag in stream.tags"
              :key="tag.id"
              class="has-text-dark"
              size="is-medium"
              type="is-secondary is-light"
            >
              {{ tag }}
            </b-tag>
          </b-taglist>
        </div>
        <div class="column is-one-quarter has-text-right has-text-left-mobile">
          <p class="mb-2 is-size-5">
            <span class="has-text-weight-bold ">{{ displayedView }}</span> views
          </p>
          <p class="is-size-6">{{ displayedStreamTime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QwVideoFrame from "./qw-video-frame";
import QwStreamInfoMixin from "../qw-stream-info/qw-stream-info.mixin";

export default {
  name: "QwStreamPlayer",
  components: {
    QwVideoFrame
  },
  mixins: [QwStreamInfoMixin]
};
</script>

<style scoped lang="scss">
.qw-stream-player {
  &__info {
    border-radius: none;
  }
}
</style>
