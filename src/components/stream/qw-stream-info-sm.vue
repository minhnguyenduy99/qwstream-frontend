<template>
  <div>
    <p class="is-size-5 has-text-weight-bold mb-3">{{ stream.title }}</p>
    <p class="is-size-6">{{ displayedView }}</p>
  </div>
</template>

<script>
import QwStreamInfoMixin from "./qw-stream-info.mixin";
export default {
  name: "QwStreamInfoSm",
  mixins: [QwStreamInfoMixin]
};
</script>
