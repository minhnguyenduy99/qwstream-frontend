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
      <div class="page-main-content column m-0 py-4 px-2">
        <slot name="stream-info">
          <qw-stream-player :stream="stream" />
        </slot>
        <slot name="create-stream">
          <qw-create-stream></qw-create-stream>
        </slot>
      </div>
      <div class="column py-4 px-2 is-one-quarter-desktop is-one-third-tablet">
        <slot name="chatbox">
          <qw-chat></qw-chat>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { QwSidebar, QwChat, QwStreamPlayer } from "@/components";
import { QwListChannel, QwHeader } from "@/layouts";
import QwCreateStream from "./qw-create-stream.vue";

export default {
  components: {
    QwHeader,
    QwSidebar,
    QwCreateStream,
    QwChat,
    QwStreamPlayer,
    QwListChannel
  },
  data: () => ({
    isChannelActive: true,
    openSidebar: false,
    stream: {
      id: "1",
      title: "Name of the stream",
      category: "Category A",
      tags: ["Game", "Laptop"],
      view_count: 2500,
      stream_time_start: Date.now(),
      video: {
        thumbnail_url:
          "https://www.elegantthemes.com/blog/wp-content/uploads/2019/04/change-wordpress-thumbnail-size-featured-image.jpg"
      }
    }
  })
};
</script>

<style scoped lang="scss">
div.hr {
  margin: 3rem 0 2rem 0;
}

.page-main-content {
  > div {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
}

.channel-section-title {
  white-space: nowrap;
  overflow: hidden;
}
</style>
