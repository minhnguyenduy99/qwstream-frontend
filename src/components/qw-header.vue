<template>
  <div>
    <b-navbar transparent spaced type="is-primary">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '../assets/logo,png' }">
          <img src="@/assets/logo.png" alt="QWStream Logo" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" to="#" class="is-size-5">
          Home
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="#" class="is-size-5">
          About Us
        </b-navbar-item>
        <b-navbar-item
          tag="div"
          :active="false"
          class="search-area is-flex is-align-items-center is-justify-content-space-between"
        >
          <b-field class="mb-0 mr-3" style="width: 400px">
            <b-input
              class="is-primary-light"
              custom-class="pl-4"
              placeholder="Search channel and stream"
              icon-right="search"
              expanded
              size="is-medium"
            />
          </b-field>
        </b-navbar-item>
        <b-navbar-item tag="div">
          <b-dropdown multiple aria-role="list">
            <button class="button is-primary is-light" slot="trigger">
              <span class="has-text-white">Categories</span>
              <b-icon icon="chevron-down" type="is-light"></b-icon>
            </button>
            <b-dropdown-item
              v-for="cat in categoryOptions"
              :key="cat.id"
              custom
              :focusable="false"
            >
              {{ cat.name }}
            </b-dropdown-item>
          </b-dropdown>
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <b-button
            outlined
            type="is-secondary"
            class="trans-hover px-5 has-text-weight-bold has-text-light has-border-primary"
            >Login</b-button
          >
        </b-navbar-item>
        <b-navbar-item tag="div">
          <QWBadge
            src="data:image/jpeg;base64,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"
          />
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
// import QWIconButton from "@/components/qw-icon-button.vue";
import QWBadge from "@/components/qw-badge.vue";

export default {
  name: "QWHeader",
  components: {
    QWBadge
  },
  data: () => ({
    logo: "@/assets/logo.png",
    categoryOptions: [
      { id: 1, name: "Category 1" },
      { id: 2, name: "Category 2" },
      { id: 3, name: "Category 3" },
      { id: 4, name: "Category 4" }
    ]
  })
};
</script>
