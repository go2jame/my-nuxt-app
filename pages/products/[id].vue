<template>
    <div>
        <div v-if="productStore.loading">Loading...</div>
        <div v-if="productStore.error"> {{ productStore.error }} </div>
        <div v-if="!productStore.loading && !productStore.error">
            <h1>{{ product.title }}</h1>
            <img :src="product.image" width="100" height="100">
            <p>Price: ${{ product.price }}</p>
            <p>Description: {{ product.description }}</p>
            <router-link to="/products">Back to Products</router-link>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import { useProductStore } from '@/stores/product'
import { useRoute } from 'vue-router'

const productStore = useProductStore()
const route = useRoute()
const product = ref({})

definePageMeta({
    middleware: 'auth'
})

onMounted(() => {
    const productId = route.params.id
    // productStore.fetchProducts().then(() => {
    //     product.value = productStore.products.find(p => p.id === Number(productId))
    // })
    productStore.fetchSingleProduct(productId).then(() => {
        product.value = productStore.products
    })

})

</script>
