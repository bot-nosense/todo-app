// apps\stores\toDo.ts

import { defineStore } from "pinia";
import axios from "axios";

const DATA_PATH: string = "https://jsonplaceholder.typicode.com/todos";

class Task {
  id: number;
  userID: number;
  title: string;
  completed: boolean;

  constructor(id: number, userID: number, title: string, completed: boolean) {
    this.id = id;
    this.userID = userID;
    this.title = title;
    this.completed = completed;
  }
}

export const useToDoStore = defineStore({
  id: "toDo",
  state: (): {
    toDoList: Task[];
    doneList: Task[];
  } => {
    return {
      toDoList: [],
      doneList: [],
    };
  },
  actions: {
    async fetchTasks() {
      try {
        if (this.toDoList.length === 0 || this.doneList.length === 0) {
          console.log("List không có data, load từ API");
          const response = await axios.get(DATA_PATH);
          const data = response.data;

          data.forEach((element: Task) => {
            if (element.completed === false) {
              this.toDoList.push(element);
            } else {
              this.doneList.push(element);
            }
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    },
  },
  persist: {
    // bug: Hydration completed but contains mismatches
    // type SSR sẽ gặp lỗi runtime do data từ SSR không khớp với CSR
    storage: persistedState.localStorage,
  },
});
