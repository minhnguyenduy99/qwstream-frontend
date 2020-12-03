<template>
  <div class="qw-chat">
    <div
      class="qw-chat__header has-background-primary-light has-text-light p-3"
    >
      <p class="is-size-6">Chatbox</p>
    </div>
    <div class="qw-chat__message-box box has-background-light">
      <div class="qw-chat__message-list">
        <ul>
          <li v-for="msg in messages" :key="msg.id">
            <slot name="message" v-bind="{ msg }">
              <qw-chat-message :message="msg" />
            </slot>
          </li>
        </ul>
      </div>
      <b-field type="is-primary" class="qw-chat__textbox">
        <b-input
          class="is-primary outlined"
          custom-class="is-small-radius"
          placeholder="Type your message here"
          icon-right="paper-plane"
          icon-right-clickable
          icon-pack="fas"
        ></b-input>
      </b-field>
    </div>
  </div>
</template>

<script>
import QwChatMessage from "./qw-chat-message";

export default {
  name: "QwChat",
  components: {
    QwChatMessage
  },
  data: () => ({
    messages: [
      { id: 1, content: "Hello", time: Date.now(), viewer: "User a" },
      { id: 2, content: "Hello", time: Date.now(), viewer: "User a" },
      { id: 3, content: "Hello", time: Date.now(), viewer: "User a" },
      { id: 4, content: "Hello", time: Date.now(), viewer: "User a" },
      { id: 5, content: "Hello", time: Date.now(), viewer: "User a" }
    ]
  })
};
</script>

<style scoped lang="scss">
.qw-chat {
  & &__message-box {
    padding: 1rem 0.75rem;
  }

  & &__message-list {
    min-height: 400px;
    li {
      &:not(:last-child) {
        @extend .pb-2;
      }
    }
  }
}
</style>
