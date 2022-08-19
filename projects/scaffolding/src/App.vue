<template>
  <nav class="flex justify-between">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script setup lang="ts">
import { useStore } from '@/store';
import { COMMON_MUTATION_KEYS } from 'projects-common/src/constants/enums/StoreKeys';

const store = useStore();

setTimeout(() => {
  store.commit(COMMON_MUTATION_KEYS.PROGRESS, true);
}, 2000);
</script>

<style lang="scss">
@import 'projects-common/src/assets/styles/index.css';
@import 'projects-common/src/assets/styles/reset';
@import 'projects-common/src/assets/styles/common';
@import '@/assets/styles/common';

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
