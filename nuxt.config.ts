// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  pages: true,
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'documents-license',
          path: '/documents/license',
          component: resolve(__dirname, 'pages/documents/license/index.vue'),
          meta: { breadcrumb: 'Лицензия' }
        },
        {
          name: 'documents',
          path: '/documents',
          component: resolve(__dirname, 'pages/documents/index.vue'),
          meta: { breadcrumb: 'Документы' }
        },
        {
          name: 'documents-policy',
          path: '/documents/policy',
          component: resolve(__dirname, 'pages/documents/policy/index.vue'),
          meta: { breadcrumb: 'Политика обработки персональных данных' }
        },
        {
          name: 'documents-payment',
          path: '/documents/payment',
          component: resolve(__dirname, 'pages/documents/payment/index.vue'),
          meta: { breadcrumb: 'Информация об оплате' }
        }
      )
    }
  },
  css: ['~/assets/scss/main.scss'],
  modules: [['@nuxtjs/google-fonts', {
    families: {
      'PT+Sans': true,
    }
  }], "@nuxt/image", "nuxt-swiper"],
  swiper: {
    modules: ['navigation', 'pagination']
  }
})