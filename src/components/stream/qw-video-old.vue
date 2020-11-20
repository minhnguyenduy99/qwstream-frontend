<template>
  <div>
    <b-image :src="video.thumbnail" ratio="16by9"></b-image>
  </div>
</template>

<script>
import QWVideoMixin from "./qw-video.mixin";

export default {
  name: "QwVideoOld",
  mixins: [QWVideoMixin]
};
</script>
