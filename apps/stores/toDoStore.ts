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

export class Task {
  id: number;
  userID: number;
  title: string;
  completed: boolean;

  constructor(id: number, userID: number, title: string, completed: boolean) {
    this.id = id || 0;
    this.userID = userID || 0;
    this.title = title || "";
    this.completed = completed || false;
  }
}

export const useToDoStore = defineStore({
  id: "toDo",
  state: (): {
    toDoList: Task[];
    doneList: Task[];
    toDoSearch: "";
    doneSearch: "";
    modalStatus: boolean;
  } => {
    return {
      toDoList: [],
      doneList: [],
      toDoSearch: "",
      doneSearch: "",
      modalStatus: false,
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
    pushList(list: Task[], task: Task) {
      list.push(task);
    },

    getID(): number {
      return Math.floor(Math.random() * (1000000 - 100000 + 1)) + 10000;
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

    openModal() {
      console.log("open modal");
      this.modalStatus = true;
    },

    cloesModal() {
      console.log("cloes modal");
      this.modalStatus = false;
    },

    insertNewTask(_userID: number, _title: string) {
      const task = new Task(this.getID(), _userID, _title, false);
      this.pushList(this.toDoList, task);
    },

    updateTask(task: Task, id: number, _userID: number, _title: string) {
      if (task.id === id) {
        (task.userID = _userID), (task.title = _title);
      }
    },

    deleteTask(list: Task[], task: Task) {
      const index = list.findIndex((item) => item === task);
      if (index !== -1) {
        list.splice(index, 1);
      }
    },
  },
  persist: {
    // bug: Hydration completed but contains mismatches
    // type SSR sẽ gặp lỗi runtime do data từ SSR không khớp với CSR
    storage: persistedState.localStorage,
  },
});
