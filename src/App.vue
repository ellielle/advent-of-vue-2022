<script setup lang="ts">
import { ref, watch } from "vue";
import { useDebounceFn } from "@vueuse/core";
import Spinner from "./components/Spinner.vue";

const searchTerm = ref("");
const loading = ref(false);
const products = ref<Product[]>([]);

interface Product {
  id: number;
  price: number;
  title: string;
}

const findProducts = async (searchTerm: string) => {
  const response = await fetch(`https://dummyjson.com/products/search?q=${ searchTerm }&limit=10`);
  if (!response.ok) {
    alert("Something done broke. You probably did it.")
    return [];
  }
  const data = await response.json();
  return data.products as Product[];
};

const handleProductSearch = async (searchTerm: string) => {
  loading.value = true;
  products.value = await findProducts(searchTerm);
  loading.value = false;
};

const debouncedSearch = useDebounceFn((searchTerm) => {
  if (searchTerm) {
    handleProductSearch(searchTerm);
    return;
  }
  products.value = [];
}, 300);

watch(searchTerm, debouncedSearch);
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Gift Search Bar</h1>
    <input type="text"
        class="p-2 border-2 border-gray-dark"
        v-model="searchTerm"
        placeholder="Start typing..." />
    <Spinner v-if="loading" />
    <ul class="list-disc" v-if="!loading && products.length > 0">
      <li v-for="product in products" :key="product.id">
        {{ product.title }}: ${{ product.price }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}
</style>