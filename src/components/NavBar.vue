<script setup>
  import { ref } from "vue"
  import { RouterLink } from "vue-router"
  import { useCartStore } from "@/stores/cart"
  import logo from "@/assets/logo.svg"
  import avatar from "@/assets/image-avatar.png"
  import cart from "@/assets/icon-cart.svg"
  import menu from "@/assets/icon-menu.svg"

  import MobileMenu from "@/components/MobileMenu.vue"
  import Dropdown from "@/components/DropDownMenu.vue"

  const cartStore = useCartStore()

  const isDropdownOpen = ref(false)
  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value
  }

  const isMobileMenuOpen = ref(false)
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white">
    <div class="px-38">
      <div class="flex items-center justify-between border-b-3 border-gray-100">
        <div class="flex items-center gap-12">

          <button class="md:hidden" @click="isMobileMenuOpen = true">
            <img :src="menu" alt="Menu" />
          </button>

          <img :src="logo" alt="Logo" class="h-5 w-36" />

          <nav class="hidden md:flex gap-8">
            <RouterLink to="/"
              class="py-12 border-b-4"
              :class="$route.path === '/' ? 'border-orange-500' : 'border-transparent'"
            >
              Collections
            </RouterLink>

            <RouterLink to="/men"
              class="py-12 border-b-4"
              :class="$route.path === '/men' ? 'border-orange-500' : 'border-transparent'"
            >
              Men
            </RouterLink>

            <RouterLink to="/women"
              class="py-12 border-b-4"
              :class="$route.path === '/women' ? 'border-orange-500' : 'border-transparent'"
            >
              Women
            </RouterLink>

            <RouterLink to="/about"
              class="py-12 border-b-4"
              :class="$route.path === '/about' ? 'border-orange-500' : 'border-transparent'"
            >
              About
            </RouterLink>

            <RouterLink to="/contact"
              class="py-12 border-b-4"
              :class="$route.path === '/contact' ? 'border-orange-500' : 'border-transparent'"
            >
              Contact
            </RouterLink>
          </nav>
        </div>

        <div class="flex items-center gap-8 cursor-pointer relative">
          <div class="relative" @click="toggleDropdown">
            <img :src="cart" alt="Cart" class="h-5 w-5" />
            <span v-if="cartStore.count > 0" class="badge">
              {{ cartStore.count }}
            </span>
          </div>

          <Dropdown v-if="isDropdownOpen" @close="isDropdownOpen = false" />

          <img :src="avatar" alt="Avatar" class="h-12 w-12 rounded-full avatar" />
        </div>
      </div>
    </div>

    <MobileMenu :isOpen="isMobileMenuOpen" @close="isMobileMenuOpen = false" />
  </header>
</template>
