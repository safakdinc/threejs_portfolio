<template>
  <div class="w-full h-fit flex flex-row-reverse lg:flex-row gap-12">
    <!--Timeline content-->
    <div
      class="h-fit flex-1 bg-[var(--background-light)] col-span-5 lg:col-span-3 lg:col-start-3 rounded-lg relative mb-[64px]"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
      ref="content">
      <div class="tooltip" ref="tooltip"></div>
      <div class="w-full h-full rounded-[inherit] flex gap-[4px] flex-col px-7 py-5">
        <div class="w-full lg-text text-white font-bold customFont">{{ tool.name }}</div>
        <div class="w-full base-text text-[var(--text-gray)] font-[700] customFont">{{ tool.title }}</div>
        <div class="w-full flex-1 font-[500] base-text px-5 mt-[8px] customFont">
          <ul style="list-style-type: disc">
            <li v-for="article in tool.articles">{{ article }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w-fit justify-center relative">
      <div
        class="h-[110%] w-[3px] lg:w-[5px] rounded-full bg-white absolute top-[-10%] left-[50%] translate-x-[-50%]"
        ref="verticalLine"></div>
      <a :href="props.tool.link" target="_blank">
        <div
          class="w-[35px] lg:w-[45px] h-[35px] lg:h-[45px] p-1 rounded-full absolute absolute-center bg-[var(--background)] flex justify-center items-center transition-transform duration-[400ms] hover:scale-[1.1] cursor-pointer">
          <svg
            class="w-full h-full overflow-visible absolute absolute-center rotate-[-90deg]"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            ref="svg">
            <circle
              ref="circle"
              class="circle z-[-1]"
              cx="50"
              cy="50"
              r="55"
              stroke="#ffffff"
              stroke-width="6"
              fill-opacity="1"
              fill="var(--background)" />
          </svg>
          <img
            :src="props.tool.img"
            class="w-full h-full z-10 object-center object-contain flex justify-center items-center p-[3px]"
            :class="props.img_class"
            ref="img" />
        </div>
      </a>
    </div>
    <div class="w-0 lg:flex-1"></div>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const props = defineProps({
  tool: {
    type: Object,
    default: {}
  },
  img_class: {
    type: String,
    default: ''
  }
});

gsap.registerPlugin(ScrollTrigger);

const tooltip = ref();
const content = ref();
const circle = ref();
const img = ref();
const verticalLine = ref();

onMounted(() => {
  // Define the animation
  ScrollTrigger.matchMedia({
    '(min-width: 1024px)': largeWindow,
    '(max-width: 1023px)': smallWindow
  });
});

function smallWindow() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: content.value,
      start: 'top center+=200', // Animation starts when top of the content element hits the bottom of the viewport
      end: 'bottom center',
      toggleActions: 'play resume resume reverse'
    }
  });

  tl.fromTo(content.value, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
  tl.fromTo(circle.value, { strokeDashoffset: 1000 }, { strokeDashoffset: 0, duration: 2, ease: 'power3.out' }, '<');
  tl.fromTo(img.value, { scale: 0, opacity: 1 }, { scale: 1, opacity: 1, ease: 'power3.out', duration: 0.5 }, '<');
  tl.fromTo(verticalLine.value, { scaleY: 0 }, { scaleY: 1, ease: 'power3.out' }, '<');
}

function largeWindow() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: content.value,
      start: 'top center+=200', // Animation starts when top of the content element hits the bottom of the viewport
      end: 'bottom center',
      toggleActions: 'play resume resume reverse'
    }
  });

  tl.fromTo(content.value, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
  tl.fromTo(circle.value, { strokeDashoffset: 1000 }, { strokeDashoffset: 0, duration: 2, ease: 'power3.out' }, '<');
  tl.fromTo(img.value, { scale: 0, opacity: 1 }, { scale: 1, opacity: 1, ease: 'power3.out', duration: 0.5 }, '<');
  tl.fromTo(verticalLine.value, { scaleY: 0 }, { scaleY: 1, ease: 'power3.out' }, '<');
}

function mouseEnter() {
  gsap.to(content.value, { scale: 1.03, y: -20, ease: 'power1.out', duration: 0.3 });
  gsap.to(tooltip.value, { y: 22, ease: 'power1.out', duration: 0.3 });
}
function mouseLeave() {
  gsap.to(content.value, { scale: 1, y: 0, ease: 'power1.out', duration: 0.3 });
  gsap.to(tooltip.value, { y: 0, ease: 'power1.out', duration: 0.3 });
}
</script>

<style lang="scss" scoped>
.absolute-center {
  left: 50%;
  translate: -50% 0%;
}
.tooltip {
  pointer-events: none;
  position: absolute;
  top: calc(45px / 2);
  left: 0;
  transform: translate(-100%, -50%);
  border-width: 9px;
  border-style: solid;
  border-color: transparent var(--background-light) transparent transparent;
}

@media (min-width: 1024px) {
  .tooltip {
    border-color: transparent transparent transparent var(--background-light);
    right: 0;
    transform: translate(100%, -50%);
  }
}

.circle {
  stroke-dasharray: 1000;
}
li {
  margin-bottom: 12px;
}
</style>
