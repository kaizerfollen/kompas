<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
  },
  label: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '100%'
  }
})
</script>

<template>
  <div class="input-wrapper" :style="{ width: props.width }">
    <label class="input-label" for="app-input">{{ props.label }}</label>
    <input class="input" type="text" @input="$emit('update:modelValue', $event.target.value)"/>
  </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
  .input-label {
    display: block;
    margin-bottom: 5px;
    font-family: "PT Sans";
    font-weight: 400;
    font-size: 12px;
    color: #000;
  }
  .input {
    width: 100%;
    height: 40px;
    padding-left: 15px;
    border-radius: 5px;
    border: 1px solid #BCBCBC;
    &:focus {
      border: 1px solid #0584FE;
    }
  }
}
</style>