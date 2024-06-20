<script setup>
const props = defineProps({
  card: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div class="benefit-card">
    <component :is="props.card.icon" class="benefit-card__icon" />
    <div class="benefit-card__info">
      <h3 class="benefit-card__title">
        {{ props.card.title }}
      </h3>
      <p class="benefit-card__text">
        {{ props.card.text }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';

.benefit-card {
  @include benefit-card;
}
</style>