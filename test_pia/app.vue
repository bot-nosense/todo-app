<template>
  <div>
    <input v-model="username" placeholder="Enter username" />
    <button @click="setUsername">Set Username</button>
    <p>{{ username }}</p>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user';

const store = useUserStore();
const username = store.getUsername();
console.log('username', username)

const setUsername = () => {
  store.setUsername(username)
  console.log('setUsername', store.getUsername())
}
</script>
