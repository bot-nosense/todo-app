<!-- apps\components\TaskListCard.vue -->

<template>
    <div class="card mx-auto" style="width: 45%;">

        <div class="card-header d-flex justify-content-between align-items-center">
            <span class="text-start">{{ titleComponent }}</span>
            <div v-if="props.componentName === 'todo'">
                <NuxtLink to="" class="d-flex justify-content-end" data-bs-toggle="modal"
                    :data-bs-target="'#' + task.id" @click="store.todoStore.openModal">
                    ADD TASK
                </NuxtLink>
            </div>
        </div>

        <div class="card-body">
            <SearchInput :componentName="componentName" />

            <div style="height: calc(100vh - 140px); overflow-y: auto;">
                <ul class="list">
                    <li v-for="singleTask in taskList" :key="singleTask.id">
                        <TaskButton :detailTask="singleTask" />
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import type { Task } from '~/stores/toDoStore';
import { useStore } from '~/stores'

const store = useStore()
const props = defineProps<{
    taskList: Task[],
    componentName: string,
}>()
const titleComponent = ref<string>(props.componentName === 'todo' ? 'TO DO LIST' : 'DONE LIST')
const task = reactive({
    id: 0, userId: 0, title: '', completed: false
})

</script>

<style scoped>
.list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.list li {
    margin-top: 10px;
    padding: 10px;
    cursor: grab;
    border-radius: 5px;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, opacity 0.2s ease-in-out;
}

.list li:hover {
    transform: scale(1.03);
}

.list li.dragging {
    opacity: 0.7;
    cursor: grabbing;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2), 0px 0px 20px rgba(0, 0, 0, 0.1);
}
</style>