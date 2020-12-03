<template>
  <div>
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
      <div class="column">
        <search-channel-panel />
        <hr class="has-background-grey-light" />
        <search-current-stream-panel />
        <hr class="has-background-grey-light" />
        <search-old-stream-panel />
      </div>
    </div>
  </div>
</template>

<script>
import { QwHeader, QwListChannel } from "@/layouts";
import { QwSidebar, QwStreamInfo } from "@/components";
import SearchChannelPanel from "./search.channel-panel";
import SearchOldStreamPanel from "./search.old-stream-panel";
import SearchCurrentStreamPanel from "./search.current-stream-panel";

export default {
  components: {
    QwHeader,
    QwStreamInfo,
    QwListChannel,
    QwSidebar,
    SearchChannelPanel,
    SearchOldStreamPanel,
    SearchCurrentStreamPanel
  },
  data: () => ({
    openSidebar: false
  })
};
</script>

<style scoped lang="scss">
div.hr {
  margin: 3rem 0 2rem 0;
}

.channel-section-title {
  white-space: nowrap;
  overflow: hidden;
}
</style>
