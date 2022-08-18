<template>
  <a
    @click="emitClick"
    :disabled="isDisabled"
    :class="[classes, bgColor]"
    class="box-border anchor-button"
    :theme="theme"
  >
    <slot />
    <div>
      <span class="block anchor-button__label" v-if="label" v-html="label" />
      <span v-if="description" class="block anchor-button__desc" v-html="description" />
    </div>
  </a>
</template>

<script lang="ts" setup>
import { Theme } from '../constants/types';

const props = defineProps({
  label: String,
  description: String,
  classes: String,
  theme: {
    type: Object,
    default: {} as Theme,
  },
  bgColor: String,
  isDisabled: Boolean,
});

const emit = defineEmits<{ (e: string): void }>();

const emitClick = function () {
  emit('emitData');
};
</script>
