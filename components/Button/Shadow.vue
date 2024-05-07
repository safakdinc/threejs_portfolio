<template>
  <div class="box-shadow-button rounded-full cursor-pointer flex justify-center items-center">
    <slot></slot>
  </div>
</template>
<style scoped>
.box-shadow-button {
  border: 2px solid var(--primary);
  transition: 0.3s ease-in-out;
}
.box-shadow-button:hover {
  box-shadow: 0.3em 0.3em 0 0 var(--primary), inset 0 0 0 0 var(--primary);
  transform: translate(-5px, -5px);
}
</style>
