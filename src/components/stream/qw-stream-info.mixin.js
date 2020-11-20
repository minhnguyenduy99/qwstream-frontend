export default {
  props: {
    stream: {
      title: {
        type: String,
        required: true,
        default: ""
      },
      category: {
        type: String,
        required: true,
        default: ""
      },
      tags: {
        type: [],
        required: true,
        default: []
      },
      view_count: {
        type: Number,
        required: true,
        default: 0
      },
      stream_time_start: {
        type: Number,
        required: true,
        default: Date.now()
      },
      thumbnail_url: {
        type: String,
        required: true,
        default: null
      }
    }
  },
  computed: {
    displayedView() {
      return `${this.stream.view_count} views`;
    },
    displayedStreamTime() {
      const duration = Date.now() - this.stream.stream_time_start;
      return `Stream ${new Date(duration).getHours()} ago`;
    }
  }
};
