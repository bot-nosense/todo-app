<template>
    <div class="card mx-auto" style="width: 45%;">
        <!-- @dragover="store.handleDragOver($event, 'toDoList') -->

        <div class="card-header d-flex justify-content-between align-items-center">
            <span class="text-start">{{ titleComponent }}</span>
            <div v-if="props.componentName === 'todo'">
                <NuxtLink to="" class="d-flex justify-content-end" data-bs-toggle="modal" data-bs-target="#modalID"
                    @click="store.todoStore.openModal">
                    ADD TASK
                </NuxtLink>
                <TaskDetailModal :modalName="modalName" :task="{ id: 0, userID: 0, title: '', completed: false }" />
            </div>
        </div>

        <div class="card-body">
            <SearchInput :componentName="componentName" />
            <!-- :value="store.toDoTaskSearch" :onUpdateSearchValue="store.handleUpdateToDoTaskSearch" -->

            <div style="height: calc(100vh - 140px); overflow-y: auto;">
                <ul class="list">
                    <li v-for="singleTask in tasks" :key="singleTask.id">
                        <TaskButton :task="singleTask" />
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
    tasks: Task[],
    componentName: string,
}>()
const titleComponent = ref<string>(props.componentName === 'todo' ? 'TO DO LIST' : 'DONE LIST')
const modalName = ref<string>('ADD TASK')
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