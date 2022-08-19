<template>
  <div :class="classes">
    <input
      class="check-box__input"
      type="checkbox"
      :id="uid"
      :checked="modelValue === STRING_CHECKED.TRUE"
      @click="update"
    />
    <label class="check-box__label" :for="uid"></label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { createUUID } from '../utils';
import { STRING_CHECKED } from '../constants/enums';

const uid = createUUID();
const props = defineProps({
  modelValue: String,
  bgColor: String,
  isSlide: Boolean,
  isSquare: Boolean,
});
const emit = defineEmits<{ (e: string, value: string): void }>();
const update = function (ev: InputEvent): void {
  const el = ev.target as HTMLInputElement;
  emit('update:modelValue', el.checked ? STRING_CHECKED.TRUE : STRING_CHECKED.FALSE);
};

const classes = computed(() => ({
  'check-box': true,
  'check-box--slide': props.isSlide,
  'check-box--square': props.isSquare,
}));
</script>

<style scoped lang="scss">
.check-box {
  .check-box__label {
    position: relative;
    display: inline-block;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
    }
  }

  &--slide,
  &--square {
    .check-box__input {
      display: none;

      &:checked + .check-box__label {
        background-color: v-bind('props.bgColor');
      }
    }
  }

  &--square {
    .check-box__label {
      width: 48px;
      height: 48px;
      background-color: #d8d8d8;
      border-radius: 12px;

      &:before {
        left: 17px;
        top: 9px;
        width: 15px;
        height: 25px;
        border-style: solid;
        border-color: #bebebe;
        border-width: 0 6px 6px 0;
        transform: rotate(45deg);
      }
    }

    .check-box__input {
      &:checked + .check-box__label:before {
        border-color: #fff;
      }
    }
  }

  &--slide {
    .check-box__label {
      width: 92px;
      height: 48px;
      background-color: #c4c4c4;
      border-radius: 50px;
      transition: all 0.3s ease-in-out;
      box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.1);
      -webkit-tap-highlight-color: transparent;

      &:before {
        top: 8px;
        left: 8px;
        height: 32px;
        width: 32px;
        background-color: #fff;
        border-radius: 46px;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease-in-out;
        animation: moveLeft 0.3s ease-in-out;
      }

      &:after {
        content: 'OFF';
        position: absolute;
        top: 15px;
        right: 14px;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        color: #fff;
      }
    }

    .check-box__input {
      &:checked + .check-box__label {
        &:before {
          transform: translateX(40px);
          box-shadow: -1px -1px 5px rgba(0, 0, 0, 0.1);
          animation: moveRight 0.3s ease-in-out;
        }

        &:after {
          content: 'ON';
          position: absolute;
          top: 15px;
          left: 17px;
        }
      }
    }
  }
}
@keyframes moveRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(40px);
  }
}

@keyframes moveLeft {
  0% {
    transform: translateX(40px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
