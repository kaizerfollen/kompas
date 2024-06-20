<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'Кнопка'
  },
  icon: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <button class="button">
    {{ props.text }}
    <span class="">
      <IconsArrowLeft v-if="props.icon === 'arrow-left'" class="icon" />
    </span>
  </button>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 18px;
  border-radius: 8px;
  background-color: #0584FE;
  border: 1px solid #0584FE;
  @include link;
  transition: all .2s;
  .icon {
    display: inline-block;
    margin-left: 4px;
  }
  &:hover {
    color: #0584FE;
    background-color: #fff;
    border: 1px solid #0584FE;
    .icon {
      color: red;
      fill: #0584FE;
    }
  }
}
</style>