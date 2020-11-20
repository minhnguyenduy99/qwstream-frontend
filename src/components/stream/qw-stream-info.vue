<template>
  <div class="qw-stream-info">
    <div class="is-size-3 has-text-weight-bold mb-3">
      {{ stream.title }}
    </div>
    <div class="columns">
      <div class="column is-three-quarters">
        <p class="mb-3 is-size-5">
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
      <div class="column has-text-right">
        <p class="has-text-weight-bold mb-2 is-size-5">
          {{ displayedView }}
        </p>
        <p class="is-size-6">{{ displayedStreamTime }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import QwStreamInfoMixin from "./qw-stream-info.mixin";
export default {
  name: "QwStreamInfo",
  mixins: [QwStreamInfoMixin]
};
</script>
