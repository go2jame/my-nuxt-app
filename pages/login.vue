<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
            <div>
                <label>Username:</label>
                <input v-model="username" type="text" required />
            </div>
            <div>
                <label>Password:</label>
                <input v-model="password" type="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
        <p v-if="loginError" style="color: red;">Incorrect username or password</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthenStore } from '@/stores/auth.js'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const loginError = ref(false)
const authStore = useAuthStore()
const router = useRouter()

const handleLogin = () => {
    if (authStore.login(username.value, password.value)) {
        loginError.value = false
        router.push('/')
    } else {
        loginError.value = true
    }
}


</script>

<style lang="scss" scoped></style>