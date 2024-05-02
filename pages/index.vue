<template>
  <div ref="canvas" class="w-full overflow-x-hidden grid-rows-subgrid grid grid-cols-12 gap-2 px-[32px]">
    <div class="col-span-12 col-start-0 md:col-span-10 md:col-start-3">
      <Hero></Hero>
    </div>
    <div class="col-span-12 col-start-0 lg:col-span-8 lg:col-start-3">
      <OverView></OverView>
    </div>
    <div class="w-full col-span-12">
      <Techs></Techs>
    </div>
    <div class="w-full col-span-12">
      <Contact></Contact>
    </div>
    <div
      class="w-full h-full fixed top-0 left-0 z-[1001] bg-[var(--background)] loading-screen pointer-events-none flex justify-center items-center opacity-0"></div>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import SplitType from 'split-type';

const canvas = ref();
const tl = gsap.timeline();
onMounted(() => {
  const loading_screen = document.querySelector('.loading-screen');
  const logo = document.querySelector('.logo');
  const links = document.querySelectorAll('.link-button');
  tl.fromTo(loading_screen, { opacity: 1 }, { opacity: 0, duration: 0.7, ease: 'none' });
  tl.fromTo(logo, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0, duration: 0.2, ease: 'none' });
  links.forEach(link => {
    tl.fromTo(link, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0, duration: 0.2, ease: 'none' }, '<0.1');
  });
  const hero_text = new SplitType('.hero-text', { types: 'chars' });
  const chars = hero_text.chars;
  tl.fromTo(
    chars,
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.03,
      duration: 0.7,
      ease: 'power4.out'
    }
  );
  const hero_subtext = document.querySelector('.hero-subtitle');
  tl.fromTo(hero_subtext, { opacity: 0 }, { opacity: 1, duration: 0.2, ease: 'none' }, '<0.4');
  const scroll_button = document.querySelector('.scroll-button');
  tl.fromTo(scroll_button, { opacity: 0, y: '100%' }, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '>0.2');
  const icons = document.querySelectorAll('.icon');
  icons.forEach(icon => {
    tl.fromTo(
      icon,
      { scale: 0 },
      {
        scale: 1,
        duration: 0.2,
        ease: 'back.out(1.7)'
      }
    );
  });
  tl.play();
});
</script>

<style scoped>
/* Add styles here if needed */
</style>
