<script setup>
const props = defineProps({
  slides: {
    type: Array,
    default: [],
  },
})
</script>

<template>
  <Swiper
    class="slider"
    :modules="[SwiperNavigation]"
    :slides-per-view="3"
    :space-between="35"
    :loop="false"
    :effect="'creative'"
    :autoplay="{
      delay: 1000,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide v-for="slide in props.slides" :key="slide.id">
      <CardsSliderCard :card="slide" />
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss" scoped>
.slider {
  width: 1148px;
  padding: 30px;
}
</style>