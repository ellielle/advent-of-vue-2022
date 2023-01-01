<script setup lang="ts">
import { computed, ref } from 'vue';
import presents from './presents.json'

interface Presents {
  id: number;
  src: string;
  dimensions: {
    height: number;
    width: number;
  }
}
const sortPresents = ref(false);
const originalPresents: Presents[] = Array.from([...presents])

const sortedPresents = computed(() => {
  return presents.sort((a, b) => computeArea(a) > computeArea(b) ? 1 : -1)
})

const computeArea = (present: Presents) => {
  return present.dimensions.height * present.dimensions.width;
}

const handleToggleSort = () => {
  sortPresents.value = !sortPresents.value;
}
</script>

<template>
  <div class="w-full h-full p-4 flex justify-center items-center">
    <div class="max-w-md">
      <div>
        <div class="flex mb-10 justify-center">
          <button @click="handleToggleSort" class="btn">Toggle sort</button>
        </div>
        </div>
        <div>
        <img src="/assets/tree.svg" alt="Christmas tree" />
      </div>
      <div class="mt-2 flex justify-center items-center">
        <img v-for="present in sortPresents ? sortedPresents : originalPresents" :key="present.id" :src="present.src"
          :alt="`Present ${present.id}`" data-qa="present" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  padding: 0.5em;
  background: linear-gradient(90deg, #f00 0%, #0f0 33%, #00f 66%, #f00 100%);
  /* TODO it had to have a background-size, read background rules on MDN */
  background-size: 400%;
  border: 1px solid black;
  border-radius: 5px;
  animation: swoosh 15s linear infinite;
  color: transparent;
  background-clip: text;
  width: fit-content;
}

@keyframes swoosh {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: -200% 0;
  }

  100% {
    background-position: -400% 0;
  }
}
</style>