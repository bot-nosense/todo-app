<template>
    <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-outline-dark w-100 text-start task-title" draggable="true"
            data-bs-toggle="modal" :data-bs-target="'#' + task.id" @click="store.todoStore.openModal"> {{ task.title }}
            <!-- @dragstart="store.handleDragStart($event, doneTask)"  -->
        </button>
        <!-- <TaskDetailModal :modalName="modalName" :task="task" /> -->
    </div>
</template>

<script setup lang="ts">
import type { Task } from '~/stores/toDoStore';
import { useStore } from '~/stores'
const store = useStore()

const props = defineProps<{
    task: Task,
}>()
const modalName = ref<string>('DETAIL TASK')

</script>
