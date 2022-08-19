<template>
  <button
    @click="emitClick"
    :disabled="isDisabled"
    class="box-border"
    :class="[classes, bgColor]"
  >
    <slot />
    <span class="label">{{ label }}</span>
  </button>
</template>

<script lang="ts" setup>
import type { Theme } from '../constants/types';

const props = defineProps({
  label: String,
  classes: String,
  theme: {
    type: Object,
    default() {
      return {} as Theme;
    },
  },
  bgColor: String,
  value: String,
  isDisabled: Boolean,
});

const emit = defineEmits<{ (e: string, value: string | undefined): void }>();

const emitClick = () => {
  emit('emitData', props.value);
};
</script>

<style lang="scss" scoped>
.label {
  color: v-bind('theme.color');
}
</style>
