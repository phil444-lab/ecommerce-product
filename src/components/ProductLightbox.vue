<script setup>
  import { ref, watch } from "vue"

  import closeIcon1 from "@/assets/icon-close-white.svg"
  import closeIcon2 from "@/assets/icon-close-orange.svg"

  import nextIcon from "@/assets/icon-next.svg"
  import nextIconOrange from "@/assets/icon-next-orange.svg"

  import previousIcon from "@/assets/icon-previous.svg"
  import previousIconOrange from "@/assets/icon-previous-orange.svg"

  const props = defineProps({
    images: {
      type: Array,
      required: true
    },
    modelValue: {
      type: Boolean,
      required: true
    },
    startIndex: {
      type: Number,
      default: 0
    }
  })

  const emit = defineEmits(["update:modelValue"])

  const currentIndex = ref(props.startIndex)

  watch(
    () => props.startIndex,
    (val) => {
      currentIndex.value = val
    }
  )

  const close = () => {
    emit("update:modelValue", false)
  }
  const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
  }
  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length
  }

  const isHoveredClose = ref(false)
  const isHoveredNext = ref(false)
  const isHoveredPrevious = ref(false)
</script>

<template>
  <div v-if="modelValue" class="fixed inset-0 bg-black/70 flex items-center justify-center z-50" @click.self="close" >
    <div class="relative">
      <button class="absolute cursor-pointer -top-8 right-2 text-white text-3xl font-bold"
        @click="close"
        @mouseenter="isHoveredClose = true"
        @mouseleave="isHoveredClose = false"
      >
        <img :src="isHoveredClose ? closeIcon2 : closeIcon1" alt="Close" />
      </button>

      <div class="relative flex items-center justify-center">
        <img :src="images[currentIndex]" alt="Image Lightbox" class="h-[400px] w-[400px] rounded-xl" />

        <button class="absolute -left-5 top-1/2 -translate-y-1/2 cursor-pointer flex items-center justify-center p-4 rounded-full w-10 h-10 bg-white"
          @click="prev"
          @mouseenter="isHoveredPrevious = true"
          @mouseleave="isHoveredPrevious = false"
        >
          <img :src="isHoveredPrevious ? previousIconOrange : previousIcon" alt="Previous" />
        </button>

        <button class="absolute -right-5 top-1/2 -translate-y-1/2 cursor-pointer flex items-center justify-center p-4 rounded-full w-10 h-10 bg-white"
          @click="next"
          @mouseenter="isHoveredNext = true"
          @mouseleave="isHoveredNext = false"
        >
          <img :src="isHoveredNext ? nextIconOrange : nextIcon" alt="Next" />
        </button>
      </div>

      <div class="flex gap-4 mt-6 justify-center">
        <div v-for="(image, index) in images" :key="index"
          class="relative cursor-pointer border-2 rounded-lg overflow-hidden group"
          :class="index === currentIndex ? 'border-orange-500' : 'border-transparent'"
          @click="currentIndex = index"
        >
          <img :src="image" alt="Miniature" class="h-18 w-18 rounded" />

          <div v-if="index === currentIndex" class="absolute inset-0 bg-white/60"></div>
          <div v-else class="absolute inset-0 bg-white/0 group-hover:bg-white/60 transition"></div>
        </div>
      </div>
    </div>
  </div>
</template>
