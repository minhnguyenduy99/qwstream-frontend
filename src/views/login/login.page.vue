<template>
  <div id="login-page">
    <header>
      <slot name="header">
        <qw-header-simple />
      </slot>
    </header>
    <div
      class="login__body is-flex is-justify-content-space-around is-align-items-center mt-5"
    >
      <div class="login__background"></div>
      <div class="login__content animated fadeInLeft delay-1s">
        <slot name="login-form">
          <qw-login-form />
        </slot>
      </div>
      <div class="login__showcase has-text-light content is-hidden-touch">
        <div class="animated fadeInRight delay-1s">
          <span class="is-size-1 has-text-light has-text-weight-bold"
            >Title of the slogan</span
          >
        </div>
        <div class="showcase-target">
          <ul class="is-size-4">
            <li class="animated fadeInRight delay-2s">Target 1</li>
            <li class="animated fadeInRight delay-3s">Target 2</li>
            <li class="animated fadeInRight delay-4s">Target 3</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { QwHeaderSimple } from "@/layouts";
import QwLoginForm from "./qw-login-form.vue";

export default {
  components: {
    QwHeaderSimple,
    QwLoginForm
  }
};
</script>

<style scoped lang="scss">
#login-page {
  position: relative;
}

.login {
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
    min-width: 350px;
  }

  &__showcase {
    position: relative;
    z-index: 99;

    .showcase-target {
      ul {
        list-style-type: none;
      }
    }
  }
}

@mixin getAnimationDelay($time) {
  .aniamtion-delay-#{$time} {
    background: red;
    animation-delay: $time;
  }
}

@include getAnimationDelay(300);
@include getAnimationDelay(500);
@include getAnimationDelay(700);
</style>
