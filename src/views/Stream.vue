<template>
  <div>
    <video ref="stream-video" controls width="300px" height="300px"></video>
    <button @click="createPeer">Stream</button>
  </div>
</template>

<script>
import Peer from "peerjs";
export default {
  data: () => ({
    client: null,
    connection: null,
    connectedPeers: []
  }),
  created: function() {
    const peerId = this.$route.params.id;
    console.log(peerId);
    console.log(this.$route);
    if (!peerId) {
      return;
    }
    this.connectToPeer(peerId);
  },
  methods: {
    async createPeer() {
      this.client = new Peer();
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      this.addStream(stream);
      this.client.on("open", function(id) {
        console.log("Open streaming from peer id: " + id);
      });
      this.client.on(
        "connection",
        function(conn) {
          console.log(conn);
          this.client.call(conn.peer, stream);
        }.bind(this)
      );
    },
    addStream(stream) {
      const video = this.$refs["stream-video"];
      video.muted = true;
      console.log(video);
      video.srcObject = stream;
      video.addEventListener("loadedmetadata", () => {
        video.play();
      });
    },
    connectToPeer(peerId) {
      this.client = new Peer();
      this.client.on(
        "open",
        function(id) {
          console.log("Connected peerid: " + id);
          this.client.connect(peerId);
        }.bind(this)
      );
      this.client.on(
        "call",
        function(call) {
          call.answer();
          call.on(
            "stream",
            function(remoteStream) {
              this.addStream(remoteStream);
            }.bind(this)
          );
          // this.addStream(stream);
        }.bind(this)
      );
    }
  }
};
</script>
