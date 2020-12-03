<template>
  <div>
    <qw-register-form ref="account-form" />
    <b-button
      type="is-primary"
      class="mt-2 is-fullwidth py-5"
      @click="validateAndSubmit"
      :loading="loading"
      >REGISTER</b-button
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";
import QwRegisterForm from "./qw-register-form";

export default {
  name: "QwRegisterAccount",
  components: {
    QwRegisterForm
  },
  data: () => ({
    loading: false
  }),
  computed: {
    accountForm() {
      return this.$refs["account-form"];
    }
  },
  methods: {
    ...mapActions("users", ["createUser"]),

    async validateAndSubmit() {
      const { isValid, form } = await this.accountForm.validateForm();
      if (!isValid) {
        return;
      }
      this.loading = true;
      this.createUser(form).then(result => {
        this.loading = false;
        if (result.data) {
          this.$buefy.toast.open({
            message: "Create account sucessfully",
            type: "is-success",
            duration: 2000
          });
          setTimeout(() => {
            this.$router.push({ name: "Login" });
          }, 1500);
        } else {
          this.accountForm.setErrors({
            username: [result.error]
          });
        }
      });
    }
  }
};
</script>

<style scoped lang="scss"></style>
