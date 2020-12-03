<template>
  <div class="qw-video-frame">
    <slot>
      <video
        class="qw-video-frame__element video-js vjs-16-9"
        controls
        preload="auto"
        :poster="video.thumbnail_url"
        data-setup="{}"
      >
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank"
            >supports HTML5 video</a
          >
        </p>
      </video>
    </slot>
  </div>
</template>

<script>
import QWVideoMixin from "./qw-video.mixin";
export default {
  name: "QwVideoFrame",
  mixins: [QWVideoMixin]
};
</script>

<style scoped lang="scss">
.qw-video-frame {
  & &__element {
    width: 100%;
  }
}
</style>
