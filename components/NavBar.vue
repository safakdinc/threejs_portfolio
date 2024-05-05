<template>
  <div class="w-full h-[80px] sticky top-0 left-0 z-[1000]">
    <div class="w-full h-full grid grid-cols-12 relative">
      <div class="absolute top-0 left-0 w-full h-full navbar z-[999]" ref="navbar"></div>
      <div class="col-start-0 lg:col-start-3 px-5 lg:px-3 col-span-12 lg:col-span-8 flex justify-between py-2 items-center z-[1000]">
        <div class="flex h-full items-center logo">
          <img src="https://i.ibb.co/jRrmZQt/panter.png" class="rounded-full object-cover object-center h-[60px]" />
          <div class="lg:text-2xl md-text font-bold hidden sm:block">Yazılım Panteri</div>
        </div>
        <div class="flex">
          <ButtonUnderline
            v-for="(link, index) in links"
            @click="scrollToSection(link)"
            class="link-button customFont px-[8px] md:px-[16px] py-[8px]">
            <a class="md-text font-[600] link">{{ link }}</a>
          </ButtonUnderline>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
const links = ['About', 'Techs', 'Contact'];
const navbar = ref();
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to(navbar.value, {
    scrollTrigger: {
      trigger: navbar.value,
      start: 'top top',
      end: '+=500',
      scrub: 1
    },
    backgroundColor: 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(10px)'
  });
});

function scrollToSection(link) {
  const element = document.getElementById(link);
  element.scrollIntoView({
    behavior: 'smooth'
  });
}
</script>

<style lang="scss" scoped>
.link {
  color: var(--text-gray);
  transition: color 0.3s ease-in-out;
  &:hover {
    color: aliceblue;
  }
}
.navbar {
  background-color: rgba(0, 0, 0, 0);
}
</style>
