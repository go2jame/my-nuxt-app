import { useAuthStore } from "@/stores/auth"

export default defineNuxtRouteMiddleware((to,from) =>{
    const authStore = useAuthStore()

    if(!authStore.isAdmin){
        return navigateTo('/unauthorized') // นำไปสู่หน้าแจ้งเตือนถ้าไม่ใช่ admin
    }
})

  