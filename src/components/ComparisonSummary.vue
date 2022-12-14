<script setup lang="ts">
interface Props {
  message: string;
}

defineProps<Props>();
</script>

<template>
  <p class="mx-5 text-center">{{ message }}</p>
</template>
