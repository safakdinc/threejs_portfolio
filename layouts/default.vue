<template>
  <div class="w-full">
    <div class="fixed bottom-0 right-0 p-[24px] px-[32px] flex gap-[16px] z-[2000]">
      <a href="https://www.linkedin.com/in/şafak-dinç-7676652b0/" target="_blank" class="w-7 h-7 icon cursor-pointer">
        <IconLinkedin></IconLinkedin>
      </a>
      <a href="https://github.com/kodsilici02" target="_blank" class="w-7 h-7 icon cursor-pointer">
        <IconGithub></IconGithub>
      </a>
    </div>
    <!--NavBar-->
    <NavBar></NavBar>

    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.icon {
  transition: transform 0.2s ease-out;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
