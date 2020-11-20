<template>
  <div>
    <b-button
      v-bind="$attrs"
      tag="a"
      :href="social.url"
      target="blank"
      size="is-medium"
      type="is-primary"
    >
      <b-icon :custom-class="social['icon-class']"></b-icon>
    </b-button>
  </div>
</template>

<script>
export default {
  name: "QwSocial",
  inheritAttrs: true,
  props: {
    social: {
      "icon-class": String,
      pack: {
        type: String,
        default: "fa"
      },
      url: String
    }
  }
};
</script>

<style scoped lang="scss">
.button {
  border: none;
}
</style>
