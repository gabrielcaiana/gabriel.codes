export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  colorMode: {
    classSuffix: "",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/app.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "~/plugins/back-to-top.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],

  loading: {
    color: "green",
    height: "5px",
    failedColor: "red",
    continuous: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  publicRuntimeConfig: {
    emailjs: {
      userId: process.env.VUE_EMAILJS_USER_ID,
      templateId1: process.env.VUE_EMAILJS_TEMPLATE1_ID,
      templateId2: process.env.VUE_EMAILJS_TEMPLATE2_ID,
      serviceId: process.env.VUE_EMAILJS_SERVICE_ID,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
