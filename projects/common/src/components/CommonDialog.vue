<template>
  <Teleport to="body">
    <section
      v-if="isDialog"
      ref="dialogContainer"
      class="dialog-container flex justify-center items-center"
    >
      <div class="dialog-content relative">
        <h2 v-if="title" class="dialog-content__title"></h2>
        <p v-if="desc" class="dialog-content__desc" v-html="desc" />

        <slot name="content" />

        <div class="dialog-content__buttons flex">
          <slot name="buttons" />
        </div>
      </div>
    </section>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, Ref } from 'vue';
import { msDelay } from '../utils';

const props = defineProps({
  isShow: Boolean,
  title: String,
  desc: String,
  isError: Boolean,
});
const isDialog = ref(false);

const dialogContainer = ref(null) as Ref<HTMLElement | null>;
watch(
  () => props.isShow,
  async isShow => {
    if (isShow) {
      isDialog.value = isShow;
      await msDelay();
      dialogContainer.value?.classList.add('show');
    } else {
      dialogContainer.value?.classList.remove('show');
      await msDelay(300);
      isDialog.value = isShow;
    }
  },
);
</script>
