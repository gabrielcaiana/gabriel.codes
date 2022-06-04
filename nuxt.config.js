export default {
  target: "static",
  colorMode: {
    classSuffix: "",
  },

  env: {
    baseURL: process.env.BASE_URL
  },

  head: {
    titleTemplate: '%s - Gabriel Caiana',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `
        Bem-vindo(a) ao meu site Para quem não me conhece, meu nome é Gabriel Caiana, sou um desenvolvedor Frontend apaixonado por tecnologia e design.
        Sou formado em Análise e desenvolvimento de sistemas pela FIAP, além de possuir diversas formações de especialização em tecnologias de Frontend, Design e UX.
      ` },
      { name: 'twitter:title', content: 'Gabriel Caiana - Website'},
      { name: 'twitter:description', content: 'Sou desenvolvedor frontend apaixonado por tecnologia, design e inovação digital.'},
      { name: 'twitter:image', content: './static/profile.png'},
      { name: 'twitter:card', content: 'summary_large_image'},
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-title', property: 'og:title', content: 'Gabriel Caiana - Website' },
      { hid: 'og-desc', property: 'og:description', content: 'Sou desenvolvedor frontend apaixonado por tecnologia, design e inovação digital.' },
      { hid: 'og-image', property: 'og:image', content: './static/profile.png'},
      { hid: 'og-url', property: 'og:url', content: 'https://gabrielcaiana.com' } 
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://gabrielcaiana.com'
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" }
    ]
  },

  css: ["~/assets/app.css"],

  components: true,

  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],

  loading: {
    color: "green",
    height: "5px",
    failedColor: "red",
    continuous: true,
  },

  modules: ["@nuxtjs/pwa"],

  pwa: {
    manifest: {
      name: "Gabriel Caiana",
      short_name: "Gabriel",
      lang: "pt-BR",
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

  build: {},
};
