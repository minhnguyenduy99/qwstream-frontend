<template>
  <div class="qw-list-channel">
    <ul class="my-2">
      <li v-for="channel in channels" :key="channel.id">
        <qw-channel-badge
          :channel="channel"
          :type="reduce ? 'avatar' : 'detail'"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { QwChannelBadge } from "@/components";

export default {
  name: "QwListChannel",
  components: {
    QwChannelBadge
  },
  props: {
    reduce: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
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
    ]
  })
};
</script>
