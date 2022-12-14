<script setup lang="ts">
import ItemSelect from "./components/ItemSelect.vue";
import ComparisonSummary from "./components/ComparisonSummary.vue";
import { useItemComparison } from "./composables/useItemComparison";

const {
  firstProduct,
  secondProduct,
  productList,
  comparison
} = useItemComparison();
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center bg-gray-dark text-green">
    <h1 class="text-4xl font-bold">Select items to compare</h1>
    <div class="flex flex-col gap-5 justify-center">
      <ItemSelect v-model="firstProduct" :products="productList" />
      <ItemSelect v-model="secondProduct" :products="productList" />
    </div>
    <ComparisonSummary :message="comparison.message"
        v-if="comparison.message" />
  </div>
</template>
