export default {
  target: "static",
  colorMode: {
    classSuffix: "",
  },

  head: {
    title: "Gabriel Caiana - Website",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  css: ["~/assets/app.css"],

  plugins: [
    // "~/plugins/back-to-top.js"
  ],

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
