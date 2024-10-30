// stores/auth.js

import { defineStore } from "pinia"
import { ref } from "vue"

export const useAuthenStore = defineStore('Auth', () => {
    const user = ref(null)
    const isAuthenticated = ref(false)

    function login(username, password) {
        if (username === 'user' && password === 'password') {
            user.value = { username }
            isAuthenticated.value = true
            return true
        }
        return false
    }

    function logout() {
        user.value = null
        isAuthenticated = false
    }

    return (user, isAuthenticated, login, logout)
})
