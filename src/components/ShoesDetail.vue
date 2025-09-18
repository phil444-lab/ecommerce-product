<script setup>
  import { ref } from "vue"
  import { useCartStore } from "@/stores/cart"
  import img1 from "@/assets/image-product-1.jpg"
  import img2 from "@/assets/image-product-2.jpg"
  import img3 from "@/assets/image-product-3.jpg"
  import img4 from "@/assets/image-product-4.jpg"

  import cartBlack from "@/assets/icon-cart-black.svg"
  import plus from "@/assets/icon-plus.svg"
  import minus from "@/assets/icon-minus.svg"
  import nextIcon from "@/assets/icon-next.svg"
  import previousIcon from "@/assets/icon-previous.svg"

  import ProductLightbox from "@/components/ProductLightbox.vue"

  const cartStore = useCartStore()

  const images = [img1, img2, img3, img4]
  const selectedImage = ref(images[0])
  const currentIndex = ref(0)

  const selectImage = (image, index) => {
    selectedImage.value = image
    currentIndex.value = index
  }

  const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length
    selectedImage.value = images[currentIndex.value]
  }

  const previousImage = () => {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
    selectedImage.value = images[currentIndex.value]
  }

  const isLightboxOpen = ref(false)
  const openLightbox = () => {
    isLightboxOpen.value = true
  }

  const quantity = ref(0)
  const increment = () => {
    quantity.value++
  }
  const decrement = () => {
    if (quantity.value > 0) quantity.value--
  }

  const addToCart = () => {
    if (quantity.value > 0) {
      cartStore.addToCart(quantity.value)
      quantity.value = 0
    }
  }
</script>

<template>
  <div class="pt-16 md:pt-30">
    <div class="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-30 p-4 md:p-20">

      <div class="flex flex-col gap-10 items-center w-full md:w-auto">
        <div class="relative mb-2 cursor-pointer w-full flex justify-center" @click="openLightbox">
          <img :src="selectedImage" alt="Image principale" class="h-auto w-full max-w-md md:h-98 md:w-auto rounded-xl shadow-lg object-cover" />

          <div class="absolute inset-0 flex justify-between items-center px-4 md:hidden">
            <button class="cursor-pointer flex items-center justify-center p-4 rounded-full w-10 h-10 bg-white shadow-md" @click.stop="previousImage">
              <img :src="previousIcon" alt="Image précédente" />
            </button>

            <button class="cursor-pointer flex items-center justify-center p-4 rounded-full w-10 h-10 bg-white shadow-md" @click.stop="nextImage">
              <img :src="nextIcon" alt="Image suivante" />
            </button>
          </div>
        </div>

        <div class="hidden md:flex gap-6">
          <div v-for="(image, index) in images" :key="index" class="relative cursor-pointer border-2 rounded-lg overflow-hidden group"
            :class="selectedImage === image ? 'border-orange-500' : 'border-transparent'"
            @click="selectImage(image, index)"
          >
            <img :src="image" alt="Miniature" class="h-20 w-20 rounded" />
            <div v-if="index === currentIndex" class="absolute inset-0 bg-white/60"></div>
            <div v-else class="absolute inset-0 bg-white/0 group-hover:bg-white/60 transition"></div>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-start w-full md:max-w-sm py-6 md:py-14 px-4 md:px-0">
        <p class="text-xs font-bold mb-4 product-brand">SNEAKER COMPANY</p>
        <p class="text-3xl md:text-4xl font-bold mb-6 md:mb-10">Fall Limited Edition Sneakers</p>
        <p class="text-gray-700 text-sm mb-6 description">These low-profile sneakers are your perfect casual wear companion. Featured a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

        <div class="flex items-center justify-between md:justify-start md:gap-6 mb-2">
          <div class="flex items-center gap-4">
            <p class="text-3xl font-semibold">$125.00</p>
            <span class="text-sm font-bold bg-black text-white px-2 py-1 rounded">50%</span>
          </div>
          <p class="text-sm font-semibold line-through text-gray-500 md:ml-0 ml-auto">$250.00</p>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-4 mt-6">
          <div class="flex items-center justify-between w-full md:w-auto gap-6 rounded-lg px-4 py-3 quantity">
            <button class="px-3 py-2 rounded hover:bg-gray-200 transition" @click="decrement">
              <img :src="minus" alt="Minus" />
            </button>
            <span class="text-md font-semibold">{{ quantity }}</span>
            <button class="px-3 py-2 rounded hover:bg-gray-200 transition" @click="increment">
              <img :src="plus" alt="Plus" />
            </button>
          </div>
          <button class="cart text-sm w-full md:w-auto justify-center" @click="addToCart">
            <img :src="cartBlack" alt="Cart" class="cart-icon" />
            Add to cart
          </button>
        </div>
      </div>
    </div>

    <ProductLightbox v-model="isLightboxOpen" :images="images" :startIndex="currentIndex" />
  </div>
</template>
