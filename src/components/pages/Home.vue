<template>
  <main>
    <div class="anim-container">
      <h1>Multi-File Converter</h1>
      <h2>Total in-browser <span id="type-animate"></span> Convertor!</h2>
    </div>
    <div class="main-sec">
      <router-link class="btn" to="/video">Video</router-link>
      <!-- <router-link class="btn" to="/convert">Image</router-link>
    <router-link class="btn" to="/convert">Text</router-link>
    <router-link class="btn" to="/convert">Audio</router-link> -->
    </div>
  </main>
</template>

<script>
import { init } from "ityped";

export default {
  methods: {
    startAnim() {
      const spanEl = document.querySelector("#type-animate");
      init(spanEl, {
        showCursor: false,
        strings: ["Video", "Audio", "Text", "Image"],
        typeSpeed: 150,
      });
    },
  },
  mounted() {
    this.startAnim();
  },
};
</script>

<style scoped>
/* Heading Related Div */
.anim-container {
  margin-top: 1rem;
  text-align: center;
}

.anim-container h1 {
  font-size: 4rem;
}

.anim-container h2 {
  font-size: 1.5rem;
}

/* Main Content */
.main-sec {
  display: flex;
  justify-content: space-evenly;
  align-items: space-evenly;
}

.btn {
  padding: 1rem;
  background-color: var(--bg-primary);
  margin: 1rem;
}
</style>
