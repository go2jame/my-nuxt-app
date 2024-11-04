<template>
    <div>
        <div>Full path {{ url }}</div>
        <h1>Product List</h1>
        <button @click="fetchProducts" :disabled="isLoading">
            {{ isLoading ? 'Loading...' : 'Click to load Products' }}
        </button>
        <ul v-if="products.length">
            <li v-for="product in products" :key="product.id">
                <RouterLink :to="`/products/${product.id}`">
                {{ product.title }} - ${{ product.price }}
            </RouterLink>
            </li>
        </ul>
        <p v-else>No products found</p>
    </div>
</template>

<script setup>
import { useProductStore } from '@/stores/product';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const productStore = useProductStore()
const products = computed(() => productStore.products)
const isLoading = computed(() => productStore.isLoading)

const fetchProducts = () => {
    productStore.fetchProducts()
}

const route = useRoute()
const url = route.fullPath
</script>
