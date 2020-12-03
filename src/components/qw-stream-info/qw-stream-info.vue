<template>
  <div class="qw-stream-info">
    <div class="qw-stream-info__thumbnail box box-shadow-live-tr mb-0">
      <b-tag v-if="live" class="qw-stream-info__live-tag" type="is-danger"
        >LIVE</b-tag
      >
      <div class="stream-tag-list">
        <b-tag
          v-for="tag in stream.tags"
          :key="tag.id"
          class="has-text-dark has-text-weight-bold"
          size="is-small"
          type="is-secondary is-light"
        >
          {{ tag }}
        </b-tag>
      </div>
      <figure class="b-image-wrapper is-16by9 image">
        <img :src="stream.video.thumbnail_url" />
      </figure>
    </div>
    <div class="qw-stream-info__content">
      <slot name="stream-info" v-bind="stream">
        <div class="stream-basic-info">
          <p class="stream-title has-text-weight-bold">
            {{ stream.title }}
          </p>
          <p class="stream-channel-name">
            {{ stream.channel.name }}
          </p>
          <!-- <p class="mt-2 size-5">
            Category:
            <span class="has-text-weight-bold">{{ stream.category }}</span>
          </p> -->
        </div>
        <div class="stream-view-time">
          <p class="is-size-6 has-text-weight-bold">
            {{ displayedView }} views
          </p>
          <p class="is-size-6 has-text-grey">{{ displayedStreamTime }}</p>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import QwStreamInfoMixin from "./qw-stream-info.mixin";
export default {
  name: "QwStreamInfo",
  mixins: [QwStreamInfoMixin],
  props: {
    live: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped lang="scss">
@include box-shadow-hover("live", "tr", 10px, 10px);

.qw-stream-info {
  cursor: pointer;

  &__thumbnail {
    position: relative;
    padding: 0;
  }

  &__live-tag {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
  }

  .stream-tag-list {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    .tag {
      opacity: 0.8;

      &:not(:last-child) {
        margin-bottom: 0.5rem;
      }

      &:hover {
        opacity: 1;
      }
    }
  }
}

.qw-stream-info__thumbnail {
  margin: 0;
  .b-image-wrapper {
    z-index: 1;

    img {
      border-radius: $radius-large;
    }
  }
}

.qw-stream-info__content {
  .stream-basic-info {
    padding: 0.5rem 0 0.25rem 0;
  }

  .stream-title {
    font-size: $size-5;
    &:hover {
      color: $primary;
    }
  }

  .stream-channel-name {
    opacity: 0.7;
    font-size: $size-6;
    &:hover {
      opacity: 1;
      color: $dark;
    }
  }
}

.stream-view-time {
  padding: 0.25rem 0;
}

// .qw-stream-info {
//   // @include tablet {
//   //   .stream-detail-info {
//   //     padding: 0.5rem 0;
//   //     display: flex;
//   //     justify-content: space-between;
//   //     flex-wrap: wrap;
//   //     align-items: flex-end;

//   //     .stream-tag-list,
//   //     .stream-view-time {
//   //       padding: 0;
//   //     }
//   //   }
//   // }

//   // @include desktop {
//   //   display: flex;
//   //   flex-wrap: wrap;

//   //   .qw-stream-info__thumbnail {
//   //     flex-basis: 40%;
//   //     max-width: 250px;
//   //   }

//   //   .qw-stream-info__content {
//   //     padding: 0 1rem;
//   //     flex-basis: auto;
//   //     flex-grow: 1;
//   //     display: flex;
//   //     flex-direction: column;
//   //     justify-content: space-between;

//   //     .stream-basic-info {
//   //       padding: 0;

//   //       .stream-title {
//   //         font-size: $size-4;
//   //       }

//   //       .stream-tag-list {
//   //         padding: 0;
//   //         margin-top: auto;
//   //         margin-bottom: 0.25rem;
//   //         display: flex;
//   //         flex-direction: column;
//   //         justify-content: flex-end;
//   //       }
//   //     }

//   //     .stream-detail-info {
//   //       padding: 0;
//   //     }
//   //   }
//   // }
// }
</style>
