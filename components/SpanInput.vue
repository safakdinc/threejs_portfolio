<template>
  <div id="textarea-wrapper" class="overflow-y-auto flex-1 flex w-full relative">
    <span
      class="outline-none absolute top-0 left-0 w-full h-full overflow-x-hidden text-wrap text-lg bg-transparent shadow rounded-[inherit]"
      contenteditable
      role="textbox"
      ref="element"
      :class="{ error: props.checked && (text == '' || text == null) }"
      @input="input">
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Type a comment'
  },
  checked: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits(['handleInput']);
const text = ref();

function input() {
  text.value = event.target.textContent;
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
.error:empty::before {
  color: rgb(203, 40, 40);
}

span:empty::before {
  content: 'Write your message';
  transition: all 0.2s ease-in;
  color: var(--text-gray);
  font-weight: 600;
  display: inline-block;
}
</style>
