<template>
  <div class="qw-register-form qw-form box">
    <div class="qw-form-title">
      <span class="has-text-weight-bold has-text-primary">Register</span>
    </div>
    <div class="qw-form-content">
      <validation-observer tag="form" ref="validator">
        <qw-validation-input
          icon="email"
          v-model.lazy="form.email"
          name="email"
          rules="required|email"
          placeholder="email"
        />
        <qw-validation-input
          icon="account"
          v-model.lazy="form.username"
          name="username"
          rules="required|minmax:4,30"
          placeholder="username"
        />
        <qw-validation-input
          icon="key-variant"
          v-model.lazy="form.password"
          type="password"
          name="password"
          rules="required|minmax:4,30"
          placeholder="password"
          password-reveal
        />
        <qw-validation-input
          icon="key-variant"
          v-model.lazy="passwordAgain"
          type="password"
          name="password-again"
          rules="passwordmatch:@password"
          placeholder="password again"
          password-reveal
        />
      </validation-observer>
    </div>
  </div>
</template>

<script>
import { QwValidationInput } from "@/components";
import { ValidationObserver } from "vee-validate";

export default {
  components: {
    QwValidationInput,
    "validation-observer": ValidationObserver
  },
  data: () => ({
    passwordAgain: "",
    form: {
      email: "",
      username: "",
      password: ""
    }
  }),
  methods: {
    async validateForm() {
      const valid = await this.$refs.validator.validate();
      this.$emit("validate", valid);
      if (valid) {
        return {
          isValid: true,
          form: this.form
        };
      }
      return {
        isValid: false,
        form: null
      };
    },
    setErrors(errors) {
      this.$refs.validator.setErrors(errors);
    }
  }
};
</script>

<style scoped lang="scss"></style>
