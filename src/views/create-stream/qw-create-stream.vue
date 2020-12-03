<template>
  <div>
    <div class="mb-3">
      <span class="is-size-4 has-text-weight-semibold">Create stream</span>
    </div>
    <div>
      <b-button
        type="is-primary is-light"
        icon-left="lead-pencil"
        @click="modalActiveChanged"
      >
        Edit
      </b-button>
      <div class="mt-3 is-flex is-flex-wrap-wrap">
        <b-button class="mr-3" type="is-secondary" icon-left="shield-key">
          Create stream key
        </b-button>
        <b-field>
          <b-input
            id="streamkey-input"
            v-model="streamkey"
            ref="streamKeyInput"
            readonly
            type="text"
          ></b-input>
          <p class="control">
            <b-button
              class="button is-primary"
              icon-right="content-copy"
              @click="copyToClipBoard"
            />
          </p>
        </b-field>
      </div>
    </div>
    <b-modal
      v-model="isModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
    >
      <qw-create-stream-form v-model="formProps" />
    </b-modal>
  </div>
</template>

<script>
import QwCreateStreamForm from "./qw-create-stream-form";

export default {
  name: "QwCreateStream",
  components: {
    QwCreateStreamForm
  },
  data: () => ({
    isModalActive: false,
    formProps: {},
    streamkey: "Hello world"
  }),
  methods: {
    modalActiveChanged() {
      this.isModalActive = !this.isModalActive;
    },
    copyToClipBoard() {
      const input = this.$el.querySelector("#streamkey-input");
      input.select();
      input.setSelectionRange(0, 99999);
      document.execCommand("copy");
      this.$buefy.toast.open({
        message: "Copy to clipboard",
        duration: 2000,
        type: "is-primary is-light",
        position: "is-bottom"
      });
    }
  }
};
</script>

<style scoped lang="scss">
.close-button-wrapper {
  position: absolute;
  transform: translateX(100%);
  right: 0;
  top: 0;
  z-index: 5;
}

input#streamkey-input {
  user-select: none;
}
</style>
