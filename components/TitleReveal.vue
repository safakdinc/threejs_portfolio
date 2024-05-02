<template>
  <div class="overflow-hidden" ref="container">
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
    },
    onComplete: () => {
      tl.kill();
    }
  });
  tl.fromTo(container.value, { width: 0, whiteSpace: 'nowrap' }, { width: 'auto', whiteSpace: 'nowrap', duration: 1 });
});
</script>

<style lang="scss" scoped></style>
