<template>
  <div>
    <div class="container-fluid">
      <div class="row" style="height: 85vh">
        <div class="col col-auto border p-3">
          <div class="border-bottom border-dark">
            <h4>Room: {{ currentRoom }}</h4>
          </div>
          <div class="mt-3">
            <h4 class="mb-3 text-left">Users</h4>
            <div
              class="user-layout d-flex"
              v-for="user in users"
              :key="user.id"
            >
              <h4>{{ user.username }}</h4>
            </div>
          </div>
        </div>
        <div class="col border p-2">
          <div
            id="chat-display-area"
            class="p-3 mb-3 border-bottom border-dark"
            style="height: 90%"
          >
            <div v-for="message in messages" :key="message.id">
              <div
                v-if="message.type === MESSAGE_CHAT_TYPE"
                :class="['d-flex', message.isMe ? 'justify-content-end' : '']"
              >
                <div v-if="message.isMe">
                  <h5>{{ message.msg.content }}</h5>
                </div>
                <div v-else>
                  <h5>
                    <span class="font-weight-bold"
                      >{{ message.msg.username }}:
                    </span>
                    {{ message.msg.content }}
                  </h5>
                </div>
              </div>
              <div v-else>
                <h6 style="font-style: italic">{{ message.msg.content }}</h6>
              </div>
            </div>
          </div>
          <div class="message-area w-100 d-flex flex-wrap container-fluid p-0">
            <div class="row w-100">
              <div class="col col-10 mb-2 mr-2">
                <input
                  type="text"
                  placeholder="Write your message"
                  class="p-2 w-100"
                  v-model="message"
                />
              </div>
              <div class="col col-auto">
                <button
                  type="button"
                  class="btn btn-primary w-auto"
                  @click="sendMessage"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { STORE_ACTIONS, WS_EVENTS } from "../utils/config";

export default {
  name: "Chat",
  data: () => ({
    MESSAGE_CHAT_TYPE: "message",
    NOTIFY_CHAT_TYPE: "notification",
    messages: [],
    message: ""
  }),
  computed: {
    currentRoom() {
      return this.$store.state.user.room;
    },
    users() {
      return this.$store.getters.currentUsers;
    }
  },
  sockets: {
    connect: function() {
      console.log("User is connected");
      this.$socket.emit(WS_EVENTS.joinRoom, this.$store.state.user); //  Join the room
    },
    newUser: function({ newUser, room }) {
      this.$store.dispatch(STORE_ACTIONS.updateUsersInRoom, room);
      const isMe = newUser === this.$store.state.user.username;
      this.messages.push({
        type: this.NOTIFY_CHAT_TYPE,
        msg: { content: `${newUser} has joined the chat`, user: newUser },
        isMe: isMe
      });
    },
    newMessage: function({ message, username }) {
      if (message.length === 0) {
        return;
      }
      const isMe = this.$store.state.user.username === username;
      const msg = isMe ? { content: message } : { username, content: message };
      this.messages.push({
        type: this.MESSAGE_CHAT_TYPE,
        msg,
        isMe
      });
    }
  },
  beforeCreate: function() {
    console.log(this.$socket);
    this.$socket.open();
  },
  methods: {
    sendMessage() {
      this.$socket.emit(WS_EVENTS.publicMessage, {
        ...this.$store.state.user,
        message: this.message
      });
      this.message = "";
    }
  }
};
</script>
