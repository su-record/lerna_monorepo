<script setup lang="ts">
import { PageTitleTheme } from '@/constants/interfaces';

const props = defineProps({
  title: String,
  desc: String,
  theme: {
    type: Object,
    default: {} as PageTitleTheme,
  },
});
</script>

<template>
  <div class="static-page__title">
    <h2 class="static-page__heading tracking-tight" v-html="title" />
    <p v-if="!!desc" class="static-page__desc tracking-tight" v-html="desc" />
  </div>
</template>

<style scoped lang="scss">
.static-page {
  &__heading {
    font-size: v-bind('theme.ts');
    color: v-bind('theme.tc');
    font-weight: 900;
    line-height: v-bind('theme.tlh');
  }

  &__desc {
    margin-top: 20px;
    font-size: v-bind('theme.ds');
    color: v-bind('theme.dc');
    font-weight: 900;
    line-height: v-bind('theme.dlh');
  }
}
</style>
