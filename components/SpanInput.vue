<template>
  <div id="textarea-wrapper" class="overflow-y-auto flex-1 flex w-full relative">
    <span
      class="outline-none absolute top-0 left-0 w-full h-full overflow-x-hidden text-wrap text-lg bg-transparent shadow rounded-[inherit]"
      contenteditable
      role="textbox"
      ref="element"
      @input="input">
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Type a comment'
  }
});

const emits = defineEmits(['handleInput']);

function input() {
  emits('handleInput', event.target.textContent);
}
</script>

<style scoped>
.shadow {
  background: transparent;
  outline: none;
  transition: box-shadow 0.4s ease;
  box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
}
span:focus {
  box-shadow: inset 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
}

span:empty::before {
  content: 'Type your message';
  color: var(--text-gray);
  font-weight: 600;
  display: inline-block;
}
</style>
