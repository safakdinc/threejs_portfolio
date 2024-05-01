<template>
  <div class="w-full">
    <input
      autocomplete="off"
      @input="handleInput()"
      :type="type"
      :readonly="readOnly"
      :max="max"
      class="shadow px-4 py-3 h-full text-base rounded-lg font-bold w-full"
      v-model="internalValue"
      ref="input"
      :placeholder="props.placeholder"
      id="name"
      required />
  </div>
</template>

<script setup>
const emits = defineEmits(['handleType']);
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },

  value: {
    default: null
  },
  readOnly: {
    type: Boolean,
    default: false
  },
  max: Number
});

const input = ref();
const internalValue = ref(props.value);

function handleInput() {
  let target = event.target.value;
  emits('handleType', target);
}
</script>

<style scoped>
.shadow {
  background: transparent;
  outline: none;
  transition: box-shadow 0.4s ease;
  box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  &:focus {
    box-shadow: inset 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
  }
}
</style>
