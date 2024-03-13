<!-- apps\app.vue -->

<template>
  <div class="card text-center vh-100 d-flex flex-column justify-content-center">
    <div class="card-body d-flex justify-content-between">
      <TaskListCard :taskList="store.todoStore.filteredToDoList" componentName="todo" />
      <TaskListCard :taskList="store.todoStore.filteredDoneList" componentName="done" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '~/stores'
const store = useStore()
onBeforeMount(() => {
  // store.todoStore.clearLocalStorage()
  store.todoStore.fetchTasks()
})
</script>