<template>
  <main class="main">
    <h1>Video Conversion</h1>
    <div v-if="isReady">
      <video
        v-if="isVideoSelected"
        width="250"
        controls
        :src="videoData"
      ></video>
      <input type="file" @change="(e) => loadVideo(e.target.files?.item(0))" />

      <section id="result" v-if="isVideoSelected">
        <h3>Result</h3>

        <button @click="convertToGif">Convert</button>
        <img v-if="isConverted" :src="gif" width="250" alt="A gif" />
      </section>
    </div>
    <p v-else>Loading...</p>
  </main>
</template>

<script>
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
const ffmpeg = createFFmpeg({ log: true });

export default {
  computed: {
    isReady() {
      return this.ready;
    },
    isVideoSelected() {
      return this.videoFile;
    },
    isConverted() {
      return this.gif;
    },
  },
  data() {
    return {
      ready: false,
      videoFile: null,
      videoData: null,
      gif: null,
    };
  },
  methods: {
    async load() {
      if (ffmpeg.isLoaded()) {
        this.ready = true;
        return;
      }
      await ffmpeg.load();
      this.ready = true;
    },
    loadVideo(file) {
      if (!file) {
        return;
      }
      this.videoFile = file;
      this.videoData = URL.createObjectURL(file);
    },
    async convertToGif() {
      ffmpeg.FS("writeFile", "test.mp4", await fetchFile(this.videoFile));

      await ffmpeg.run("-i", "test.mp4", "out.gif");

      const data = ffmpeg.FS("readFile", "out.gif");

      this.gif = URL.createObjectURL(
        new Blob([data.buffer], { type: "image/gif" })
      );
    },
  },
  mounted() {
    this.load();
  },
};
</script>

<style scoped>
.main {
  text-align: center;
  padding-top: 10vh;
  flex-direction: column;
  display: flex;
  align-items: center;
}
</style>
