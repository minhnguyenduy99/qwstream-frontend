import { shallowMount } from "@vue/test-utils";
import QwValidationInput from "@/components/extend/qw-validation-input.vue";


describe("Test qw-validation-input", () => {
  it("display error message", () => {
    const name = "email";
    const rules = "required|email";
    const wrapper = shallowMount(QwValidationInput, {
      attrs: {
        rules,
        name
      },
      props: {
        value: "invalid email"
      }
    })
  })
})