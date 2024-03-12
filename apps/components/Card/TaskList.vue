TaskList.vue

<template>
    <div class="card text-center vh-100 d-flex flex-column justify-content-center">

        <div class="card-body d-flex justify-content-between">

            <!-- To Do List -->
            <!-- <div class="card mx-auto" style="width: 45%;" @dragover="store.handleDragOver($event, 'toDoList')">

                <div class="card-header d-flex justify-content-between align-items-center">
                    <span class="text-start">TO DO LIST</span>
                    <CardNewTask />
                </div>

                <div class="card-body">

                    <InputSearchInput :value="store.toDoTaskSearch"
                        :onUpdateSearchValue="store.handleUpdateToDoTaskSearch" />

                    <div style="height: calc(100vh - 140px); overflow-y: auto;">
                        <ul class="list">
                            <li v-for="task in store.filteredToDoList" :key="task.id">
                                <ButtonToDoTask :todoTask="task" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div> -->

            <!-- Done List -->
            <!-- <div class="card mx-auto" style="width: 45%;" @dragover="store.handleDragOver($event, 'doneList')">

                <div class="card-header d-flex justify-content-between align-items-center">
                    <span class="text-start">DONE LIST</span>
                </div>

                <div class="card-body">
                    <InputSearchInput :value="store.doneTaskSearch"
                        :onUpdateSearchValue="store.handleUpdateDoneTaskSearch" />
                    <div style="height: calc(100vh - 140px); overflow-y: auto;">
                        <ul class="list">
                            <li v-for="task in store.filteredDoneList" :key="task.id">
                                <ButtonDoneTask :doneTask="task" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>


<script setup lang="ts">
// import { useToDoStore } from '~/stores/toDo'
// const store = useToDoStore()
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
</style>
