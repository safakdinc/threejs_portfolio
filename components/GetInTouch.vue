<template>
  <div class="w-full h-full bg-blur rounded-[inherit] flex flex-col gap-[32px] px-8 py-[24px] overflow-hidden">
    <div class="w-full xl-text customFont font-bold">Get In Touch</div>
    <div class="w-full flex flex-col">
      <InputUnderline label="First Name" @handleInput="text => (name = text)" :checked="checked"></InputUnderline>
    </div>
    <div class="w-full flex flex-col gap-3">
      <InputUnderline label="E-mail" @handleInput="text => (email = text)" :checked="checked"></InputUnderline>
    </div>

    <div class="w-full flex flex-col flex-1 ml-[2px] gap-[8px] overflow-hidden">
      <div class="w-full lg-text font-[600] customFont">Message</div>
      <SpanInput class="rounded-xl flex-1" @handleInput="text => (message = text)" :checked="checked"></SpanInput>
    </div>
    <div class="w-full flex gap-[16px]">
      <ShimmerButton class="font-bold rounded-xl button-shadow" @handleClick="sendMail"
        ><div background="var(--primary)" class="w-full h-full rounded-[inherit] bg-blur flex items-center justify-center px-4">
          Send your message
        </div></ShimmerButton
      >
      <div class="h-[48px] aspect-square overflow-hidden">
        <Vue3Lottie ref="lottie" :autoPlay="false" :loop="false" :animationLink="animationLink" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from 'nuxt/app';
import ShimmerButton from './ShimmerButton.vue';
import SpanInput from './SpanInput.vue';

const name = ref('');
const email = ref('');
const message = ref('');
const lottie = ref();
const animationLink = ref('https://lottie.host/7770f6b6-d530-4d91-8f00-6036e8d2fa51/7nYgHTxckd.json');
const sent = ref(false);
const checked = ref(false);

async function sendMail() {
  if (!sent.value && checkInputs()) {
    const response = await useFetch('/api/send_mail', {
      method: 'POST',
      params: {
        name: name.value,
        email: email.value,
        message: message.value
      }
    });
    if (response.data.value.data) {
      sent.value = true;
      animationLink.value = 'https://lottie.host/7770f6b6-d530-4d91-8f00-6036e8d2fa51/7nYgHTxckd.json';
      lottie.value.play();
    } else {
      animationLink.value = 'https://lottie.host/5325af77-103d-4ab6-9b1d-e18767168cd4/SJciVX1zAf.json';
      lottie.value.play();
    }
  }
}

function checkInputs() {
  checked.value = true;
  if (name.value != '' && email.value != '' && message.value != '') {
    return true;
  } else {
    return false;
  }
}
</script>

<style lang="scss" scoped>
.bg-blur {
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
}
.shadow {
  box-shadow: inset 0px 0px 4px 1px black;
}
.button-shadow {
  transition: all 0.3s ease;
  box-shadow: 0px 0px 1px 1px var(--text-gray);
  &:hover {
    box-shadow: 0px 0px 12px 1px var(--text-gray);
  }
}
</style>
