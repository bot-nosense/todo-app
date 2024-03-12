// apps\stores\toDo.ts

import { defineStore } from "pinia";
// import { uselocalStorage } from "./localStorage";
import axios from "axios";

const DATA_PATH: string = "https://jsonplaceholder.typicode.com/todos";
const TODO_STORAGE_KEY = "todos";
// const storage = uselocalStorage();

interface Task {
  id: number;
  userID: number;
  title: string;
  completed: boolean;
}

export const useToDoStore = defineStore({
  id: "toDo",
  // state: () => ({
  //   // draggedTask: null as Task | null,
  //   taskSearch: "",
  //   toDoList: [],
  //   doneList: [],
  //   localStorageData: [],
  // }),
  state: () => {
    return {
      toDoList: [],
      doneList: [],
    };
  },
  actions: {
    async fetchTasks() {
      try {
        const response = await axios.get(DATA_PATH);
        const data = response.data;

        if (data) {
          // const existingData = storage.getDataLocalStorage(TODO_STORAGE_KEY);
          // if (!existingData) {
          //   storage.saveDataLocalStorage(TODO_STORAGE_KEY, data);
          // }
        }

        // this.localStorageData = storage.getDataLocalStorage(TODO_STORAGE_KEY);
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    },
  },
  // persist: true,
});
