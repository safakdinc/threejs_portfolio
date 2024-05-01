<template>
  <div class="rounded-lg overflow-hidden relative">
    <div
      class="absolute top-0 left-0 w-full h-full"
      :style="{ backdropFilter: `blur(${props.blur}px)`, background: props.background }"></div>
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  background: {
    type: String,
    default: 'transparent'
  },
  blur: {
    type: Number,
    default: 5
  }
});
</script>

<style lang="scss" scoped></style>
