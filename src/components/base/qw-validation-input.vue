<template>
  <div class="qw-validation qw-input">
    <ValidationProvider
      :name="$attrs.name"
      :rules="$attrs.rules"
      v-slot="{ errors, valid }"
    >
      <b-field
        :label-position="$attrs['label-position']"
        :horizontal="$attrs.horizontal"
        :label="$attrs.label"
        :custom-class="$attrs['custom-class']"
        :class="['animated', 'faster', valid ? '' : 'headShake']"
        :message="errors[0]"
        :type="{
          'is-primary': !errors && valid,
          'is-danger': errors[0],
          'is-success': valid
        }"
      >
        <b-input
          v-model="innerValue"
          v-bind="$attrs"
          :class="{
            'is-hidden': hiddenInput
          }"
        ></b-input>
        <p
          slot="message"
          :class="['help', 'is-danger', $attrs['message-class']]"
        >
          {{ errors[0] }}
        </p>
      </b-field>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  name: "QwValidationInput",
  inheritAttrs: false,
  components: {
    ValidationProvider
  },
  props: {
    value: String,
    hiddenInput: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: "value",
    event: "input"
  },
  data: () => ({
    innerValue: ""
  }),
  watch: {
    innerValue: function(newVal, oldVal) {
      this.$emit("input", this.innerValue);
    }
  }
};
</script>

<style scoped lang="scss">
span.has-error {
  color: red;
}

// .qw-validation.qw-input {
//   .field {

//     p.help {

//     }
//   }
// }
</style>
