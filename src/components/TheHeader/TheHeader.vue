<template>
  <header class="nav">
    <div class="logo">
      <router-link to="/">VueConv</router-link>
    </div>
    <div class="nav-options">
      <router-link to="/video">Video</router-link>
      <!-- <router-link to="/convert">Image</router-link>
      <router-link to="/convert">Text</router-link>
      <router-link to="/convert">Audio</router-link> -->
    </div>
  </header>
</template>

<style scoped>
.nav {
  width: 100%;
  height: 8vh;
  padding: 2rem;
  background-color: crimson;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
}

.nav-options {
  display: flex;
  width: 30%;
  justify-content: space-evenly;
  font-size: 1.1rem;
}
</style>
