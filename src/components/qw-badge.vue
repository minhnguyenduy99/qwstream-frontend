<template>
  <div>
    <b-dropdown :position="position">
      <div slot="trigger" slot-scope="{ active }">
        <figure
          :class="{
            image: true,
            'is-32x32': true,
            'is-1by1': true,
            active: active
          }"
        >
          <img :src="src" class="is-rounded" />
        </figure>
      </div>
      <b-dropdown-item custom :focusable="false">
        <span class="has-text-weight-bold">Account name</span>
      </b-dropdown-item>
      <b-dropdown-item custom :focusable="false">
        <div class="is-flex is-justify-content-space-between">
          <div>
            <span class="has-text-grey-darker">Online</span>
          </div>
          <b-switch class="single" type="is-primary"></b-switch>
        </div>
      </b-dropdown-item>
      <b-dropdown-item custom :focusable="false" class="mt-3">
        <div class="buttons">
          <b-button type="is-primary is-light" class="is-fullwidth trans-hover"
            >Channels</b-button
          >
          <b-button type="is-primary is-light" class="is-fullwidth trans-hover"
            >Profile</b-button
          >
          <b-button
            type="is-secondary"
            outlined
            class="is-fullwidth trans-hover"
            >Logout</b-button
          >
        </div>
      </b-dropdown-item>
      <!-- <b-dropdown-item custom :focusable="false">
        <b-button type="is-primary is-light" class="is-fullwidth"
          >Channels</b-button
        >
      </b-dropdown-item>
      <b-dropdown-item custom :focusable="false">
        <b-button type="is-primary is-light" class="is-fullwidth"
          >Profile</b-button
        >
      </b-dropdown-item>
      <b-dropdown-item custom :focusable="false">
        <b-button
          type="is-success is-light"
          outlined
          class="is-fullwidth has-text-dark trans-hover"
          >Logout</b-button
        >
      </b-dropdown-item> -->
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "QWBadge",
  props: {
    src: String,
    position: {
      type: String,
      required: false,
      default: "is-bottom-left",
      validator: function(value) {
        return [
          "is-bottom-right",
          "is-top-right",
          "is-top-left",
          "is-bottom-left"
        ].includes(value);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.image {
  cursor: pointer;
  border: 3px solid transparent;
  border-radius: 50%;
  transition: 0.1s ease-in;

  img {
    opacity: 0.9;
  }

  &.active {
    border-color: white;

    img {
      opacity: 1;
    }
  }
}
</style>
