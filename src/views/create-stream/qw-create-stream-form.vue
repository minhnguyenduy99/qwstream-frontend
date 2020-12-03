<template>
  <div class="qw-create-stream-form modal-card box">
    <div class="modal-card-title">
      <span class="has-text-weight-bold">Stream Options</span>
    </div>
    <div class="modal-card-body">
      <form>
        <b-field label="Stream title">
          <b-input type="textarea" placeholder="Input stream title" />
        </b-field>
        <b-field label="Categories">
          <b-dropdown aria-role="list" v-model="selectedCategoryIndex">
            <button
              class="button is-primary is-light"
              slot="trigger"
              type="button"
              @click.prevent
            >
              <span class="has-text-white">{{ selectedCategoryName }}</span>
              <b-icon icon="chevron-down" type="is-light"></b-icon>
            </button>
            <b-dropdown-item
              :value="index"
              v-for="(cat, index) in categoryOptions"
              :key="cat.id"
              :focusable="false"
            >
              {{ cat.name }}
            </b-dropdown-item>
          </b-dropdown>
        </b-field>
        <b-field label="Tags">
          <b-taginput v-model="tags" type="is-secondary is-light"> </b-taginput>
        </b-field>
        <hr class="has-background-grey-lighter" />
        <b-button native-type="submit" type="is-primary">Create</b-button>
      </form>
    </div>
    <div class="close-button-wrapper">
      <b-button
        type="is-primary"
        size="is-large"
        class="close-button icon-button"
        icon-right="close-box"
      ></b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QwCreateStreamForm",
  props: {
    "form-data": Object
  },
  model: {
    event: "data-changed",
    prop: "form-data"
  },
  data: () => ({
    categoryOptions: [
      { id: 1, name: "Category 1" },
      { id: 2, name: "Category 2" },
      { id: 3, name: "Category 3" },
      { id: 4, name: "Category 4" }
    ],
    selectedCategoryIndex: -1
  }),
  created: function() {
    this.selectedCategoryIndex = 0;
  },
  computed: {
    formData: {
      get() {
        return this["form-data"];
      },
      set(value) {
        this.$emit("data-changed", value);
      }
    },
    selectedCategoryName() {
      return this.categoryOptions[this.selectedCategoryIndex].name;
    }
  }
};
</script>

<style scoped lang="scss">
.qw-create-stream-form.box {
  padding: 2rem;
  position: relative;

  > *:not(.close-button-wrapper) {
    position: relative;
  }

  .close-button-wrapper {
    position: absolute;
    transform: translateX(100%);
    right: 0;
    top: 0;
    z-index: 99;

    .icon-button {
      z-index: 6;
    }
  }

  .modal-card-body {
    padding-bottom: 0;
  }
}
</style>
