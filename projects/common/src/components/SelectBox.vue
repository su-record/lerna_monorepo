<template>
  <div :id="uid" :class="[`select-box--${size}`, classes]" v-outside="outSideClick">
    <button @click="handlerButtonToggle">{{ selectItem.label }}</button>
    <ul ref="optionList" style="display: none" @click="emitValue">
      <li v-for="(option, i) in selectOptions" :key="i" :value="option.value">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, Ref, ref } from 'vue';
import { createUUID, msDelay, objectToArray } from '../utils';
import { ObjectKeyString } from '../constants/interfaces';
import { Value } from '../constants/types';

interface ISelectOption {
  label: string;
  value: Value;
}

const uid = createUUID();
const props = defineProps({
  modelValue: {
    type: [String, Number],
    require: true,
  },
  modelRange: String,
  theme: String,
  size: {
    type: String,
    validator: function (value: string) {
      return ['small', 'medium', 'large'].includes(value);
    },
  },
  options: {
    type: Object,
    default() {
      return {} as ObjectKeyString;
    },
  },
});

const emit = defineEmits<{ (e: string, v: Value): void }>();
const selectOptions = computed(() => objectToArray(props.options) as ISelectOption[]);
const selectItem = computed(
  () =>
    selectOptions.value.find(item => item.value === props.modelValue) as ISelectOption,
);

const emitValue = function (ev: Event): void {
  const el = ev.target as HTMLLIElement;
  emit('update:modelValue', el.value);
  handlerButtonToggle();
};

const optionList = ref(null) as Ref<HTMLElement | null>;
const handlerButtonToggle = (function () {
  let showSelect = false;

  return async function () {
    showSelect = !showSelect;
    if (optionList.value) {
      if (showSelect) {
        optionList.value.style.display = 'block';
        await msDelay();
        optionList.value.classList.add('show');
      } else {
        optionList.value.classList.remove('show');
        await msDelay();
        optionList.value.style.display = 'none';
      }
    }
  };
})();

const outSideClick = function (): void {
  handlerButtonToggle();
};

const classes = computed(() => ({
  '': true,
}));
</script>
