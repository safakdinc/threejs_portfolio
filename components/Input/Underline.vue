<template>
  <div class="wrapper rounded-xl">
    <input type="text" class="w-full" @input="onInput" placeholder="he" />
    <span class="span customFont">{{ props.label }}</span>
    <div class="underline"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Label'
  }
});

const emits = defineEmits(['handleInput']);

function onInput() {
  emits('handleInput', event.target.value);
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}

input {
  padding: 4px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  background-color: transparent;

  &::placeholder {
    transition: all 0.2s ease-in;
    opacity: 0;
  }

  &:focus ~ .span,
  &:not(:placeholder-shown) ~ .span {
    color: blue;
    top: -1.4rem;
    font-size: 14px;
    color: var(--text-gray);
  }

  &:focus ~ .underline::after {
    transform: scaleX(1);
    transform-origin: left;
  }
}

.span {
  padding: 4px;
  display: flex;
  pointer-events: none;
  position: absolute;
  top: 0px;
  left: 0;
  font-size: 18px;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in;
}

.underline {
  position: relative;
  height: 0.12rem;
  width: 100%;
  background-color: rgb(69, 69, 69);
  border-radius: 9999px;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    position: relative;
    z-index: 10;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.2s ease-in;
    background: #eeeeee; /* linear-gradient(90deg, rgba(71, 179, 148, 1) 0%, rgba(53, 185, 207, 1) 100%) */
  }
}
</style>
