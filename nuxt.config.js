import getSocialMeta from './utils/social-meta'

const meta = getSocialMeta()

export default {
  target: 'static',

  head: {
    titleTemplate: '%s | Website',
    meta: [
      ...meta,
      { charset: 'utf-8', hid: 'charset' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
    ],
    link: [
      {
        rel: 'canonical',
        href: global.siteURL,
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
  },
  colorMode: {
    classSuffix: '',
  },

  env: {
    baseURL: process.env.BASE_URL,
  },

  css: ['~/assets/app.css'],

  components: [{ path: '@/components', pathPrefix: false }],

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/eslint-module',
  ],

  loading: {
    color: 'green',
    height: '5px',
    failedColor: 'red',
    continuous: true,
  },

  modules: ['@nuxtjs/pwa'],

  pwa: {
    manifest: {
      name: 'Gabriel Caiana',
      short_name: 'Gabriel | Website',
      lang: 'pt-BR',
    },
  },

  publicRuntimeConfig: {
    emailjs: {
      userId: process.env.VUE_EMAILJS_USER_ID,
      templateId1: process.env.VUE_EMAILJS_TEMPLATE1_ID,
      templateId2: process.env.VUE_EMAILJS_TEMPLATE2_ID,
      serviceId: process.env.VUE_EMAILJS_SERVICE_ID,
    },
  },
}
