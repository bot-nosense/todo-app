<!-- apps\app.vue -->

<template>
  <div class="card text-center vh-100 d-flex flex-column justify-content-center">
    <div class="card-body d-flex justify-content-between">
      <TaskListCard :tasks="store.todoStore.filteredToDoList" :componentName="toDoComponent" />
      <TaskListCard :tasks="store.todoStore.filteredDoneList" :componentName="doneComponent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '~/stores'
const store = useStore()
const toDoComponent = ref<string>('todo')
const doneComponent = ref<string>('done')
onBeforeMount(() => {
  // store.todoStore.clearLocalStorage()
  store.todoStore.fetchTasks()
})
</script>