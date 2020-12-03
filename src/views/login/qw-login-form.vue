<template>
  <div class="qw-form qw-login-form box">
    <div class="qw-form-title">
      <span class="has-text-weight-bold has-text-primary">Login</span>
    </div>
    <div class="qw-form-content">
      <ValidationObserver tag="form" ref="validator">
        <qw-validation-input
          icon="account"
          v-model.lazy="form.username"
          name="username"
          rules="required"
          placeholder="username"
        />
        <qw-validation-input
          icon="key-variant"
          v-model.lazy="form.password"
          type="password"
          name="password"
          rules="required"
          placeholder="password"
          password-reveal
        />
        <qw-validation-input
          :hidden-input="true"
          class="mb-0"
          name="general"
          message-class="is-size-6"
        />
        <b-button
          type="is-primary"
          native-type="submit"
          :loading="isLoading"
          class="mt-3 py-5 is-fullwidth has-text-weight-bold"
          @click.prevent="login"
          >Login</b-button
        >
      </ValidationObserver>
      <div
        class="mt-6 is-fullwidth is-flex is-flex-direction-column is-align-items-center"
      >
        <span class="is-size-6">Don't have an account ?</span>
        <span class="has-text-weight-bold is-size-5">
          <router-link class="has-text-secondary" to="/register"
            >Register</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import { mapActions } from "vuex";
import { QwValidationInput } from "@/components";

export default {
  name: "QwLoginForm",
  components: {
    QwValidationInput,
    ValidationObserver
  },
  data: () => ({
    form: {
      username: "",
      password: ""
    },
    isLoading: false
  }),
  methods: {
    ...mapActions("auth", {
      loginAction: "login"
    }),

    async login() {
      const isValid = await this.$refs["validator"].validate();
      if (!isValid) {
        return;
      }
      this.isLoading = true;
      this.loginAction(this.form).then(({ error }) => {
        this.isLoading = false;
        if (!error) {
          this.$router.push({ name: "Stream" });
          return;
        }
        this.$refs.validator.setErrors({
          general: [error]
        });
      });
    }
  }
};
</script>

<style scoped lang="scss">
form {
  .field {
    &:not(:last-child) {
      margin-bottom: 1.25rem;
    }
  }
}

.field.file {
  flex-direction: column;
  label {
    &:first-child {
      display: block;
    }
  }
}
</style>
