<!-- pages/login.vue -->
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
        <div v-if="authStore.isLoading">Please Wait...</div>
        <p v-if="loginError" style="color: red;">Incorrect username or password</p>
        <div>
            Admin <br>
            username:'johnd', password:'m38rmF$',
        </div>
    </div>
</template>

<script setup>``
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const username = ref('mor_2314')
const password = ref('83r5^_')
const loginError = ref(false)
const authStore = useAuthStore()
const router = useRouter()

const handleLogin = () => {
    loginError.value = false
    authStore.login(username.value, password.value)
        .then(
            () => {
                loginError.value = false
                // router.push('/products')
                return navigateTo('/profile')
            }
        )
        .catch(
            () => {
                loginError.value = true
                // console.log(error)
            }
        )
}
</script>
<style></style>