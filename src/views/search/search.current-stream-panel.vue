<template>
  <div id="search-current-stream-panel">
    <div class="panel-title">
      <span>Current streaming</span>
    </div>
    <div class="panel-items">
      <div v-for="stream in streams" :key="stream.id" class="panel-item">
        <slot name="old-stream-item">
          <qw-stream-info :stream="stream" />
        </slot>
      </div>
    </div>
    <div class="mt-3 is-flex is-justify-content-center">
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
import { QwStreamInfo } from "@/components";

export default {
  components: {
    QwStreamInfo
  },
  data: () => ({
    streams: [
      {
        id: "1",
        title: "Name of the stream",
        category: "Category A",
        tags: ["Game", "Laptop"],
        view_count: 2500,
        stream_time_start: Date.now(),
        video: {
          thumbnail_url:
            "https://www.elegantthemes.com/blog/wp-content/uploads/2019/04/change-wordpress-thumbnail-size-featured-image.jpg"
        },
        channel: {
          name: "Channel A"
        }
      },
      {
        id: "2",
        title: "Name of the stream",
        category: "Category A",
        tags: ["Game", "Laptop"],
        view_count: 2500,
        stream_time_start: Date.now(),
        video: {
          thumbnail_url:
            "https://www.elegantthemes.com/blog/wp-content/uploads/2019/04/change-wordpress-thumbnail-size-featured-image.jpg"
        },
        channel: {
          name: "Channel A"
        }
      },
      {
        id: "3",
        title: "Name of the stream",
        category: "Category A",
        tags: ["Game", "Laptop"],
        view_count: 2500,
        stream_time_start: Date.now(),
        video: {
          thumbnail_url:
            "https://www.elegantthemes.com/blog/wp-content/uploads/2019/04/change-wordpress-thumbnail-size-featured-image.jpg"
        },
        channel: {
          name: "Channel A"
        }
      }
    ]
  })
};
</script>

<style scoped lang="scss">
#search-current-stream-panel {
  padding: 1rem 0;

  .panel-title {
    @extend .is-size-4, .has-text-weight-bold, .pb-3;
  }

  .panel-items {
    .panel-item {
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }

  @include tablet {
    .panel-items {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .panel-item {
        flex-basis: 32%;
      }
    }
  }
}
</style>
