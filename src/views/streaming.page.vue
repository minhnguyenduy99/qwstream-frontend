<template>
  <div>
    <header>
      <slot name="header">
        <qw-header />
      </slot>
    </header>
    <div class="section-extend py-0">
      <div class="columns is-variable m-0 is-2" style="height: 600px;">
        <div
          class="column py-0 pl-0 is-narrow is-hidden-touch is-hidden-desktop-only"
        >
          <slot name="list-channels">
            <qw-channel-panel />
          </slot>
        </div>
        <div class="column pb-0">
          <slot name="stream-info">
            <qw-stream :stream="stream" />
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
    <hr class="mx-4" />
    <div class="container is-fullhd">
      <div class="columns is-variable is-3 m-0" style="height: 300px;">
        <div class="column is-two-thirds">
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
import QwHeader from "@/components/qw-header.vue";
import QwChannelPanel from "@/components/qw-channel-panel.vue";
import QwStream from "@/components/stream/qw-stream.vue";
import QwChat from "@/components/chat/qw-chat.vue";
import QwVideoPanel from "@/components/qw-video-panel.vue";
import QwChannelInfo from "@/components/channel/qw-channel-info.vue";

export default {
  components: {
    QwHeader,
    QwChannelPanel,
    QwStream,
    QwChat,
    QwVideoPanel,
    QwChannelInfo
  },
  data: () => ({
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
      avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
      name: "Channel name",
      subs: 1600,
      description: "Lorem Ipsum is simply dummy text of the printing and\
        typesetting industry. Lorem Ipsum has been the\
        industry's standard dummy text ever since the 1500s,\
        when an unknown printer took a galley of type and\
        scrambled it to make a type specimen book. It has\
        survived not only five centuries",
      social: [
        { "icon-class": "fab fa-facebook-f", url: "#" },
        { "icon-class": "fab fa-twitter", url: "#" },
        { "icon-class": "fab fa-youtube", url: "#" }
      ]
    },
    hasFollowed: false
  })
};
</script>
