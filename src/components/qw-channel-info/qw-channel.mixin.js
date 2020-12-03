export default {
  props: {
    channel: {
      avatar: {
        type: String,
        required: true,
        default: ""
      },
      name: {
        type: String,
        required: true,
        default: ""
      },
      subs: {
        type: Number,
        required: true,
        default: ""
      },
      description: String,
      social: {
        type: Array,
        default: []
      }
    },
    "is-followed": Boolean
  },
  computed: {
    subCountString() {
      return `${this.channel.subs} subcribers`;
    }
  }
};
