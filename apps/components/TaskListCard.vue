<template>
    <div>
        <p>{{ store.todoStore.toDoList }}</p>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '~/stores'
const store = useStore()

</script>

<style scoped></style>