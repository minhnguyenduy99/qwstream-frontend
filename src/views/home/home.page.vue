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
      <div class="page-main-content column">
        <slot class="page-description">
          <qw-page-description />
        </slot>
        <div class="hr">
          <hr class="has-background-grey-lighter" />
        </div>
        <div id="current-streaming-section">
          <div class="is-size-4 has-text-weight-bold">Current streaming</div>
          <div class="video-pannel">
            <slot name="list-streams">
              <qw-stream-info
                class="video-container"
                v-for="stream in streams"
                :key="stream.id"
                :stream="stream"
              />
              <!-- <qw-stream-info-detail-sm
                class="video-container"
                v-for="stream in streams"
                :key="stream.id"
                :stream="stream"
              /> -->
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { QwSidebar, QwStreamInfo } from "@/components";
import { QwHeader, QwListChannel } from "@/layouts";
import QwPageDescription from "./qw-page-description";

export default {
  components: {
    QwHeader,
    QwPageDescription,
    QwSidebar,
    QwStreamInfo,
    QwListChannel
  },
  data: () => ({
    openSidebar: false,
    streams: [
      {
        id: "1",
        title: "Name of the stream",
        category: "Category A",
        tags: ["Game", "Laptop"],
        view_count: 2500,
        stream_time_start: Date.now(),
        channel: {
          name: "Channel A"
        },
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
        channel: {
          name: "Channel A"
        },
        video: {
          thumbnail_url:
            "https://www.elegantthemes.com/blog/wp-content/uploads/2019/04/change-wordpress-thumbnail-size-featured-image.jpg"
        }
      },
      {
        id: "3",
        title: "Name of the stream",
        category: "Category A",
        channel: {
          name: "Channel A"
        },
        tags: ["Game", "Laptop"],
        view_count: 2500,
        stream_time_start: Date.now(),
        video: {
          thumbnail_url:
            "https://www.elegantthemes.com/blog/wp-content/uploads/2019/04/change-wordpress-thumbnail-size-featured-image.jpg"
        }
      },
      {
        id: "4",
        channel: {
          name: "Channel A"
        },
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
  }),
  methods: {
    onSidebarReduceChanged(val) {
      this.sidebarReduce = val;
    }
  }
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

.video-pannel {
  .video-container {
    margin: 1.5rem 0;
  }

  @include tablet {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .video-container {
      flex-basis: 32%;
    }
  }
}

.channel-section-title {
  white-space: nowrap;
  overflow: hidden;
}
</style>
