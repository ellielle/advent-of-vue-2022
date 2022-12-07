<script setup lang="ts">
const { size = 1 } = defineProps<{ size: number }>();
</script>

<template>
  <div>
    <ChristmasTree :size="size - 1" v-if="size > 1"/>
    <div class="flex flex-row justify-center">
        <div class="relative rounded-full bg-green w-16 h-16 flex -m-2 justify-center items-center" v-for="n in size" />
    </div>
  </div>
</template>