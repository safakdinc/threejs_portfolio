<template>
  <div class="w-full">
    <div class="fixed bottom-0 right-0 p-[24px] px- flex gap-[16px] z-[2000]">
      <div class="w-7 h-7 icon">
        <div class="w-full h-full hover-effect">
          <a href="https://www.linkedin.com/in/şafak-dinç-7676652b0/" target="_blank" class="cursor-pointer">
            <IconLinkedin></IconLinkedin>
          </a>
        </div>
      </div>
      <div class="w-7 h-7 icon">
        <div class="w-full h-full hover-effect">
          <a href="https://github.com/safakdinc" target="_blank" class="cursor-pointer">
            <IconGithub></IconGithub>
          </a>
        </div>
      </div>
    </div>
    <!--NavBar-->
    <NavBar></NavBar>

    <slot></slot>
  </div>
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
    }
  ]
});
</script>

<style lang="scss" scoped>
.hover-effect {
  transition: all 0.2s ease-out;
  transform: scale(1);
  &:hover {
    transform: scale(1.1);
  }
}
</style>
