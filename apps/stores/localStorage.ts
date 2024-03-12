// apps\stores\localStorage.ts

import { defineStore } from "pinia";

export const uselocalStorage = defineStore({
  id: "localStorage",
  actions: {
    saveDataLocalStorage(localStorageName: string, data: object) {
      try {
        localStorage.setItem(localStorageName, JSON.stringify(data));
      } catch (error) {
        console.error("Error saving data to local storage:", error);
      }
    },

    getDataLocalStorage(localStorageName: string) {
      try {
        const storedData = localStorage.getItem(localStorageName);
        return storedData ? JSON.parse(storedData) : null;
      } catch (error) {
        console.error("Error getting data from local storage:", error);
        return null;
      }
    },

    removeItemLocalStorage(item: string) {
      try {
        localStorage.removeItem(item);
      } catch (error) {
        console.error("Error removing item from local storage:", error);
      }
    },
  },
});
