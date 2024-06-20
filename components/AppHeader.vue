<script setup>

</script>

<template>
  <header class="header">
    <div class="header-wrapper container">
      <div class="header__left-side">
        <NuxtLink to="/">
          <NuxtImg class="header__logo" src="/img/Logo.svg" width="119px" height="26px" />
        </NuxtLink>
        <NuxtLink class="header__link" to="/tarifs">Тарифы</NuxtLink>
        <NuxtLink class="header__link" to="/contacts">Контакты</NuxtLink>
      </div>
      <div class="header__right-side">
        <NuxtLink class="header__link" to="tel:+74951184422">+7 495 118-44-22</NuxtLink>
        <button class="header__link">Вход</button>
        <AppButton text="Регистрация" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';

.header {
  display: flex;
  align-items: center;
  padding: 17px 0px;
  background-color: #000;
}
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header {
  &__logo {
    margin-right: 30px;
  }
  &__link {
    margin-right: 30px;
    @include link;
    &:last-child {
      margin-right: 0;
    }
  }
  &__right-side {
    display: flex;
    align-items: center;
  }
}
</style>