<template>
  <div :id="uid" :class="[`select-box--${size}`, classes]">
    <button @click="handlerButtonToggle">{{ selectItem.label }}</button>
    <ul ref="optionList" style="display: none" @click="emitValue">
      <li v-for="(option, i) in selectOptions" :key="i" :value="option.value">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { TObj, TValue } from "@/constants/types";
import { computed, Ref, ref } from "vue";
import { CommonUtils } from "@/utils";
import { useUUID } from "@/composable/useUUID";

interface ISelectOption {
  label: string;
  value: TValue;
}

const uid = useUUID();
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
      return ["small", "medium", "large"].includes(value);
    },
  },
  options: {
    type: Object,
    default: {} as TObj,
  },
});
const emit = defineEmits<{ (e: string, v: TValue): void }>();

// let selectOptions = reactive([]) as ISelectOption[];
// const selectItem = ref({}) as Ref<ISelectOption>;

// watch(
//   [() => props.modelValue, () => props.options],
//   current => {
//     selectOptions = CommonUtils.objectToArray(current[1]) as ISelectOption[];
//     selectItem.value = selectOptions.find(
//       item => item.value === current[0],
//     ) as ISelectOption;
//   },
//   {
//     immediate: true,
//   },
// );

const selectOptions = computed(
  () => CommonUtils.objectToArray(props.options) as ISelectOption[],
);
const selectItem = computed(
  () =>
    selectOptions.value.find(item => item.value === props.modelValue) as ISelectOption,
);

const emitValue = function (ev: Event): void {
  const el = ev.target as HTMLLIElement;
  emit("update:modelValue", el.value);
  handlerButtonToggle();
};

const optionList = ref(null) as Ref<HTMLElement | null>;
const handlerButtonToggle = (function () {
  let showSelect = false;

  return async function () {
    showSelect = !showSelect;
    if (optionList.value) {
      if (showSelect) {
        optionList.value.style.display = "block";
        await CommonUtils.delay();
        optionList.value.classList.add("show");
      } else {
        optionList.value.classList.remove("show");
        await CommonUtils.delay();
        optionList.value.style.display = "none";
      }
    }
  };
})();

const classes = computed(() => ({
  "": true,
}));
</script>
