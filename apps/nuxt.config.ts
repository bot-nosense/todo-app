// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.css"],

  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],

  plugins: ["~/plugins/pinia.ts"],
});
