<template>
  <div class="qw-form qw-profile-form box">
    <div class="qw-form-title">
      <span class="has-text-weight-bold has-text-primary">Register</span>
    </div>
    <div class="qw-form-content">
      <validation-observer tag="form" ref="validator">
        <b-field label="Your date of birth">
          <b-datepicker
            icon="calendar-today"
            v-model="form.date_of_birth"
            editable
            size="is-small"
          ></b-datepicker>
        </b-field>
        <qw-validation-input
          v-model="form.display_name"
          name="display name"
          placeholder="Your display name"
          label="How do we call you ?"
          rules="required|minmax:3,20"
        />
        <b-field
          class="file is-primary"
          label="Upload your avatar"
          :class="{ 'has-name': !!form.file }"
        >
          <b-upload v-model="form.file" class="file-label" accept="image/*">
            <span class="file-cta">
              <b-icon class="file-icon" icon="upload"></b-icon>
              <span class="file-label">Click to upload</span>
            </span>
            <span class="file-name" v-if="form.file">
              {{ form.file.name }}
            </span>
          </b-upload>
        </b-field>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import { QwValidationInput } from "@/components";

export default {
  name: "QwProfileForm",
  components: {
    QwValidationInput,
    "validation-observer": ValidationObserver
  },
  data: () => ({
    form: {
      display_name: "",
      date_of_birth: null,
      file: null
    }
  }),
  methods: {
    async validateForm() {
      const valid = await this.$refs.validator.validate();
      if (valid) {
        return {
          valid: true,
          form: this.form
        };
      }
      return {
        valid: false,
        form: null
      };
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

.file-name {
  max-width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
