<template>
  <div>
    <b-steps
      v-model="activeStep"
      :has-navigation="false"
      size="is-small"
      type="is-secondary"
    >
      <b-step-item
        type="is-primary"
        v-if="steps[0].displayed"
        :key="0"
        :visible="steps[0].visible"
        :label="steps[0].label"
      >
        <qw-register-form ref="account-form" />
      </b-step-item>
      <b-step-item
        type="is-primary"
        v-if="steps[1].displayed"
        :key="1"
        :visible="steps[1].visible"
        :label="steps[1].label"
      >
        <qw-profile-form ref="profile-form" />
      </b-step-item>
      <template v-slot:navigation="{ next }">
        <b-button
          v-if="activeStep === 0"
          type="is-primary"
          class="mt-2 is-fullwidth py-5"
          @click="performValidation(next.action)"
          >CONTINUE</b-button
        >
        <b-button
          v-else
          type="is-primary"
          class="mt-2 is-fullwidth py-5"
          @click="validateAndSubmit"
          >REGISTER</b-button
        >
      </template>
    </b-steps>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import QwRegisterForm from "./qw-register-form";
import QwProfileForm from "./qw-profile-form";

export default {
  name: "QwRegister",
  components: {
    QwRegisterForm,
    QwProfileForm
  },
  data: () => ({
    steps: [
      {
        label: "Account",
        displayed: true
      },
      {
        label: "Profile",
        displayed: true
      }
    ],
    active: {
      continueBtn: false,
      registerBtn: false
    },
    forms: {
      accountForm: null,
      profileForm: null
    },
    activeStep: 0
  }),
  computed: {
    isLastStep() {
      return this.activeStep === this.steps.length - 1;
    },
    accountForm() {
      return this.$refs["account-form"];
    },
    profileForm() {
      return this.$refs["profile-form"];
    }
  },
  methods: {
    ...mapActions("users", ["createUser"]),

    async performValidation(action) {
      const { isValid, form } = await this.accountForm.validateForm();
      if (isValid) {
        this.forms.accountForm = form;
        action();
      }
    },
    async validateAndSubmit() {
      const { valid, form } = await this.profileForm.validateForm();
      if (!valid) {
        return;
      }
      this.forms.profileForm = form;
      this.createUser(this.forms.accountForm).then(result => {
        console.log(result);
        if (result.data) {
          console.log("Create user successfully");
        } else {
          console.log(result.error);
        }
      });
    }
  }
};
</script>

<style scoped lang="scss"></style>
