<template>
    <div>
        <Teleport to="body">
            <div class="modal fade show" tabindex="-1" aria-labelledby="taskDetailModalLabel" aria-hidden="true"
                :id="task.id + ''" :style="{ 'display': store.todoStore.modalStatus ? 'block' : 'none' }">
                <!--   -->
                <!-- v-if="isDoneTaskModalOpen"  :id="task.id + ''"-->
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="taskDetailModalLabel">{{ props.modalName }}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                @click="store.todoStore.cloesModal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">User ID</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Username"
                                    aria-describedby="basic-addon1">
                                <!-- :readonly="readOnlyStatus" v-model="cloneUserID" @input="onchange" -->
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">Title</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Username"
                                    aria-describedby="basic-addon1">
                                <!-- v-model="cloneTitle" :readonly="readOnlyStatus" @input="onchange" -->
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-success"
                                v-if="props.modalName === 'TO DO LIST'">CREATE</button>
                            <button type="button" class="btn btn-outline-success"
                                v-if="props.modalName === 'DONE LIST'">UPDATE</button>
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal"
                                @click="store.todoStore.cloesModal">CLOSE</button>
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
const store = useStore()
const props = defineProps<{
    task: Task,
    modalName: string
}>()
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