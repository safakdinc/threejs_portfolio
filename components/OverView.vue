<template>
  <div class="w-full full-screen-height flex flex-col justify-center gap-10" id="About">
    <div class="w-full md:w-[70%] xl:w-[60%] gap-[16px] flex flex-col">
      <TitleReveal><div class="xl-text font-bold mt-[80px] customFont overview-title w-fit overflow-hidden">Overview</div></TitleReveal>
      <div class="md-text font-[500] text-[var(--text-gray)] customFont long-text flex flex-wrap" style="line-height: 24px">
        I'm a young web developer usign JavaScript, Node.js, Nuxt 3 and animation libraries like GSAP and Three.js. I see myself as somewhat
        obsessive and a perfectionist, and I try to reflect this side of myself in my work. In this way, I design innovative, user-friendly
        and aesthetic interfaces.
      </div>
    </div>
    <div class="w-full grid grid-cols-4 gap-[24px] h-auto" ref="container">
      <div v-for="item in items" class="h-72 col-span-4 sm:col-span-2 md:col-span-1 cards-container">
        <CardContainer
          :multiplierX="30"
          :multiplierY="20"
          class="w-full h-full rounded-2xl gradient flex justify-center items-center flex-col gap-3 relative">
          <div class="absolute top-0 left-0 p-[2px] w-full h-full gradient rounded-[inherit]">
            <div class="w-full h-full rounded-[inherit] background"></div>
          </div>
          <CardItem class="rounded-full flex justify-center" :translateZ="50">
            <img class="w-16 h-16" :src="item.img" />
          </CardItem>
          <CardItem class="w-2/4 p-3 text-center lg-text font-bold customFont" :translateZ="70" :boxShadow="false"
            >{{ item.title }}
          </CardItem>
        </CardContainer>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
const items = [
  {
    img: '/web.png',
    title: 'Web Developer'
  },
  {
    img: '/mobile.png',
    title: 'Full Stack Developer'
  },
  {
    img: '/backend.png',
    title: 'Nuxt Developer'
  },
  {
    img: '/creator.png',
    title: 'Web Designer'
  }
];

gsap.registerPlugin(ScrollTrigger);

const container = ref();

onMounted(() => {
  const cards = document.querySelectorAll('.cards-container');

  // Define the animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container.value,
      start: 'top center', // Animation starts when top of the content element hits the bottom of the viewport
      end: 'bottom center'
    },
    onComplete: () => {
      tl.kill();
    }
  });
  cards.forEach(card => {
    tl.fromTo(card, { x: '-100%', opacity: 0 }, { x: 0, opacity: 1, ease: 'power2.inOut', duration: 0.25 });
  });
  const title = document.querySelector('.overview-title');
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: title,
      start: 'top bottom-=200px',
      end: 'bottom center'
    }
  });
  // Get the .long-text element
  const longText = document.querySelector('.long-text');
  // Split the textContent into words
  const wordsArray = longText.textContent.split(' ');
  // Remove all HTML content from the .long-text element
  longText.innerHTML = '';
  // Append each word to the .long-text element within a <div> element with the class word
  wordsArray.forEach((word, index) => {
    if (index != 0) {
      const wordDiv = document.createElement('div');
      wordDiv.textContent = word + '\xa0';
      wordDiv.classList.add('word');
      longText.appendChild(wordDiv);
    }
  });

  tl2.fromTo(
    document.querySelectorAll('.word'),
    {
      opacity: 0
    },
    {
      opacity: 1,
      stagger: 0.04,
      duration: 0.7,
      ease: 'power4.out'
    },
    '<'
  );
});
</script>

<style lang="scss" scoped>
.gradient {
  background: rgb(22, 219, 179);
  background: linear-gradient(160deg, #16dbb3 0%, #9142de 100%);
}
.background {
  background-color: var(--background);
}
</style>
