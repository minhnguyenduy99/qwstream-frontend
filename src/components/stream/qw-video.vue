<template>
  <div class="qw-video">
    <slot>
      <video
        class="qw-video__element video-js"
        controls
        preload="auto"
        :poster="video.thumbnail_url"
        data-setup="{}"
      >
        <source src="MY_VIDEO.mp4" type="video/mp4" />
        <source src="MY_VIDEO.webm" type="video/webm" />
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
  name: "QwVideo",
  mixins: [QWVideoMixin]
};
</script>

<style scoped lang="scss">
.qw-video {
  & &__element {
    width: 100%;
    height: auto;
  }
}
</style>
