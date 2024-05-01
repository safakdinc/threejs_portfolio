<template>
  <div class="overflow-hidden whitespace-nowrap" ref="container">
    <slot></slot>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const container = ref();

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container.value,
      start: 'top bottom-=200px',
      end: 'bottom center'
    }
  });
  tl.fromTo(container.value, { width: 0 }, { width: 'auto', duration: 1 });
});
</script>

<style lang="scss" scoped></style>
