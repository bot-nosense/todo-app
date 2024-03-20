<!-- apps\components\TaskListCard.vue -->

<template>
    <div class="card mx-auto" style="width: 45%;">

        <div class="card-header d-flex justify-content-between align-items-center">
            <span class="text-start">{{ titleComponent }}</span>
            <div v-if="props.componentName === 'todo'">
                <NuxtLink to="" class="d-flex justify-content-end" data-bs-toggle="modal"
                    :data-bs-target="'#' + task.id" @click="openModal">
                    ADD TASK
                </NuxtLink>

                <Teleport to="body">
                    <div class="modal fade show " tabindex="-1" aria-labelledby="taskDetailModalLabel"
                        aria-hidden="true" :id="task.id + ''" :style="{ 'display': modalStatus ? 'block' : 'none' }">
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content ">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="taskDetailModalLabel">ADD TASK</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                        @click="closeModal"></button>
                                </div>
                                <div class="modal-body ">
                                    <div class="input-group mb-3 ">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text " id="inputTextuserId">User ID</span>
                                        </div>
                                        <input type="text" class="form-control" aria-label="userId"
                                            id="validationuserId" aria-describedby="inputTextuserId"
                                            v-model="userIDModify">
                                    </div>

                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">Title</span>
                                        </div>
                                        <input type="text" class="form-control" aria-label="Username"
                                            aria-describedby="basic-addon1" v-model="titleModify">
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-outline-success"
                                        @click="store.todoStore.insertNewTask(userIDModify, titleModify)">CREATE</button>
                                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal"
                                        @click="closeModal">CLOSE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Teleport>
            </div>
        </div>

        <div class="card-body">
            <SearchInput :componentName="componentName" />

            <div style="height: calc(100vh - 140px); overflow-y: auto;">
                <ul class="list">
                    <li v-for="singleTask in taskList" :key="singleTask.id">
                        <TaskButton :detailTask="singleTask" :componentName="componentName" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Task } from '~/stores/toDoStore';
import { useStore } from '~/stores'
import { reactive, ref } from 'vue';

const store = useStore()
const userIDModify = ref<number>(0)
const titleModify = ref<string>('')
const props = defineProps<{
    taskList: Task[],
    componentName: string,
}>()
const titleComponent = ref<string>(props.componentName === 'todo' ? 'TO DO LIST' : 'DONE LIST')
const task = reactive({ id: 0, userId: 0, title: '', completed: false })
const modalStatus = ref<boolean>(false)
const openModal = () => {
    console.log('open create modal')
    modalStatus.value = true
}
const closeModal = () => {
    console.log('close create modal')
    modalStatus.value = false
}
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

.input-group.mb-3 {
    transition: margin 0.2s;
    margin-left: 0;
}

.input-group.mb-3:hover {
    margin-left: -10px;
}

.input-group-prepend {
    width: 110px;
}

.input-group-prepend span {
    margin-right: 10px;
}
</style>