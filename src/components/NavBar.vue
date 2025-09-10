<script setup>
  import { RouterLink } from "vue-router"
  import logo from "@/assets/logo.svg"
  import cartIcon from "@/assets/icon-cart.svg"
</script>

<template>
  <header>
    <div class="container mx-auto flex items-center justify-between px-26 py-6">

      <div class="flex items-center gap-16">
        <img :src="logo" alt="Logo" class="h-5 w-32" />

        <nav class="flex gap-10">
          <RouterLink to="/">Collections</RouterLink>
          <RouterLink to="/men">Hommes</RouterLink>
          <RouterLink to="/women">Femmes</RouterLink>
          <RouterLink to="/about">À propos</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>
      </div>

      <div class="flex items-center gap-8 relative cursor-pointer">
        <div class="relative">
          <img :src="cartIcon" alt="Cart" class="h-4 w-5" />
          <span class="badge">3</span>
        </div>

        <img
          src="@/assets/image-avatar.png"
          alt="Avatar"
          class="h-12 w-12 rounded-full avatar"
        />
      </div>
    </div>
  </header>
</template>
