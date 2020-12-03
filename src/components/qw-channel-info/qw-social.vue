<template>
  <a
    class="qw-social is-flex is-align-items-center is-justify-content-center"
    :href="social.url"
    target="blank"
  >
    <b-icon v-bind="$attrs" size="is-medium"></b-icon>
  </a>
</template>

<script>
export default {
  name: "QwSocial",
  inheritAttrs: false,
  props: {
    social: {
      url: String
    }
  }
};
</script>
