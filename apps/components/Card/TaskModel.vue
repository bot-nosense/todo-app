<!-- TaskModel.vue

<template>
    <div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">User ID</span>
            </div>
            <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"
                :readonly="readOnlyStatus" v-model="cloneUserID" @input="onchange">
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Title</span>
            </div>
            <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"
                v-model="cloneTitle" :readonly="readOnlyStatus" @input="onchange">
        </div>

    </div>
</template>


<script setup lang="ts">
import { useToDoStore } from '~/stores/toDo'
import type { Task } from '~/stores/toDo'
const store = useToDoStore()
const props = defineProps<{ detailTask: Task, readOnlyStatus: boolean }>()
const cloneUserID = ref<number>(props.detailTask.userID)
const cloneTitle = ref<string>(props.detailTask.title)
const emit = defineEmits()
const onchange = () => emit('updateModel', cloneUserID, cloneTitle)
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
</style> -->