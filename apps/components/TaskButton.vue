<!-- apps\components\TaskButton.vue -->

<template>
    <button type="button" class="btn btn-outline-dark w-100 text-start task-title" data-bs-toggle="modal"
        :data-bs-target="'#' + detailTask.id" @click="clickButton"> {{ detailTask.title }}
    </button>

    <!-- <TaskDetailModal modalName="DETAIL TASK" :task="detailTask" /> -->

    <Teleport to="body" v-show="store.todoStore.modalStatus">
        <div class="modal fade show " tabindex="-1" aria-labelledby="taskDetailModalLabel" aria-hidden="true"
            :id="detailTask.id + ''" :style="{ 'display': store.todoStore.modalStatus ? 'block' : 'none' }">
            <div class="modal-dialog modal-xl">
                <div class="modal-content ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="taskDetailModalLabel">DETAIL TASK</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            @click="store.todoStore.cloesModal"></button>
                    </div>
                    <div class="modal-body ">
                        <div class="input-group mb-3 ">
                            <div class="input-group-prepend">
                                <span class="input-group-text " id="inputTextuserId">User ID</span>
                            </div>
                            <input type="text" class="form-control" aria-label="userId" id="validationuserId"
                                aria-describedby="inputTextuserId" v-model="props.detailTask.userId">
                            <!-- :readonly="readOnlyStatus" v-model="cloneuserId" @input="onchange" -->
                        </div>

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Title</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Username"
                                aria-describedby="basic-addon1" v-model="props.detailTask.title">
                            <!-- v-model="cloneTitle" :readonly="readOnlyStatus" @input="onchange" -->
                        </div>
                    </div>
                    <div class="modal-footer">
                        <!-- <button type="button" class="btn btn-outline-success" v-if="modalName === 'ADD TASK'"
                            @click="store.todoStore.insertNewTask(userId, title)">CREATE</button> -->
                        <button type="button" class="btn btn-outline-success"
                            @click="store.todoStore.updateTask(detailTask)">UPDATE</button>
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal"
                            @click="store.todoStore.cloesModal">CLOSE</button>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import type { Task } from '~/stores/toDoStore';
import { useStore } from '~/stores'
const store = useStore()
const props = defineProps<{
    detailTask: Task,
}>()
const clickButton = () => {
    console.log(props.detailTask.id, props.detailTask.userId, props.detailTask.title, props.detailTask.completed)
    store.todoStore.openModal()
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
