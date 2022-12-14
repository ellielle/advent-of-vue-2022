<script setup lang="ts">
import { ref } from "vue";
import type { Products } from "../composables/useFetchProducts";

defineProps<{ products: Products[] }>();

const selected = ref<HTMLSelectElement>();
</script>

<template>
  <select v-model="selected" class="p-2 border-2 border-gray-dark">
    <option disabled value="">Select an item</option>
    <option v-for="option in products" :value="option">
      {{ option.title }}
    </option>
  </select>
</template>
