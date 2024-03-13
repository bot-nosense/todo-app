// plugins/pinia.ts

import { defineNuxtPlugin } from "#app";
import { createPinia } from "pinia";

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.provide("$pinia", pinia);
});