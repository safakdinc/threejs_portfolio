<template>
  <div class="w-full full-screen-height h-1 flex">
    <div class="w-[100%] lg:w-[45%] h-full flex flex-col justify-center gap-[16px] pb-[80px]">
      <div class="font-[700] xl-text hero-text customFont">Hey! I'm <span class="text-[var(--primary)]">Şafak</span></div>
      <div class="lg-text w-full xl:w-[70%] font-[500] hero-subtitle text-[var(--text-gray)]">
        I will design smooth animated and unique interfaces for you
      </div>
    </div>
    <div class="w-full h-full overflow-hidden py-10 absolute top-0 left-0 z-[-1] lg:z-10 lg:flex-1 lg:relative">
      <Blob></Blob>
    </div>
  </div>
  <ScrollButton></ScrollButton>
</template>

<script setup></script>

<style lang="scss" scoped>
.straight-line {
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, transparent 100%);
}
.lg-text {
  font-size: 22px;
  line-height: 28px;

  @media (min-width: 1024px) {
    font-size: 25px;
    line-height: 31px;
  }
}
.bg-blur {
  background-color: #03030385;
  backdrop-filter: blur(10px);
}
</style>
