// ~/store/user.ts

import { defineStore } from 'pinia'

interface Task {
    id: number
    title: string
    completed: boolean
}

export const useToDoStore = defineStore({
    id: 'todoStore'
})
