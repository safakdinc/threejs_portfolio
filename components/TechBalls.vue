<template>
  <div class="w-full grid grid-cols-12 mt-[48px]">
    <div class="w-full col-span-12 sm:col-span-8 sm:col-start-3 flex justify-center py-[64px]">
      <TitleReveal>
        <div class="customFont xl-text font-bold sm:whitespace-nowrap text-center">Other Techs I Use</div>
      </TitleReveal>
    </div>
    <div class="flex justify-center flex-wrap col-span-12 col-start-0 md:col-span-9 md:col-start-2 lg:col-span-6 lg:col-start-4">
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
    img: 'https://res.cloudinary.com/dn5zxeevu/image/upload/v1722185699/1175208_fxxfrh.webp',
    info: {
      title: 'HTML5',
      explanation: 'HTML is a markup language used to structure web pages.'
    }
  },
  {
    img: 'https://res.cloudinary.com/dn5zxeevu/image/upload/v1722185698/1175237_zuf3jv.webp',
    info: {
      title: 'CSS',
      explanation: 'Styling language for web pages.'
    }
  },
  {
    img: 'https://res.cloudinary.com/dn5zxeevu/image/upload/v1722185698/javascript_vdbbb4.png',
    info: {
      title: 'JavaScript',
      explanation: 'Main programming language for web development.'
    }
  },
  {
    img: 'https://res.cloudinary.com/dn5zxeevu/image/upload/v1722185698/vue_q43jfo.png',
    info: {
      title: 'Vue 3',
      explanation: 'Progressive JavaScript framework.'
    }
  },
  {
    img: 'https://res.cloudinary.com/dn5zxeevu/image/upload/v1722185698/nuxt_zgu84y.png',
    info: {
      title: 'Nuxt 3',
      explanation: 'Vue framework for building web applications'
    }
  },
  {
    img: 'https://res.cloudinary.com/dn5zxeevu/image/upload/v1722185698/tailwind_jqesse.png',
    info: {
      title: 'Tailwind',
      explanation: 'Utility-first CSS library.'
    }
  },
  {
    img: 'https://res.cloudinary.com/dn5zxeevu/image/upload/v1722185697/threejs-fe160e71_grptri.svg',
    info: {
      title: 'ThreeJS',
      explanation: 'JavaScript library for 3D design.'
    }
  },
  {
    img: 'https://res.cloudinary.com/dn5zxeevu/image/upload/v1722185697/pinia_frduvp.svg',
    info: {
      title: 'Pinia',
      explanation: 'State management for Vue.'
    }
  },
  {
    img: 'https://res.cloudinary.com/dn5zxeevu/image/upload/v1722185698/node_uo3lrq.png',
    info: {
      title: 'NodeJS',
      explanation: 'JavaScript runtime for server-side development.'
    }
  },
  {
    img: 'https://res.cloudinary.com/dn5zxeevu/image/upload/v1722185699/mongodb_original_logo_icon_146424_q3s7vg.webp',
    info: {
      title: 'MongoDB',
      explanation: 'NoSQL database.'
    }
  },
  {
    img: 'https://res.cloudinary.com/dn5zxeevu/image/upload/v1722185697/free-lottiefiles-logo-5622688-4674917_ypfaru.webp',
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
