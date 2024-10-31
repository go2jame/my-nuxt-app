import { useAuthStore } from "@/stores/auth"

export default defineNuxtRouteMiddleware((to, from) => {
        const authStore = useAuthStore()
        if(!authStore.isAuthenticated && to.name !== 'login'){
            return navigateTo('/login')
        }
})