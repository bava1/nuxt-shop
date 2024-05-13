// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: false 
  },
  css: [
    '~/assets/css/main.css',
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css',
    //'@/assets/scss/main.scss'
  ],
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript",
        },
      ],
    },
  },
  modules: [
    'nuxt-icon',
    // ['@pinia/nuxt', { autoImports: ['defineStore', 'mapStores'] }]
    //'@nuxtjs/axios',
  ],
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },

})
