<script setup>
import { text_info } from '@/composables/useText.js'

definePageMeta({
  breadcrumb: 'Информация об оплате',
})
</script>

<template>
  <div class="container title-page">
    <AppBreadcrumbs />
    <h1 class="title">Информация об оплате</h1>
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