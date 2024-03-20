<!-- apps\components\TaskButton.vue -->

<template>
    <div>
        <button type="button" class="btn btn-outline-dark w-100 text-start task-title" data-bs-toggle="modal"
            :data-bs-target="'#' + detailTask.id" @click="openModal"> {{ detailTask.title }}
        </button>

        <!-- bắt sự kiện click thay đổi trạng thái đóng mở modal -->
        <Teleport to="body">
            <div class="modal fade show " tabindex="-1" aria-labelledby="taskDetailModalLabel" aria-hidden="true"
                :id="detailTask.id + ''" :style="{ 'display': modalStatus ? 'block' : 'none' }">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content ">
                        <div class="modal-header">
                            <h5 class="modal-title" id="taskDetailModalLabel">DETAIL TASK</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                @click="closeModal"></button>
                        </div>
                        <div class="modal-body ">
                            <div class="input-group mb-3 ">
                                <div class="input-group-prepend">
                                    <span class="input-group-text " id="inputTextuserId">User ID</span>
                                </div>
                                <input type="text" class="form-control" aria-label="userId" id="validationuserId"
                                    aria-describedby="inputTextuserId" v-model="userIDModify"
                                    :readonly="readonlyStatus">
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">Title</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Username"
                                    aria-describedby="basic-addon1" v-model="titleModify" :readonly="readonlyStatus">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-success" v-if="componentName === 'todo'"
                                @click="store.todoStore.updateTask(detailTask, userIDModify, titleModify)">UPDATE</button>
                            <button type="button" class="btn btn-outline-success" @click="deleteTask">DELETE</button>
                            <button type="button" class="btn btn-outline-success"
                                @click="store.todoStore.doneTask(detailTask, userIDModify, titleModify)">DONE</button>
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal"
                                @click="closeModal">CLOSE</button>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    </div>

</template>

<script setup lang="ts">
import type { Task } from '~/stores/toDoStore';
import { useStore } from '~/stores'
import { ref } from 'vue';

const store = useStore()
const props = defineProps<{
    detailTask: Task,
    componentName: string
}>()
const readonlyStatus = ref<boolean>(props.componentName === 'todo' ? false : true)
const userIDModify = ref<number>(props.detailTask.userId)
const titleModify = ref<string>(props.detailTask.title)
const modalStatus = ref<boolean>(false)
const openModal = () => {
    console.log('open detail modal', props.detailTask.id, props.detailTask.userId, props.detailTask.title, props.detailTask.completed)
    modalStatus.value = true
}
const closeModal = () => {
    console.log('close detail modal')
    modalStatus.value = false
}
const deleteTask = () => {
    if (props.componentName === 'todo') {
        store.todoStore.deleteTask(store.todoStore.toDoList, props.detailTask)
    }
    else {
        store.todoStore.deleteTask(store.todoStore.doneList, props.detailTask)
    }
}
</script>

<style scoped>
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
