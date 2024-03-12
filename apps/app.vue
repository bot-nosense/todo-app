<!-- apps\app.vue -->

<template>
  <div>
    <TaskListCard />
  </div>
</template>

<script setup lang="ts">
import { useStore } from '~/stores'
const store = useStore()
onBeforeMount(() => {
  store.todoStore.fetchTasks()
})
</script>