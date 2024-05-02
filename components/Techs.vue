<template>
  <div class="w-full grid grid-cols-12" id="Techs">
    <div class="col-span-8 col-start-3 flex justify-center">
      <TitleReveal
        ><div class="xl-text font-bold mb-32 mt-[88px] customFont whitespace-normal text-center">Technologies I Use</div></TitleReveal
      >
    </div>
    <div class="col-span-12 col-start-0 md:col-span-10 md:col-start-2 w-full">
      <div class="w-full">
        <TimelineLeft :tool="info_nuxt" :img_class="' mb-1 mr-[1px]'"> </TimelineLeft>
        <TimelineRight :tool="info_gsap" :img_class="' mr-[5px] mb-[2px]'"> </TimelineRight>
        <TimelineLeft :tool="info_threejs" :img_class="' ml-[5px] mt-[2px]'"> </TimelineLeft>
        <TimelineRight :tool="info_tailwindcss" :img_class="''"> </TimelineRight>
      </div>
    </div>
    <div class="col-span-12 mb-20">
      <TechBalls class="w-full"></TechBalls>
    </div>
  </div>
</template>
<script setup>
import TechBalls from './TechBalls.vue';

const info_nuxt = {
  name: 'Nuxt 3',
  title: 'A Powerfull Front-End Framework',
  img: '/nuxt.png',
  link: 'https://nuxt.com',
  articles: [
    'Nuxt 3: Seamlessly integrates with TypeScript for enhanced type safety and developer productivity.',
    'Fast, scalable framework for exceptional web apps, supported by a vibrant community.',
    'Empowering developers with rapid development, performance optimization, and versatile solutions for web applications.'
  ]
};
const info_gsap = {
  name: 'GSAP',
  title: 'Easy To Use Animation Library',
  img: '/gsap.png',
  link: 'https://gsap.com',
  articles: [
    ' Enables smooth animations with advanced features like timelines and easings.',
    'Enhances user experience with seamless transitions and interactive elements.',
    'Empowers developers with robust animation capabilities for web applications.',
    'Offers comprehensive documentation and active community support.',
    'Compatible with modern web development frameworks and libraries.'
  ]
};

const info_threejs = {
  name: 'Three.js',
  title: 'Powerful 3D Graphics Library',
  img: '/threejs.png',
  link: 'https://threejs.org',
  articles: [
    'Enables creation of immersive 3D experiences with ease and efficiency.',
    'Provides a wide range of tools and utilities for building complex 3D scenes.',
    'Empowers developers to create stunning visualizations and interactive applications.',
    'Comes with extensive documentation and a supportive community for learning and assistance.',
    'Compatible with various platforms and browsers, including desktop and mobile devices.'
  ]
};

const info_tailwindcss = {
  name: 'Tailwind CSS',
  title: 'Utility-First CSS Framework',
  img: '/tailwind.png',
  link: 'https://tailwindcss.com',
  articles: [
    'Streamlines styling process with utility classes for rapid development.',
    'Offers a comprehensive set of pre-designed components for building modern interfaces.',
    'Empowers developers to create custom designs with ease using utility-first approach.',
    'Provides responsive design capabilities for seamless experiences across devices.',
    'Comes with extensive documentation and an active community for support and collaboration.'
  ]
};
</script>
<style scoped lang="scss"></style>
