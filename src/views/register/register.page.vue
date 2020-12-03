<template>
  <div id="register-page">
    <header>
      <slot name="header">
        <qw-header-simple />
      </slot>
    </header>
    <div
      class="register__body is-flex is-justify-content-center is-align-items-center mt-5"
    >
      <div class="register__background"></div>
      <div class="register__content">
        <slot name="register-form">
          <qw-register-account />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { QwHeaderSimple } from "@/layouts";
import QwRegisterAccount from "./qw-register-account";

export default {
  components: {
    QwHeaderSimple,
    QwRegisterAccount
  }
};
</script>

<style scoped lang="scss">
#register-page {
  position: relative;
}

.register {
  &__body {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
  }

  &__background {
    position: absolute;
    background: $primary-light;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: polygon(60% 0, 100% 0, 100% 100%, 40% 100%);
  }

  &__content {
    position: relative;
    z-index: 99;
    min-width: 400px;
  }
}
</style>
