<!-- <template>
    <div class="d-flex justify-content-end">
        <NuxtLink to="" class="" data-bs-toggle="modal" data-bs-target="#addTaskModal" @click="openCreateTaskModal">ADD
            TASK
        </NuxtLink>
        <div class="modal fade show" :style="{ 'display': isCreateTaskModalOpen ? 'block' : 'none' }" id="addTaskModal"
            tabindex="-1" a ria-labelledby="exampleModalLabel" aria-hidden="true" v-if="isCreateTaskModalOpen">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">CREATE NEW
                            TASK</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            @click="closeCreateTaskModal"></button>
                    </div>
                    <div class="modal-body">
                        <CardTaskModel :detailTask="{ id: 0, userID: 0, title: '', completed: false }"
                            :readOnlyStatus="false" @updateModel="addTask" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-success"
                            @click="store.createNewTaskEvent(newTask, userIDModify, titleIDModify)">CREATE</button>
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal"
                            @click="closeCreateTaskModal">CLOSE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useToDoStore } from '~/stores/toDo'
const store = useToDoStore()
const isCreateTaskModalOpen = ref<boolean>(false)
const userIDModify = ref<number>(0)
const titleIDModify = ref<string>('')
const newTask = reactive({ id: 0, userID: 0, title: '', completed: false })

const addTask = (_userID: number, _title: string) => {
    userIDModify.value = _userID
    titleIDModify.value = _title
}

const openCreateTaskModal = () => {
    console.log('open create task modal')
    isCreateTaskModalOpen.value = true
}

const closeCreateTaskModal = () => { isCreateTaskModalOpen.value = false }
</script> -->
