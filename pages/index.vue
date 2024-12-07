<template>
  <div>
    <h1>Welcome to My First Nuxt.js App!</h1>
    <p>This is your first page built with Nuxt.js.</p>
    <button @click="toggleDark()">theme</button>
    <ProductList />
  </div>
</template>

<script setup>

// This is the place to add your logic, if needed.
import ProductList from '@/components/ProductList.vue'

import { useDark, useToggle, useStorage } from '@vueuse/core'

const isDark = useDark({
  storageKey: 'theme',
  emit: true
})
const toggleDark = useToggle(isDark)

// const theme = useStorage('theme', 'light')

// function toggleTheme() {
//   theme.value = theme.value === 'light' ? 'dark' : 'light'
//   console.log(theme.value)
// }

// definePageMeta({
//     middleware: 'auth'
// })
</script>

<style scoped>
h1 {
  color: #42b983;
  text-align: center;
}

p {
  text-align: center;
}
</style>
