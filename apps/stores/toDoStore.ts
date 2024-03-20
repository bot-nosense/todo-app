// apps\stores\toDo.ts

import { defineStore } from "pinia";
import axios from "axios";

const DATA_PATH: string = "https://jsonplaceholder.typicode.com/todos";

const filteredList = (taskList: Task[], inputSearch: string) => {
  return taskList
    .filter((task) =>
      task.title.toLowerCase().includes(inputSearch.toLowerCase())
    )
    .sort((a, b) => a.title.localeCompare(b.title));
};

const pushList = (list: Task[], task: Task) => {
  list.push(task);
};

export class Task {
  id: number;
  userId: number;
  title: string;
  completed: boolean;

  constructor(id: number, userId: number, title: string, completed: boolean) {
    this.id = id || 0;
    this.userId = userId || 0;
    this.title = title || "";
    this.completed = completed || false;
  }
}

export const useToDoStore = defineStore({
  id: "toDo",
  state: (): {
    toDoList: Task[];
    doneList: Task[];
    toDoSearch: string;
    doneSearch: string;
  } => {
    return {
      toDoList: [],
      doneList: [],
      toDoSearch: "",
      doneSearch: "",
    };
  },
  getters: {
    filteredToDoList(state) {
      return filteredList(state.toDoList, state.toDoSearch);
    },

    filteredDoneList(state) {
      return filteredList(state.doneList, state.doneSearch);
    },
  },
  actions: {
    removeFromList(list: Task[], task: Task) {
      const index = list.findIndex((item) => item === task);
      if (index !== -1) {
        list.splice(index, 1);
      }
    },

    getID(): number {
      return Math.floor(Math.random() * (1000000 - 100000 + 1)) + 10000; // chuyển vào common
    },

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

    clearLocalStorage() {
      this.toDoList = [];
      this.doneList = [];
    },

    insertNewTask(_userId: number, _title: string) {
      const task = new Task(this.getID(), _userId, _title, false);
      pushList(this.toDoList, task);
    },

    updateTask(task: Task, _userId: number, _title: string) {
      task.userId = _userId;
      task.title = _title;
      console.log("update ", task.id, task.userId, task.title, task.completed);
    },

    deleteTask(list: Task[], task: Task) {
      const index = list.findIndex((item) => item === task);
      if (index !== -1) {
        list.splice(index, 1);
      }
    },

    doneTask(task: Task, _userId: number, _title: string) {
      task.completed = true;
      task.userId = _userId;
      task.title = _title;
      this.removeFromList(this.toDoList, task);
      pushList(this.doneList, task);
    },
  },
  persist: {
    // bug: Hydration completed but contains mismatches
    // SSR trả về DOM, sau đó hydration để kích hoạt các comps, xung đột với DOM của client
    storage: persistedState.localStorage,
  },
});
