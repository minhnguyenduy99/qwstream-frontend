<template>
  <div>
    <b-navbar fixed-top centered type="is-primary">
      <template slot="start">
        <b-navbar-item
          tag="router-link"
          :to="{ path: '../assets/logo,png' }"
          :active="false"
        >
          <img src="@/assets/logo.png" alt="QWStream Logo" />
        </b-navbar-item>
        <b-navbar-item
          tag="router-link"
          to="#"
          class="is-size-6 has-text-weight-bold"
        >
          Home
        </b-navbar-item>
        <b-navbar-item
          tag="router-link"
          to="#"
          class="is-size-6 has-text-weight-bold"
        >
          About Us
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "QwHeaderSimple"
};
</script>
