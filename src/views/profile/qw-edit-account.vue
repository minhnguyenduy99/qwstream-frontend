<template>
  <div class="qw-edit-account">
    <div class="section update-password">
      <div class="section-title is-size-5 mb-4">
        <span>Update password</span>
      </div>
      <div class="section-content">
        <ValidationObserver tag="form" ref="validator">
          <qw-validation-input
            v-model="form.old_password"
            horizontal
            custom-class="is-flex-grow-2"
            name="old password"
            type="password"
            placeholder="Your old password"
            label="Old password"
            rules="required|minmax:4,20"
            password-reveal
          />
          <qw-validation-input
            v-model="form.new_password"
            horizontal
            custom-class="is-flex-grow-2"
            name="newpassword"
            type="password"
            placeholder="New password"
            label="New password"
            rules="required|minmax:4,20"
            password-reveal
          />
          <qw-validation-input
            v-model="passwordAgain"
            horizontal
            custom-class="is-flex-grow-2"
            name="new password again"
            type="password"
            placeholder="New password"
            label="Password again"
            rules="passwordmatch:@newpassword"
            password-reveal
          />
          <b-field
            horizontal
            label=""
            class="field-submit"
            custom-class="is-flex-grow-2"
          >
            <b-button native-type="submit" type="is-primary">Save</b-button>
          </b-field>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import { QwValidationInput } from "@/components";

export default {
  name: "QwEditAccount",
  components: {
    ValidationObserver,
    QwValidationInput
  },
  data: () => ({
    form: {
      old_password: "",
      new_password: ""
    },
    passwordAgain: ""
  })
};
</script>

<style scoped lang="scss">
form {
  > * {
    &:not(:last-child) {
      margin-bottom: 0.75rem;
    }

    &.field-submit {
      margin-top: 1.5rem;
    }
  }
}

.section {
  &.update-password {
    flex-grow: 1;
  }
}

.qw-edit-account {
  @include from($desktop) {
    .section.update-password {
      width: 60%;
    }
  }
}
</style>
