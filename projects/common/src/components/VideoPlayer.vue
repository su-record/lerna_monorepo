<template>
  <video
    ref="videoPlayer"
    class="video-js vjs-big-play-centered"
    @ended="playEnded"
  ></video>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js';
import SourceObject = videojs.Tech.SourceObject;
import { Value } from '@/constants/types/index';

const props = defineProps({
  videoPath: String,
  isPlaying: Boolean,
});
const playOptions = {
  autoplay: true,
  controls: false,
  width: 1080,
  height: 1500,
  fluid: false,
  preload: 'auto',
} as VideoJsPlayerOptions;

const videoPlayer = ref<HTMLElement | string>('');
const player = ref<VideoJsPlayer | null>(null);
const init = function () {
  player.value = videojs(videoPlayer.value, playOptions, () => {
    const srcObject: SourceObject = {
      src: props.videoPath ?? '',
      type: 'video/mp4',
    };

    player.value?.src(srcObject);
  });
};

const emit = defineEmits<{ (e: string, v?: Value): void }>();
const playEnded = function () {
  console.log('#### play end!');
  emit('playEnd');
};

watch(
  () => props.isPlaying,
  play => {
    if (play) player.value?.pause();
    else player.value?.play();
  },
);

onMounted(() => {
  init();
});
</script>

<style lang="scss">
@import 'video.js/dist/video-js.css';
</style>
