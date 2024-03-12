<!-- <template>
    <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-outline-dark w-100 text-start task-title" draggable="true"
            data-bs-toggle="modal" :data-bs-target="'#' + todoTask.id"
            @dragstart="store.handleDragStart($event, todoTask)" @click="openToDoTaskModal"> {{ todoTask.title }}
        </button>

        <Teleport to="body">
            <div class="modal fade show" data-bs-backdrop="static"
                :style="{ 'display': isToDoTaskModalOpen ? 'block' : 'none' }" :id="todoTask.id + ''" tabindex="-1"
                aria-labelledby="taskDetailModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="taskDetailModalLabel">TASK DETAILS</h5>
                        </div>
                        <div class="modal-body">
                            <CardTaskModel :detailTask="todoTask" :readOnlyStatus="status" @updateModel="updateTask" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-primary"
                                @click="store.updateTaskEvent(todoTask, userIDModify, titleIDModify)">UPDATE</button>
                            <button type="button" class="btn btn-outline-primary"
                                @click="store.doneTaskEvent(todoTask, userIDModify, titleIDModify)">DONE</button>
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal"
                                @click="closeToDoTaskModal">CLOSE</button>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
import { useToDoStore } from '~/stores/toDo'
import type { Task } from '~/stores/toDo'
const store = useToDoStore()
const status = ref<boolean>(false)
const props = defineProps<{ todoTask: Task }>()
const isToDoTaskModalOpen = ref<boolean>(false)
const userIDModify = ref<number>(props.todoTask.userID)
const titleIDModify = ref<string>(props.todoTask.title)

const openToDoTaskModal = () => {
    console.log(props.todoTask.id, props.todoTask.userID, props.todoTask.title, props.todoTask.completed)
    isToDoTaskModalOpen.value = true
}

const closeToDoTaskModal = () => { isToDoTaskModalOpen.value = false }

const updateTask = (_userID: number, _title: string) => {
    userIDModify.value = _userID
    titleIDModify.value = _title
}
</script>

<style></style> -->
