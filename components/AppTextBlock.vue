<script setup>
const props = defineProps({
  textInfo: {
    type: Object,
    default: () => ({})
  },
})
</script>

<template>
  <div class="text-info">
    <h2 class="title">{{ props.textInfo.title }}</h2>
    <p v-for="text in props.textInfo.texts" :key="text.id" class="text">
      {{ text.text }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';

.title-page {
  @include text-info;
}
</style>