<template>
  <div>
    <div v-if="watchStream">
      <label>Input the id of stream</label>
      <input v-model="streamId" />
      <button @click="joinStream">Watch the stream</button>
    </div>
    <div v-else>
      <button @click="createStream">Create stream</button>
    </div>
    <h1 v-if="streamId">{{ streamId }}</h1>
    <video ref="video" controls autoplay></video>
  </div>
</template>

<script>
import { Device } from "mediasoup-client";
export default {
  name: "ChannelStream",
  data: () => ({
    device: null,
    streamId: null,
    sendTransport: null,
    receiveTransport: null,
    videoProducer: null,
    audioProducer: null,
    remoteConsumeTransportId: null,
    watchStream: false,
    consumer: {
      id: null,
      producerId: null
    }
  }),
  computed: {
    streamSocket() {
      return this.$sockets.socket_stream;
    }
  },
  created: function() {
    const isJoinStream = this.$route.query.joinStream;
    if (isJoinStream === "1") {
      this.watchStream = true;
      return;
    }
  },
  socket_stream: {
    connect: function() {
      console.log("Connect to stream socket");
    }
  },
  methods: {
    async createStream() {
      const {
        routerRtpCapabilities,
        streamId,
        transportData
      } = await this.streamSocket.request("open-stream");
      console.log("Open stream: " + streamId);

      this.device = new Device();
      await this.device.load({
        routerRtpCapabilities: routerRtpCapabilities
      });
      this.streamId = streamId;

      await this.createProduceTransport(transportData);
    },
    async createProduceTransport(transportData) {
      this.sendTransport = this.device.createSendTransport(transportData);

      // register connect and produce event for transport (required)
      this.sendTransport.on("connect", this._onTransportConnected.bind(this));
      this.sendTransport.on("produce", this._onTransportProduce.bind(this));
      this.sendTransport.on(
        "connectionstatechange",
        this._onTransportConnectionStateChanged.bind(this)
      );
      await this.createProducer();
    },
    async createProducer() {
      const mediaStream = await this.getUserMediaStream();
      this.$refs.video.srcObject = mediaStream;
      console.log(this.$refs.video.srcObject);
      // Get the video and audio tracks from the media stream
      const videoTrack = mediaStream.getVideoTracks()[0];
      const audioTrack = mediaStream.getAudioTracks()[0];
      // If there is a video track start sending it to the server
      if (videoTrack) {
        this.videoProducer = await this.sendTransport.produce({
          track: videoTrack
        });
      }
      // if there is a audio track start sending it to the server
      if (audioTrack) {
        this.audioProducer = await this.sendTransport.produce({
          track: audioTrack
        });
      }
    },
    _onTransportConnected({ dtlsParameters }, callback, errback) {
      console.log("Handle transport connected event");
      this.streamSocket
        .request("connect-stream-source", {
          streamId: this.streamId,
          dtlsParameters
        })
        .then(callback)
        .catch(err => {
          console.error("handleTransportConnectEvent() failed [error:%o]", err);
          errback(err);
        });
    },
    _onTransportProduce({ kind, rtpParameters }, callback, errback) {
      console.log("Send produce to server");
      this.streamSocket
        .request("produce-source", {
          streamId: this.streamId,
          kind,
          rtpParameters
        })
        .then(data => {
          console.log("Receive producer from server" + data.id);
          callback({ id: data.id });
        })
        .catch(errback);
    },
    async joinStream() {
      console.log(this.streamId);
      const {
        routerRtpCapabilities,
        consumerId,
        streamId,
        producerId,
        transportData,
        error
      } = await this.streamSocket.request("join-stream", {
        streamId: this.streamId
      });
      if (error) {
        console.log("Stream ID is invalid");
        return;
      }
      this.device = new Device();
      await this.device.load({
        routerRtpCapabilities
      });
      this.consumer.id = consumerId;
      this.consumer.producerId = producerId;
      this.streamId = streamId;

      await this.createReceiveTransport(transportData);

      const { consumer, stream } = await this.consumeStream();

      this.attachToVideoElement({ consumer, stream });
    },
    async consumeStream() {
      const { rtpCapabilities } = this.device;
      const {
        id,
        kind,
        rtpParameters,
        producerId,
        type,
        producerPaused
      } = await this.streamSocket.request("consume-stream", {
        streamId: this.streamId,
        consumerId: this.consumer.id,
        rtpCapabilities
      });

      let codecOptions = {};
      console.log(this.receiveTransport);
      const consumer = await this.receiveTransport.consume({
        producerId,
        id,
        kind,
        rtpParameters,
        codecOptions
      });
      const stream = new MediaStream();
      stream.addTrack(consumer.track);
      return {
        consumer,
        stream,
        kind
      };
    },
    async createReceiveTransport(transportData) {
      console.log(transportData);
      this.receiveTransport = this.device.createRecvTransport(transportData);
      this.receiveTransport.on(
        "connect",
        this._onReceiveTransportConnected.bind(this)
      );
      this.receiveTransport.on(
        "connectionstatechange",
        this._onTransportConnectionStateChanged.bind(this)
      );
    },
    getUserMediaStream() {
      return navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
      });
    },
    _onTransportConnectionStateChanged(connectionState) {
      console.log(
        "send transport connection state change [state:%s]",
        connectionState
      );
    },
    _onReceiveTransportConnected({ dtlsParameters }, callback, errback) {
      console.log("Connect receive transport to server");
      this.streamSocket
        .request("connect-consumer", {
          streamId: this.streamId,
          consumerId: this.consumer.id,
          dtlsParameters
        })
        .then(data => {
          console.log("Connection to server transport is accepted: " + data);
          callback();
        })
        .catch(errback);
    },
    attachToVideoElement({ consumer, stream }) {
      let video = this.$refs.video;
      video.srcObject = stream;
      video.playsinline = false;
    }
  }
};
</script>
