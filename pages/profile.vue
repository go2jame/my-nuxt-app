<!-- pages/profile.vue -->
<template>
    <div>
      <h1>User Profile</h1>
      <p>Welcome, {{ user.username }}!</p>
      <div>Role : {{ authStore.role }}</div>
      <div>Role isAdmin : {{ authStore.isAdmin }}</div>
      <button @click="logout">Logout</button>
    </div>
  </template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

definePageMeta({
  middleware: 'auth'
})

const authStore = useAuthStore()
const user = authStore.user 
const router = useRouter()

const logout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

