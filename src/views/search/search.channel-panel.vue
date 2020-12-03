<template>
  <div id="search-channel-panel">
    <div class="panel-title">
      <span>Channels</span>
    </div>
    <div class="panel-items">
      <div
        v-for="channel in searchChannels"
        :key="channel.id"
        class="panel-item"
      >
        <slot name="channel-item">
          <qw-channel-info-horizontal :channel="channel" />
        </slot>
      </div>
    </div>
    <div class="mt-6 is-flex is-justify-content-center">
      <b-button
        type="is-secondary"
        outlined
        size="is-medium"
        class="mx-0 has-text-weight-bold trans-hover"
        >Load more</b-button
      >
    </div>
  </div>
</template>

<script>
import { QwChannelInfoHorizontal } from "@/components";
export default {
  components: {
    QwChannelInfoHorizontal
  },
  data: () => ({
    searchChannels: [
      {
        id: 1,
        name: "Channel A",
        subs: 1600,
        description:
          "Lorem Ipsum is simply dummy text of the printing and\
                      typesetting industry. Lorem Ipsum has been the",
        avatar:
          "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"
      },
      {
        id: 2,
        name: "Channel B",
        subs: 1600,
        description:
          "Lorem Ipsum is simply dummy text of the printing and\
                      typesetting industry. Lorem Ipsum has been the",
        avatar:
          "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"
      }
    ]
  })
};
</script>

<style scoped lang="scss">
#search-channel-panel {
  padding: 1rem 0;

  .panel-title {
    @extend .is-size-4, .has-text-weight-bold, .pb-3;
  }

  .panel-items {
    .panel-item {
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    }
  }
}
</style>
