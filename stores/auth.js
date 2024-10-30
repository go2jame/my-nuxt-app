// stores/auth.js

import { defineStore } from "pinia"
import { ref } from "vue"

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)
    const isAuthenticated = ref(false)

    function login(username, password) {
        // จำลองการล็อกอิน
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

    return { user, isAuthenticated, login, logout }
})
