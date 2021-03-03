export default {
  head: {
    title: 'Aroma Dum',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'An online hookah market (store) to buy finest quality hookah and hookah accessories.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/assets/css/main.min.css',
  ],

  plugins: [
    { src: '@/plugins/vue-slider.client.js', ssr: false },
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build'
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  build: {
  },

  axios: {
    baseURL: 'http://127.0.0.1:8000',
  },

}
