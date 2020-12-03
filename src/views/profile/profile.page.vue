<template>
  <div id="profile-page">
    <header>
      <slot name="header">
        <qw-header @open-channel-sidebar="openSidebar = !openSidebar" />
      </slot>
      <qw-sidebar class="is-hidden-desktop" type="fixed" v-model="openSidebar">
        <p
          class="channel-section-title has-text-light has-text-weight-bold py-1"
        >
          SUBCRIBED CHANNELS
        </p>
        <qw-list-channel />
      </qw-sidebar>
    </header>
    <div class="columns m-0">
      <div class="column is-narrow p-0 is-hidden-touch">
        <qw-sidebar type="dock" :open="true" fix-navbar-on-dock>
          <template v-slot="{ reduce }">
            <p
              class="channel-section-title has-text-light has-text-weight-bold py-1"
              :style="{
                visibility: reduce ? 'hidden' : 'visible'
              }"
            >
              SUBCRIBED CHANNELS
            </p>
            <qw-list-channel :reduce="reduce" />
          </template>
        </qw-sidebar>
      </div>
      <div :class="['user-area', 'column', 'mt-2', 'pb-4']">
        <div id="profile-edit-area" class="pannel">
          <div class="pannel-title">
            <p>PROFILE</p>
          </div>
          <div class="pannel-update-content">
            <slot name="profile-update-form">
              <qw-edit-profile />
            </slot>
          </div>
        </div>
        <hr class="has-background-grey-light my-6" />
        <div id="account-edit-area" class="pannel">
          <div class="pannel-title">
            <p>ACCOUNT</p>
          </div>
          <div class="pannel-update-content">
            <slot name="account-update-form">
              <qw-edit-account />
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { QwSidebar } from "@/components";
import { QwHeader, QwListChannel } from "@/layouts";
import QwEditProfile from "./qw-edit-profile.vue";
import QwEditAccount from "./qw-edit-account.vue";

export default {
  components: {
    QwHeader,
    QwEditProfile,
    QwEditAccount,
    QwListChannel,
    QwSidebar
  },
  data: () => ({
    openSidebar: false
  })
};
</script>

<style scoped lang="scss">
.pannel {
  &-title {
    margin-bottom: 1rem;

    > * {
      @extend .is-size-4, .has-text-weight-bold;
    }
  }
}

.channel-section-title {
  white-space: nowrap;
  overflow: hidden;
}
</style>
