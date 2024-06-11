// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: {
    css: "/<rootDir>/assets/css",
  },
  css: ["@/assets/css/main.css"],
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/ui",
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    ['@nuxtjs/google-fonts', {
      families: {
        Jost: true,
      }
    }],
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  image: {
    inject: true,
    quality: 100,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});