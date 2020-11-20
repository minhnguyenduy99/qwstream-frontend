<template>
  <div>
    <form>
      <div class="mb-2 text-left">
        <label for="username" class="mr-2">Username</label>
        <input id="username" type="text" v-model="username" />
      </div>
      <div>
        <select class="custom-select w-auto" v-model="room">
          <option v-for="room in Object.keys(rooms)" :key="room.id">
            {{ room }}
          </option>
        </select>
      </div>
      <button
        type="submit"
        class="btn btn-primary mt-3"
        @click.prevent="submitForm"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { url, STORE_ACTIONS } from "../utils/config";

export default {
  name: "Login",
  data: () => ({
    username: "",
    rooms: [],
    room: undefined,
    error: undefined
  }),
  created: async function() {
    try {
      console.log(url);
      const data = await this.$http.get(`http://${url}/rooms`);
      this.rooms = data.body;
      this.$store.dispatch(STORE_ACTIONS.setRooms, this.rooms); // Save rooms
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async submitForm() {
      if (!this.username && !this.room) {
        return;
      }
      try {
        const data = {
          room: this.room,
          username: this.username
        };
        let response = await this.$http.post(`http://${url}/auth/login`, data);
        if ([400, 401, 501].includes(response.body.statusCode)) {
          this.error = response.body.message;
          return;
        }
        this.$store.dispatch(STORE_ACTIONS.joinRoom, data); // Save room
        this.$router.push(`/chat/${data.room}`); // Navigate to main room
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
