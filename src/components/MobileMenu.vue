<script setup>
import { RouterLink } from "vue-router"

defineProps({
  isOpen: Boolean
})

const emit = defineEmits(["close"])
</script>

<template>
  <transition name="slide">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 z-40 md:hidden"
      @click.self="emit('close')"
    >
      <div class="bg-white w-64 h-full p-6 shadow-xl">
        <button class="mb-6 text-lg font-bold" @click="emit('close')">✕ Close</button>
        <nav class="flex flex-col gap-6 mt-6 text-lg font-bold">
          <RouterLink to="/" @click="emit('close')">Collections</RouterLink>
          <RouterLink to="/men" @click="emit('close')">Men</RouterLink>
          <RouterLink to="/women" @click="emit('close')">Women</RouterLink>
          <RouterLink to="/about" @click="emit('close')">About</RouterLink>
          <RouterLink to="/contact" @click="emit('close')">Contact</RouterLink>
        </nav>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
