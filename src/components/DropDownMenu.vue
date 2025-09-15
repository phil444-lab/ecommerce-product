<script setup>
  import { useCartStore } from "@/stores/cart"
  import trash from "@/assets/icon-delete.svg"

  const cartStore = useCartStore()
</script>

<template>
  <div class="absolute right-0 top-12 w-80 bg-white shadow-2xl rounded-xl p-6 z-50">
    <p class="font-bold mb-4">Cart</p>
    <div class="border-b-2 border-gray-200 -mx-6 mb-4"></div>

    <div v-if="cartStore.count === 0" class="text-center py-12 text-gray-500 font-bold">
      Your cart is empty.
    </div>

    <div v-else>
      <div class="flex items-center justify-between gap-4 py-4">
        <img
          src="@/assets/image-product-1-thumbnail.jpg"
          alt="Product"
          class="h-12 w-12 rounded-md"
        />

        <div class="text-sm text-gray-600">
          <p>Fall Limited Edition Sneakers</p>
          <p>
            $125.00 × {{ cartStore.count }}
            <span class="font-bold text-black ml-2">
              ${{ (125 * cartStore.count).toFixed(2) }}
            </span>
          </p>
        </div>

        <button class="text-gray-400 hover:text-black">
          <img :src="trash" alt="Trash" />
        </button>
      </div>

      <button class="dropdown-btn w-full py-3 rounded-lg font-bold">
        Checkout
      </button>
    </div>
  </div>
</template>
