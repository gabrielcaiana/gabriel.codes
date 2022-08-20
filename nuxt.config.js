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

  css: ['~/assets/app.css'],

  components: [{ path: '@/components', pathPrefix: false }],

  plugins: ['~/plugins/strapi'],

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics'
  ],

  loading: {
    color: 'green',
    height: '5px',
    failedColor: 'red',
    continuous: true,
  },

  modules: ['@nuxtjs/pwa', '@nuxtjs/apollo', ['@nuxtjs/proxy', { ws: false }]],

  proxy: {
    '/github': {
      target: process.env.GITHUB_SERVICE,
      changeOrigin: true,
      pathRewrite: (path) => path.replace(/^\/github/, '')
    }
  },

  apollo: {
    clientConfigs: {
      default: '~/graphql/apollo.config.js',
    },
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
      },
    },
  },

  pwa: {
    manifest: {
      name: 'Gabriel Caiana',
      short_name: 'Gabriel | Website',
      lang: 'pt-BR',
    },
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID // Use as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    apiURL: process.env.API_URL,
    emailjs: {
      userId: process.env.VUE_EMAILJS_USER_ID,
      templateId1: process.env.VUE_EMAILJS_TEMPLATE1_ID,
      templateId2: process.env.VUE_EMAILJS_TEMPLATE2_ID,
      serviceId: process.env.VUE_EMAILJS_SERVICE_ID,
    },
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },
}
