<template>
  <div class="qw-stream">
    <div>
      <slot name="video">
        <qw-video-frame :video="stream.video" />
      </slot>
    </div>
    <div :class="getStreamInfoClass()">
      <slot name="stream-info">
        <qw-stream-info-sm v-if="type === 'general'" :stream="stream" />
        <qw-stream-info v-else-if="type === 'detail'" :stream="stream" />
      </slot>
    </div>
  </div>
</template>

<script>
import QwVideoFrame from "./qw-video-frame";
import QwStreamInfo from "./qw-stream-info";
import QwStreamInfoSm from "./qw-stream-info-sm";
import QwStreamInfoMixin from "./qw-stream-info.mixin";

export default {
  name: "QwStream",
  components: {
    QwVideoFrame,
    QwStreamInfo,
    QwStreamInfoSm
  },
  mixins: [QwStreamInfoMixin],
  props: {
    "stream-info-class": String,
    type: {
      type: String,
      required: false,
      default: "detail",
      validator: function(value) {
        return ["detail", "general"].includes(value);
      }
    }
  },
  methods: {
    getStreamInfoClass() {
      let streamInfoClass = ["qw-stream__info"];
      switch (this.type) {
        case "general":
          streamInfoClass.push("is-general");
          break;
        case "detail":
          streamInfoClass.push("is-detail");
          break;
      }
      return streamInfoClass;
    }
  }
};
</script>

<style scoped lang="scss">
.qw-stream {
  & &__video {
    width: 100%;
    height: auto;
  }

  & &__info {
    @extend .box, .has-background-light;

    border-radius: 0;

    &.is-general {
      @extend .p-2;
    }
  }
}
</style>
