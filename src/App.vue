<script setup>
import { ref } from "vue";

const toField = ref("");
const fromField = ref("");
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <div>
      <div class="w-full max-w-2xl p-4 rounded bg-red-400 text-white">
        <div class="border-2 rounded flex flex-col md:flex-row md:items-center md:gap-8 p-4">
          <img src="/assets/santa.svg" alt="" class="max-w-[12em]" />
          <div>
            <h1 class="font-serif text-4xl">Happy Holidays!</h1>
            <div class="mt-4 bg-white text-black p-2 rounded">
              TO: {{ toField }}
            </div>
            <div class="mt-2 bg-white text-black p-2 rounded">
              FROM: {{ fromField }}
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <label for="input-to" class="mr-3">To:</label>
        <input type="text"
          name="input-to"
          id="input-to"
          class="bg-gray-100 border-2 border-gray-200 rounded"
          v-model="toField">
      </div>
      <div class="mt-4">
        <label for="input-from" class="mr-3">From:</label>
        <input type="text"
          name="input-from"
          id="input-from"
          class="bg-gray-100 border-2 border-gray-200 rounded focus:ring-0"
          v-model="fromField">
      </div>
    </div>
  </div>
</template>
