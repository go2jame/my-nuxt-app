// stores/auth.js

import axios from "axios"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useAuthStore = defineStore('auth', {

  state: () => ({
    user: null,
    // isAuthenticated: false,
    isLoading: false,
    // token: import.meta.client ? localStorage.getItem('token') : null,
    token: null,
    responseStatus: '',
    role: 'guest'
  }),
  actions: {
    async login(username, password) {

      const config = useRuntimeConfig()
      this.isLoading = true

      try {
        const response = await axios.post(config.public.authApiBase + '/auth/login', {
          username: username,
          password: password
        })
        
        this.responseStatus = response.status
        this.token = response.data.token
        localStorage.setItem('token', response.data.token)
      } finally {
        this.isLoading = false
      }
      // console.log(this.responseStatus)
      if (this.responseStatus === 200) {
        this.user = { username }
        // console.log(this.user)
        if (this.user.username === 'johnd') {
          this.role = 'admin'
        } else {
          this.role = 'user'
        }
        // this.isAuthenticated = true
        return true
      }
      return false
    },
    logout() {
      this.user = null
      this.token = null
      this.role = 'guest'
      localStorage.removeItem('token') // ลบ token เมื่อผู้ใช้ logout
      // this.isAuthenticated = false
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.role === 'admin',
  }
})



// export const useAuthStore = defineStore('auth', () => {
//   const user = ref(null)
//   const isAuthenticated = ref(false)
//   let responseStatus = ref(null)
//   const config = useRuntimeConfig()
//   const isLoading = ref(false)
//   const token = ref('')

//   async function login(username, password) {
//     // จำลองการล็อกอิน
//     isLoading.value = true
//     try {
//       const response = await axios.post(config.public.authApiBase + '/auth/login', {
//         username: username,
//         password: password
//       })
//       responseStatus = response.status
//       // console.log(response.data.token)

//       token.value = response.data.token
//       localStorage.setItem('token', response.data.token)
//     } finally {
//       isLoading.value = false
//     }

//     // if (username === 'user' && password === 'password') {
//     if (responseStatus === 200) {
//       user.value = { username }
//       isAuthenticated.value = true
//       return true
//     }
//     return false
//   }

//   function logout() {
//     user.value = null
//     this.token = null
//     localStorage.removeItem('token') // ลบ token เมื่อผู้ใช้ logout
//     isAuthenticated.value = false
//   }

//   return { user, isAuthenticated, login, logout, isLoading, token }
// })
