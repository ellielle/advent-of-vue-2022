<template>
  <div>
    <ChristmasTree v-if="size > 1" :size="size - 1" >
      <template #lights>
        <!-- Put two lights on each section of the tree -->
        <ChristmasLights v-for="i in 2" />
      </template>
    </ChristmasTree>
    <div class="flex flex-row justify-center">
      <!-- Create the tree sections -->
      <div v-for="i in size" class="relative rounded-full bg-green w-16 h-16  flex justify-center items-center">
        <slot name="lights"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChristmasLights from './ChristmasLights.vue';
withDefaults(
  defineProps<{
    size: number
  }>(),
  {
    size: 1,
  }
)
</script>