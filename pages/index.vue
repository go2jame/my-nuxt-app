<template>
  <div>
    <h1>Welcome to My First Nuxt.js App!</h1>
    <p>This is your first page built with Nuxt.js.</p>
    <ProductList />
  </div>
</template>

<script setup>
// This is the place to add your logic, if needed.

import ProductList from '@/components/ProductList.vue'

definePageMeta({
    middleware: 'auth'
})
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
