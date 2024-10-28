<template>
    <div>
        <h1>Product List</h1>
        <!-- <router-link to="/cart">View Cart</router-link> -->
         <cart />
        <div v-if="productStore.loading">Loading...</div>
        <div v-if="productStore.error"> {{ productStore.error }} </div>

        <ul v-if="!productStore.loading && !productStore.error">
            <li v-for="(product, index) in productStore.products" :key="index">
                <!-- {{ product.title }} - ${{ product.price }} -->
                <img :src="product.image" width="50" height="50">
                <router-link :to="`/products/${product.id}`">{{ product.title }}</router-link> - ${{ product.price }}
                <button @click="addToCart(product)">Add to Cart</button>
            </li>
        </ul>
        <p>Total items in cart: {{ cartCount }}</p>


        <p>Count: {{ productStore.count }}</p>
        <button @click="productStore.incrementCount">Increment</button>
        <button @click="productStore.decrementCount">Decrement</button>
    </div>
</template>

<script setup>
import axios from 'axios';
import { useProductStore } from '@/stores/product';
import { useCartStore } from '@/stores/cart'


// import ref from 'vue'

const products = ref([])
const productStore = useProductStore()
const cartStore = useCartStore()

// สร้างฟังก์ชันเพิ่มสินค้าไปยัง Cart
const addToCart = (product) => {
  cartStore.addToCart(product)
}
const cartCount = computed(() =>cartStore.cartCount)


onMounted(async () => {
    // const response = await axios.get('https://fakestoreapi.com/products')
    // products.value = response.data
    // productStore.setProducts(response.data)
    productStore.fetchProducts()

})

//   const products = [
//     { name: 'Product 1', price: 10 },
//     { name: 'Product 2', price: 20 },
//     { name: 'Product 3', price: 30 }
//   ]



</script>

<style scoped>
h1 {
    color: #42b983;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}
</style>