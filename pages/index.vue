<script setup>
import { benefit_cards, slider_cards } from '@/composables/useCards'

const form = ref({
  number_auto: null,
  region: null,
  car_cert: null
})

</script>

<template>
  <div class="container">
    <!-- Проверка -->
    <section class="main">
      <div class="main-left-side">
        <h1 class="main-title">Проверьте штрафы и зарегестрируйтесь в 1 клик</h1>

        <!-- Форма -->
        <form class="main-form" @submit.prevent="submitForm">
          <AppInput v-model="form.number_auto" width="320px" label="Номер автомобиля" />
          <AppInput v-model="form.region" label="Регион" />
          <AppInput v-model="form.car_cert" label="Свидетельство о регистрации ТС" />
          <div class="main-form-btns">
            <AppButton text="Проверить штрафы" icon="arrow-left" />
            <button class="play">
              <IconsPlay class="play-icon" />
              О сервисе
              <span class="play-time">(1 мин. 20 сек)</span>
            </button>
          </div>
        </form>
        <p class="main-text-desc">
          Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту
        </p>
      </div>
      <div class="main-right-side">
        <NuxtImg src="/img/main-img.png" sizes="100vw sm:100vw md:100%" />
      </div>
    </section>

    <!-- Плюсы -->
    <section class="section">
      <h2 class="section-title">Плюсы использования сервиса «Компас» для анализа штрафов</h2>
      <div class="benefit-cards">
        <CardsBenefitCard v-for="card in benefit_cards" :key="card.id" :card="card" />
      </div>
    </section>

    <!-- Документы -->
    <section class="section">
      <h2 class="section-title">Документы</h2>
      <AppSlider :slides="slider_cards" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 79px;
}

.main-title {
  margin-bottom: 25px;
  color: #000;
  font-weight: 700;
  font-size: 41px;
  font-family: "PT Sans";
}

.main-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  .input-wrapper {
    &:nth-of-type(3) {
      margin-top: 16px;
      grid-column: auto / span 2;
    }
  }
}

.main-form-btns {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: 1fr 1fr;
  gap: 21px;
  margin-top: 15px;
  .play {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #1253A2;
    border-radius: 8px;
    padding: 11px 20px;
    font-family: "PT sans";
    &:hover {
      border: 1px solid green;
    }
  }
  .play-icon {
    margin-right: 6px;
  }
  .play-time {
    margin-left: 6px;
    color: #1253A2;
  }
}

.main-text-desc {
  margin-top: 16px;
  font-family: "PT Sans";
  font-weight: 400;
  font-size: 13px;
  color: #8F8F8F;
}

.main-right-side {
  width: 100%;
  height: 100%;
}
.section {
  margin-top: 98px;
  text-align: center;
}

.section-title {
  margin-bottom: 33px;
  font-family: "PT Sans";
  font-weight: 700;
  font-size: 41px;
  color: #000;
}

.benefit-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 35px;
}
</style>