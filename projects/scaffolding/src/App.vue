<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>

  <common-button :label="'common import button'"></common-button>
  <router-view />
</template>

<script setup lang="ts">
import CommonButton from "projects-common/src/components/CommonButton.vue";
</script>

<style lang="scss">
@import "@mdi/font/css/materialdesignicons.min.css";
@import "projects-common/src/assets/styles/index.css";
@import "projects-common/src/assets/styles/reset";
@import "projects-common/src/assets/styles/common";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
