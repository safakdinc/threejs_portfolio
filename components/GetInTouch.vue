<template>
  <div class="w-full h-full background rounded-[inherit] flex flex-col gap-[32px] px-8 py-[24px] overflow-hidden">
    <div class="w-full xl-text customFont font-bold">Get In Touch</div>
    <div class="w-full flex flex-col">
      <InputUnderline label="What's your name?" @handleInput="text => (name = text)"></InputUnderline>
    </div>
    <div class="w-full flex flex-col gap-3">
      <InputUnderline label="What's your e-mail?" @handleInput="text => (email = text)"></InputUnderline>
    </div>

    <div class="w-full flex flex-col flex-1 ml-[2px] gap-[8px] overflow-hidden">
      <div class="w-full lg-text font-[600] customFont">Write what you want to say</div>
      <SpanInput class="rounded-xl flex-1" @handleInput="text => (message = text)"></SpanInput>
    </div>
    <div class="w-full">
      <ShimmerButton background="var(--primary)" class="font-bold shadow rounded-xl button-shadow"
        ><div class="w-full h-full rounded-[inherit] bg-black flex items-center justify-center px-4">Send your message</div></ShimmerButton
      >
    </div>
  </div>
</template>

<script setup>
import ShimmerButton from './ShimmerButton.vue';
import SpanInput from './SpanInput.vue';

const name = ref('');
const email = ref('');
const message = ref();
</script>

<style lang="scss" scoped>
.background {
  background-color: var(--background);
}
.shadow {
  box-shadow: inset 0px 0px 4px 1px black;
}
.button-shadow {
  transition: all 0.3s ease;
  box-shadow: 0px 0px 7px 0px var(--primary);
  &:hover {
    box-shadow: 0px 0px 12px 0px var(--primary);
  }
}
</style>
