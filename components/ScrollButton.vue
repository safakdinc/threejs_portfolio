<template>
  <div class="absolute bottom-7 left-0 w-full h-12 flex justify-center scroll-button">
    <button @click="scrollToSection">
      <div
        class="w-[35px] h-[64px] rounded-3xl border-4 border-[var(--primary)] flex justify-center items-start p-2 hover:scale-[1.1] transition-transform duration-300">
        <div class="w-3 h-3 rounded-full bg-[var(--primary)]" ref="dot"></div>
      </div>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { TweenMax, Power1 } from 'gsap';

const dot = ref();
onMounted(() => {
  // Define the animation
  function animateDot() {
    TweenMax.to(dot.value, 1, {
      y: '+=25', // Move up
      ease: Power1.easeInOut,
      repeat: -1, // Repeat infinitely
      yoyo: true // Reverse the animation
    });
  }

  animateDot(); // Start the animation
});

function scrollToSection(link) {
  const element = document.getElementById('About');
  element.scrollIntoView({
    behavior: 'smooth'
  });
}
</script>

<style lang="scss" scoped></style>
