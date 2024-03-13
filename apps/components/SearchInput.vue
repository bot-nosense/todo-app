<template>
    <div class="input-group">
        <input type="text" class="form-control" placeholder="Searching ..." v-model="store.todoStore.toDoSearch">
    </div>
</template>

<script setup lang="ts">
import { useStore } from '~/stores'
const store = useStore()
const props = defineProps<{
    componentName: string
}>()
const searchValue = ref('');
const name = ref<string>(props.componentName)

// watch(searchValue, (name) => {
//     if (name === 'todo') { store.todoStore.toDoSearch searchValue.value }
//     else if (name === 'done') { }
// })

</script>
