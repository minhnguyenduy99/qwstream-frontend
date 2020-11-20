<template>
  <div class="qw-video-panel">
    <p class="is-size-4 mb-5 has-text-weight-bold">All videos</p>
    <div class="is-flex mb-3">
      <b-dropdown>
        <button class="button is-primary is-light" slot="trigger">
          <span class="has-text-white">Views</span>
          <b-icon icon="chevron-down" type="is-light"></b-icon>
        </button>
        <b-dropdown-item
          v-for="view in viewOptions"
          :key="view.id"
          custom
          :focusable="false"
        >
          {{ view.name }}
        </b-dropdown-item>
      </b-dropdown>
      <b-dropdown>
        <button class="button is-primary is-light" slot="trigger">
          <span class="has-text-white">Times</span>
          <b-icon icon="chevron-down" type="is-light"></b-icon>
        </button>
        <b-dropdown-item
          v-for="time in timeOptions"
          :key="time.id"
          custom
          :focusable="false"
        >
          {{ time.name }}
        </b-dropdown-item>
      </b-dropdown>
    </div>
    <div class="columns">
      <div
        v-for="stream in streams"
        :key="stream.id"
        class="column is-one-third"
      >
        <qw-stream type="general" :stream="stream"></qw-stream>
      </div>
    </div>
    <div class="is-flex is-justify-content-right">
      <b-button type="is-secondary is-light">Watch more</b-button>
    </div>
  </div>
</template>

<script>
import QwStream from "./stream/qw-stream";

export default {
  name: "QwVideoPanel",
  components: {
    QwStream
  },
  data: () => ({
    viewOptions: [
      { name: "Most views", value: -1 },
      { name: "Least views", value: 1 }
    ],
    timeOptions: [
      { name: "Latest", value: -1 },
      { name: "Oldest", value: 1 }
    ],
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
        }
      }
    ]
  })
};
</script>

<style scoped lang="scss"></style>
