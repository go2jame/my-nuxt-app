// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: ['@pinia/nuxt'],
  pages: true,
  runtimeConfig: {
    public: {
      authApiBase: 'https://fakestoreapi.com'
    }
  },
  css:[
    '~/assets/css/main.css'
  ],

})