<script setup>
  import { ref } from "vue"
  import img1 from "@/assets/image-product-1.jpg"
  import img2 from "@/assets/image-product-2.jpg"
  import img3 from "@/assets/image-product-3.jpg"
  import img4 from "@/assets/image-product-4.jpg"

  import cartBlack from "@/assets/icon-cart-black.svg"
  import plus from "@/assets/icon-plus.svg"
  import minus from "@/assets/icon-minus.svg"

  const images = [img1, img2, img3, img4]
  const selectedImage = ref(images[0])
  const selectImage = (image) => {
    selectedImage.value = image
  }

  const quantity = ref(0)
  const increment = () => {
    quantity.value++
  }
  const decrement = () => {
    if (quantity.value > 0) quantity.value--
  }

</script>

<template>
  <div class="flex justify-center items-start gap-30 p-20">
    <div class="flex flex-col items-center">
      <div class="mb-6">
        <img :src="selectedImage" alt="Image principale" class="h-98 w-auto rounded-xl shadow-lg object-cover" />
      </div>

      <div class="flex gap-6">
        <div
          v-for="(image, index) in images" :key="index" class="relative border-2 rounded-lg"
          :class="selectedImage === image ? 'border-orange-500' : 'border-transparent'"
          @click="selectImage(image)"
        >
          <img :src="image" alt="Miniature" class="h-20 w-20 rounded"
            :class="selectedImage === image ? 'opacity-30' : 'opacity-100'"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-start max-w-sm py-14">
      <p class="text-xs font-bold mb-4 product-brand">SNEAKER COMPANY</p>
      <p class="text-4xl font-bold mb-10">Fall Limited Edition Sneakers</p>

      <p class="text-gray-700 text-sm mb-6 description">
        These low-profile sneakers are your perfect casual wear companion. Featured a durable rubber outer sole,
        they'll withstand everything the weather can offer.
      </p>

      <div class="flex items-center gap-6 mb-2">
        <p class="text-3xl font-semibold">$125.00</p>
        <span class="text-sm font-bold bg-black text-white px-2 py-1 rounded">
          50%
        </span>
      </div>

      <p class="text-sm font-semibold line-through mb-6 promo">$250.00</p>

      <div class="flex items-center gap-4">
        <div class="flex items-center gap-6 rounded-lg px-2 py-2 quantity">
          <button class="px-3 py-2 rounded hover:bg-gray-200 transition" @click="decrement">
            <img :src="minus" alt="Minus" />
          </button>

          <span class="text-md font-semibold">{{ quantity }}</span>

          <button class="px-3 py-2 rounded hover:bg-gray-200 transition" @click="increment">
            <img :src="plus" alt="Plus" />
          </button>
        </div>

        <button class="cart text-sm">
          <img :src="cartBlack" alt="Cart" class="cart-icon" />
          Add to cart
        </button>
      </div>
    </div>
  </div>

</template>
