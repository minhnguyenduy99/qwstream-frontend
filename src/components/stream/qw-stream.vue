<template>
  <div class="qw-stream">
    <div>
      <slot name="video">
        <qw-video :video="stream.video" />
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
import QwVideo from "./qw-video";
import QwStreamInfo from "./qw-stream-info";
import QwStreamInfoSm from "./qw-stream-info-sm";

export default {
  name: "QwStream",
  components: {
    QwVideo,
    QwStreamInfo,
    QwStreamInfoSm
  },
  props: {
    "stream-info-class": String,
    type: {
      type: String,
      required: false,
      default: "detail",
      validator: function(value) {
        return ["detail", "general"].includes(value);
      }
    },
    stream: {
      title: {
        type: String,
        required: true,
        default: ""
      },
      category: {
        type: String,
        required: true,
        default: ""
      },
      tags: {
        type: [],
        required: true,
        default: []
      },
      view_count: {
        type: Number,
        required: true,
        default: 0
      },
      stream_time_start: {
        type: Number,
        required: true,
        default: Date.now()
      }
    }
  },
  computed: {
    displayedView() {
      return `${this.stream.view_count} views`;
    },
    displayedStreamTime() {
      const duration = Date.now() - this.stream.stream_time_start;
      return `Stream ${new Date(duration).getHours()} ago`;
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
