<template>
  <div class="qw-chat-message is-flex is-align-items-end">
    <span class="mr-2 mb-1 is-italic has-text-weight-bold">{{
      displayedTime
    }}</span>
    <span class="has-text-weight-bold">{{ message.viewer }}</span>
    <span>: {{ message.content }}</span>
  </div>
</template>

<script>
export default {
  name: "QwChatMessage",
  props: {
    message: {
      id: {
        type: String,
        required: true,
        default: ""
      },
      content: {
        type: String,
        required: true,
        default: ""
      },
      viewer: {
        type: String,
        required: true,
        default: ""
      },
      time: {
        type: Date,
        required: true,
        default: Date.now()
      }
    }
  },
  computed: {
    displayedTime() {
      const time = new Date(this.message.time);
      const hour = time
        .getHours()
        .toString()
        .padStart(2, "0");
      const second = time
        .getSeconds()
        .toString()
        .padStart(2, "0");
      return `${hour}:${second}`;
    }
  }
};
</script>

<style scoped lang="scss">
.qw-chat-message {
  span {
    display: inline-block;
    font-size: 0.85rem;

    &:first-child {
      font-size: 0.6rem;
    }
    &:last-child {
      margin-top: 1px;
    }
  }
}
</style>
