export const url = `${process.env.VUE_APP_BASE_URL}:${process.env.VUE_APP_PORT}`;
export const STATUS_OPTIONS = {
  available: "available",
  offline: "offline"
};
export const STORE_ACTIONS = {
  setRooms: "setRooms",
  joinRoom: "joinRoom",
  updateUsersInRoom: "updateUsersInRoom"
};
export const WS_EVENTS = {
  joinRoom: "joinRoom",
  publicMessage: "publicMessage"
};
