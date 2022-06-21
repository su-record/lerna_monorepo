<template>
  <div>
    <input
      type="checkbox"
      :id="uid"
      :checked="modelValue === CHECKED_STRING.TRUE"
      @click="update"
    />
    <label :for="uid"></label>
  </div>
</template>

<script setup lang="ts">
import { useUUID } from "../composable/useUUID";
import { CHECKED_STRING } from "../contants/constant";

const uid = useUUID();
const props = defineProps({
  modelValue: String,
  theme: String,
});
const emit = defineEmits<{ (e: string, value: string): void }>();
const update = function (ev: InputEvent): void {
  const el = ev.target as HTMLInputElement;
  emit("update:modelValue", el.checked ? CHECKED_STRING.TRUE : CHECKED_STRING.FALSE);
};
</script>
