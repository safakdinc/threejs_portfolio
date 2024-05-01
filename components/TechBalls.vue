<template>
  <div class="w-full grid grid-cols-12 mt-[48px]">
    <div class="w-full col-span-12 sm:col-span-8 sm:col-start-3 flex justify-center py-[64px]">
      <TitleReveal>
        <div class="customFont xl-text font-bold">Other Technolohies I Use</div>
      </TitleReveal>
    </div>
    <div class="flex justify-center flex-wrap col-start-0 sm:col-span-9 sm:col-start-2 md:col-span-6 md:col-start-4">
      <div v-for="(item, index) in items" class="w-1/6" ref="content">
        <Ball :img="item.img" :info="item.info"></Ball>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const items = [
  {
    img: 'https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png?f=webp',
    info: {
      title: 'HTML5',
      explanation: 'HTML is a markup language used to structure web pages.'
    }
  },
  {
    img: 'https://cdn.iconscout.com/icon/free/png-256/free-css3-9-1175237.png?f=webp',
    info: {
      title: 'CSS',
      explanation: 'Styling language for web pages.'
    }
  },
  {
    img: '/javascript.png',
    info: {
      title: 'JavaScript',
      explanation: 'Main programming language for web development.'
    }
  },
  {
    img: 'https://static-00.iconduck.com/assets.00/vue-icon-2048x1766-ntogpmti.png',
    info: {
      title: 'Vue 3',
      explanation: 'Progressive JavaScript framework.'
    }
  },
  {
    img: '/nuxt.png',
    info: {
      title: 'Nuxt 3',
      explanation: 'Vue framework for building web applications'
    }
  },
  {
    img: '/tailwind.png',
    info: {
      title: 'Tailwind',
      explanation: 'Utility-first CSS library.'
    }
  },
  {
    img: 'https://3dfolio-ivory.vercel.app/assets/threejs-fe160e71.svg',
    info: {
      title: 'ThreeJS',
      explanation: 'JavaScript library for 3D design.'
    }
  },
  {
    img: 'https://raw.githubusercontent.com/nuxt/modules/main/icons/pinia.svg',
    info: {
      title: 'Pinia',
      explanation: 'State management for Vue.'
    }
  },
  {
    img: 'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png',
    info: {
      title: 'NodeJS',
      explanation: 'JavaScript runtime for server-side development.'
    }
  },
  {
    img: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png',
    info: {
      title: 'MongoDB',
      explanation: 'NoSQL database.'
    }
  },
  {
    img: 'https://cdn.iconscout.com/icon/free/png-256/free-lottiefiles-logo-5622688-4674917.png',
    info: {
      title: 'Lottie',
      explanation: 'Animation library and file format for web development.'
    }
  }
];

const content = ref();

onMounted(() => {
  // Define the animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: content.value,
      start: 'top center+=200',
      end: 'bottom center',
      toggleActions: 'play resume resume reverse'
    }
  });

  content.value.forEach(element => {
    tl.fromTo(element, { scale: 0 }, { scale: 1, ease: 'back.out(3)', duration: 0.3 }, '<0.07');
  });
});
</script>

<style lang="scss" scoped></style>
