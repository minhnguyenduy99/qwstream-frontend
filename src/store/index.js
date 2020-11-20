import Vue from "vue";
import Vuex from "vuex";
import { STATUS_OPTIONS } from "../utils/config";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      room: undefined,
      username: undefined,
      status: STATUS_OPTIONS.available
    },
    currentRoom: [],
    rooms: []
  },
  mutations: {
    setRooms: (state, rooms) => {
      state.rooms = rooms;
    },
    joinRoom: (state, { room, username }) => {
      state.user = {
        room,
        username,
        status: STATUS_OPTIONS.available
      };
    },
    setCurrentRoom: (state, room) => {
      state.currentRoom = room;
    }
  },
  getters: {
    currentUsers: state => {
      return state.currentRoom;
    }
  },
  actions: {
    setRooms: ({ commit }, rooms) => {
      commit("setRooms", rooms);
    },
    updateUsersInRoom: ({ commit }, room) => {
      commit("setCurrentRoom", room);
    },
    joinRoom: ({ commit }, data) => {
      commit("joinRoom", data);
    }
  },
  modules: {}
});
