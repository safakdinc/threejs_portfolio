<template>
  <button
    v-wave
    class="rounded-lg button cursor-pointer relative"
    @click="emits('handleClick')"
    :style="{ '--color': props.underlineColor }">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  underlineColor: {
    type: String,
    default: 'rgb(255, 255, 255)'
  }
});
const emits = defineEmits(['handleClick']);
</script>

<style lang="scss" scoped>
.button {
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    height: 2px;
    width: 100%;
    background-color: var(--color);
    transform: scaleX(0);
    transform-origin: bottom right;
  }
  &:hover::after {
    transform: scaleX(100%);
    transform-origin: bottom left;
  }
}
</style>
