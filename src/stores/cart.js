import { defineStore } from "pinia"
import { ref } from "vue"

export const useCartStore = defineStore("cart", () => {
  const count = ref(0)

  function addToCart(quantity) {
    count.value += quantity
  }

  return { count, addToCart }
})
