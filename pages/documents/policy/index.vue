<script setup>
import { text_info } from '@/composables/useText.js'

definePageMeta({
  breadcrumb: 'Политика обработки персональных данных',
})
</script>

<template>
  <div class="container title-page">
    <AppBreadcrumbs />
    <h1 class="title">Политика обработки персональных данных</h1>
    <AppTextBlock
      v-for="text in text_info"
      :key="text.id"
      :text-info="text"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';

.title-page {
  @include title-page;
}
</style>