import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [], // ตะกร้าสินค้าเริ่มต้นเป็นอาเรย์ว่าง
    }),
    actions: {
        addToCart(product) {
            const existingItem = this.items.find((item) => item.id === product.id)
            if (existingItem) {
                existingItem.quantity += 1
                console.log('Updated quantity:', existingItem.quantity)

            } else {
                this.items.push({ ...product, quantity: 1 })
                console.log('Added new item to cart:', this.items)

            }
        },
        decreaseQuantity(productId) {
            const itemIndex = this.items.findIndex((item) => item.id === productId)
            if (itemIndex !== -1) {
                this.items[itemIndex].quantity -= 1
                if (this.items[itemIndex].quantity === 0) {
                    this.items.splice(itemIndex, 1)
                }
            }
        },
        // เพิ่มฟังก์ชันลบสินค้าออกจาก Cart
        removeFromCart(productId) {
            console.log('Removing from cart:', productId)

            this.items = this.items.filter(item => item.id !== productId)
            // const itemIndex = this.items.findIndex((item) => item.id === productId)
            // this.items.splice(itemIndex, 1)
            console.log('Updated cart items:', this.items)

        },
    
    },

    getters: {
        cartCount: (state) => state.items.reduce((acc, item) => acc + item.quantity, 0),
        cartProducts: (state) => state.items
    }

})