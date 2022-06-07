<template>
  <button type="button" :class="classes" @click="onClick">{{ label }}</button>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
export default defineComponent({
  name: "CommonButton",
  props: {
    label: String,
    overwrite: Boolean,
    theme: String,
  },
  emits: ["click"],
  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "storybook-button": true,
        [`${props.theme}`]: props.overwrite,
        "storybook-button--secondary": !props.overwrite,
      })),
      onClick() {
        emit("click");
      },
    };
  },
});
</script>
