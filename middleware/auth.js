import { useAuthStore } from "@/stores/auth"

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()
    // if(!authStore.isAuthenticated && to.name !== 'login'){
    //  const token =   import.meta.client ? localStorage.getItem('token') : null
    //  console.log('XXXXX: '+token)
    //  console.log('YYY: '+ authStore.token)
    //  console.log('zzz: '+ authStore.getToken)
    // console.log(localStorage.getItem('token'))
 
    if(!authStore.token && to.name !== 'login'){
    // if (!authStore.getToken && to.name !== 'login') {
        return navigateTo('/login')
    }
 
})