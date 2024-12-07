<template>
    <div>
        <div v-if="productStore.loading">Loading...</div>
        <cart />
        <div v-if="productStore.error"> {{ productStore.error }} </div>
        <div v-if="!productStore.loading && !productStore.error">
            <h1>{{ product.title }} <span v-if="item.quantity" class="badge">{{ item.quantity }}</span></h1>
            <img :src="product.image" width="100" height="100">
            <p>Price: ${{ product.price }}</p>
            <p>Description: {{ product.description }}</p>
            <button @click="cartStore.addToCart(product)">Add to Cart</button>
            <router-link to="/products">Back to Products</router-link>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import { useProductStore } from '@/stores/product'
import { useRoute } from 'vue-router'


const cartStore = useCartStore()
const productStore = useProductStore()
const route = useRoute()
const product = ref({})

// const items = computed(() => cartStore.items)

const productId = route.params.id
const item = computed(()=>cartStore.cartProducts.find((item) => item.id == productId) || 0)


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

<style>
.badge{
    color:rgb(255, 255, 255);
    background-color: rgb(255, 0, 0);
    padding:5px 15px;
    border-radius: 10px;
    border:1px solid rgb(0, 0, 0);
    font-size: 80%;
}
</style>