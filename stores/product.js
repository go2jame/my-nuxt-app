import axios from 'axios'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    count: 0,
    loading: false,
    error: null
  }),
  actions: {
    setProducts(products) {
      this.products = products
    },
    incrementCount() {
      this.count++
    },
    decrementCount() {
      this.count--
    },
    async fetchProducts(){
        this.loading = true
        this.error = null
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            this.products = response.data
        } catch (err) {
            this.error = 'Failed to fetch products'
            console.error(err)
        }finally{
            this.loading = false
        }
    },
    async fetchSingleProduct(id){
      this.loading = true
      this.error = null
      try {
        console.log('https://fakestoreapi.com/products/'+id)
          const response = await axios.get('https://fakestoreapi.com/products/'+id)
          this.products = response.data
      } catch (err) {
          this.error = 'Failed to fetch products'
          console.error(err)
      }finally{
          this.loading = false
      }
  },
  }
})
