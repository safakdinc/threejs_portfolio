<template>
  <button
    v-wave
    class="h-[48px] flex justify-center items-center rounded-lg button cursor-pointer relative overflow-hidden"
    @click="emits('handleClick')"
    :style="{ 'background-color': props.background }">
    <div class="shimmer w-full h-full absolute top-0" :style="{ '--color': props.shimmerColor }"></div>
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  shimmerColor: {
    type: String,
    default: 'rgb(255, 255, 255)'
  },
  background: {
    type: String,
    default: 'black'
  }
});
const emits = defineEmits(['handleClick']);
</script>

<style lang="scss" scoped>
.button {
  transition: scale 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
  &:hover {
    .shimmer {
      left: 0;
      transform: translate(100%, 0);
    }
  }
}
.shimmer {
  --color: rgba(255, 255, 255);
  left: -50%;
  transform: translate(-50%, 0);
  transition: transform 0.3s ease-in-out;
  background: linear-gradient(45deg, transparent 45%, var(--color) 50%, transparent 55%);
}
</style>
