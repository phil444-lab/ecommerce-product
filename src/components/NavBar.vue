<script setup>
  import { RouterLink } from "vue-router"
  import logo from "@/assets/logo.svg"
  import avatar from "@/assets/image-avatar.png"
  import cart from "@/assets/icon-cart.svg"
</script>

<template>
  <header>
    <div class="px-38">
      <div class="flex items-center justify-between border-b-3 border-gray-100">
        <div class="flex items-center gap-12">
          <img :src="logo" alt="Logo" class="h-5 w-36" />

          <nav class="flex gap-8">
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

        <div class="flex items-center gap-8 cursor-pointer">
          <div class="relative">
            <img :src="cart" alt="Cart" class="h-4 w-5" />
            <span class="badge">3</span>
          </div>

          <img :src="avatar" alt="Avatar" class="h-12 w-12 rounded-full avatar" />
        </div>
      </div>
    </div>
  </header>
</template>
