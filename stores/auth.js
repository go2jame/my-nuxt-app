// stores/auth.js

import axios from "axios"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = ref(false)
  let responseStatus = ref(null)
  async function login(username, password) {
    // จำลองการล็อกอิน
  
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username: username,
        password: password
      })
      responseStatus = response.status


    console.log(responseStatus)

    // if (username === 'user' && password === 'password') {
    if (responseStatus === 200) {
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
