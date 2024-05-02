<template>
  <div class="w-full">
    <div class="fixed bottom-0 right-0 p-[24px] px- flex gap-[16px] z-[2000]">
      <div class="w-7 h-7 icon">
        <a href="https://www.linkedin.com/in/şafak-dinç-7676652b0/" target="_blank" class="cursor-pointer hover-effect">
          <IconLinkedin></IconLinkedin>
        </a>
      </div>
      <div class="w-7 h-7 icon">
        <a href="https://github.com/kodsilici02" target="_blank" class="cursor-pointer hover-effect">
          <IconGithub></IconGithub>
        </a>
      </div>
    </div>
    <!--NavBar-->
    <NavBar></NavBar>

    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.hover-effect {
  transition: transform 0.2s ease-out;
  transform: scale(1);
  &:hover {
    transform: scale(1.1);
  }
}
</style>
