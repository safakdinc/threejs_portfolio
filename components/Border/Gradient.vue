<template>
  <div class="p-[2px] overflow-hidden relative">
    <div class="w-full h-full rounded-lg absolute top-0 left-0 gradient z-[-1]"></div>

    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.gradient {
  background: rgb(22, 219, 179);
  background: linear-gradient(160deg, #16dbb3 0%, #9142de 80%);
}
</style>
