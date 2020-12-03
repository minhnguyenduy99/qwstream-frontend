<template>
  <div id="stream-page">
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
        <qw-list-channel :channels="channels" />
      </qw-sidebar>
    </header>
    <div class="section-extend py-0">
      <div class="columns is-variable m-0 is-2">
        <div class="column py-0 pl-0 is-narrow is-hidden-touch">
          <slot name="list-channels">
            <qw-sidebar type="dock" :open="true">
              <template v-slot="{ reduce }">
                <p
                  class="channel-section-title has-text-light has-text-weight-bold py-1"
                  :style="{
                    visibility: reduce ? 'hidden' : 'visible'
                  }"
                >
                  SUBCRIBED CHANNELS
                </p>
                <qw-list-channel :channels="channels" :reduce="reduce" />
              </template>
            </qw-sidebar>
          </slot>
        </div>
        <div id="stream-video-wrapper" class="column pb-0">
          <slot name="stream-info">
            <qw-stream-player :stream="stream" />
          </slot>
        </div>
        <div
          class="column pb-0 pr-0 is-one-quarter-desktop is-one-third-tablet"
        >
          <slot name="chatbox">
            <qw-chat></qw-chat>
          </slot>
        </div>
      </div>
    </div>
    <div class="hr px-2">
      <hr class="has-background-grey-lighter" />
    </div>
    <div class="container is-fullhd mb-5">
      <div class="columns is-variable is-3 m-0">
        <div class="column is-two-thirds-desktop is-half-tablet-only">
          <slot name="list-videos">
            <qw-video-panel></qw-video-panel>
          </slot>
        </div>
        <div class="column">
          <slot name="channel-info">
            <qw-channel-info :channel="channel" :is-followed="hasFollowed" />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { QwHeader, QwListChannel } from "@/layouts";
import { QwSidebar, QwChat, QwStreamPlayer, QwChannelInfo } from "@/components";
import QwVideoPanel from "./qw-video-panel.vue";

export default {
  components: {
    QwHeader,
    QwSidebar,
    QwStreamPlayer,
    QwChat,
    QwVideoPanel,
    QwChannelInfo,
    QwListChannel
  },
  data: () => ({
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
    },
    channel: {
      id: "1",
      avatar:
        "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
      name: "Channel name",
      subs: 1600,
      description:
        "Lorem Ipsum is simply dummy text of the printing and\
        typesetting industry. Lorem Ipsum has been the\
        industry's standard dummy text ever since the 1500s,\
        when an unknown printer took a galley of type and\
        scrambled it to make a type specimen book. It has\
        survived not only five centuries",
      social: [
        { icon: "facebook", "icon-class": "has-facebook-color", url: "#" },
        { icon: "twitter", "icon-class": "has-twitter-color", url: "#" },
        { icon: "youtube", "icon-class": "has-youtube-color", url: "#" }
      ]
    },
    channels: [
      {
        id: 1,
        name: "Channel A",
        subs: 1600,
        avatar:
          "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"
      },
      {
        id: 2,
        name: "Channel B",
        subs: 1600,
        avatar:
          "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"
      },
      {
        id: 3,
        name: "Channel C",
        subs: 1600,
        avatar:
          "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"
      },
      {
        id: 4,
        name: "Channel D",
        subs: 1600,
        avatar:
          "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"
      }
    ],
    hasFollowed: false
  })
};
</script>

<style scoped lang="scss">
div.hr {
  margin: 3rem 0 2rem 0;
}
#stream-page {
  @include until($tablet) {
    #stream-video-wrapper {
      padding-left: 0;
      padding-right: 0;
    }
  }
}

.channel-section-title {
  white-space: nowrap;
  overflow: hidden;
}
</style>
