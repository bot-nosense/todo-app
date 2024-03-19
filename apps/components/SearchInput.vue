<!-- apps\components\SearchInput.vue -->

<template>
    <div class="input-group">
        <input type="text" class="form-control" placeholder="Searching ..." v-model="searchModify">
    </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
import { useStore } from '~/stores'
const store = useStore()
const props = defineProps<{ componentName: string }>()
const searchModify = ref<string>("")
watch(searchModify, () => {
    if (props.componentName === 'todo') {
        store.todoStore.toDoSearch = searchModify.value
    }
    else {
        store.todoStore.doneSearch = searchModify.value
    }
})
</script>
