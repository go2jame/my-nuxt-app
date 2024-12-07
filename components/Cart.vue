<template>
  <div>
    <div class="cart">
      <h2>Your Cart</h2>
      <div v-if="cartCount==0">No item in cart.</div>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.title }} - ${{ item.price }} x {{ item.quantity }}
          <button @click="increaseQuantity(item)">+</button>
          <button @click="decreaseQuantity(item.id)">-</button>
          <button @click="removeFromCart(item.id)">Remove</button>
        </li>
      </ul>
      <p>Total items in cart: {{ cartCount }}</p>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const { addToCart, removeFromCart, decreaseQuantity } = cartStore

const cartCount = computed(() => cartStore.cartCount)
const items = computed(() => cartStore.items)

const increaseQuantity = (item) => {
  console.log('Increasing quantity for:', item)
  addToCart(item)
}
</script>
<style>
  .cart {
    border: 1px solid #ccc;
    background-color: lightgreen;
    padding:20px;
  }
</style>