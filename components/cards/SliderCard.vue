<script setup>
const props = defineProps({
  card: {
    type: Object,
    default: '',
  },
})
</script>

<template>
  <div class="slider-card">
    <h3 class="slider-card__title">{{ props.card.title }}</h3>
    <p class="slider-card__text">{{ props.card.text }}</p>
    <NuxtLink class="slider-card__link" :to="props.card.link">
      <AppButton class="btn" text="Перейти" width="100%" />
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';

.slider-card {
  @include slider-card;
}
</style>