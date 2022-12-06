<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { JokeAPIRequest, JOKE_DEFAULTS } from "../types/common";
import Spinner from "./components/Spinner.vue";

const joke = ref<JokeAPIRequest>(JOKE_DEFAULTS);
const jokeStatus = reactive({ isLoaded: false, showDelivery: false });

const toggleJokeStatus = (isLoaded: boolean = false,
  showDelivery: boolean = false) => {
  jokeStatus.isLoaded = isLoaded;
  jokeStatus.showDelivery = showDelivery;
};

const getJoke = async () => {
  toggleJokeStatus();
  const response = await fetch("https://v2.jokeapi.dev/joke/christmas");
  if (!response.ok) {
    return;
  }
  joke.value = await response.json();
  toggleJokeStatus(true, jokeStatus.showDelivery);
};

const showDelivery = () => {
  jokeStatus.showDelivery = true;
};

onMounted(() => {
  getJoke();
});
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <div class="text-3xl">{{ joke.setup }}</div>

    <div class="text-2xl mt-12" v-if="jokeStatus.showDelivery">
      {{ joke.delivery }}
    </div>

    <Spinner class="mt-12" v-if="!jokeStatus.isLoaded" />

    <button class="mt-12 text-xl bg-gray-dark text-white p-3 rounded-full"
      v-if="jokeStatus.isLoaded && !jokeStatus.showDelivery"
      @click="showDelivery">Tell Me!
    </button>

    <button class="mt-12 text-xl bg-gray-dark text-white p-3 rounded-full"
      v-if="jokeStatus.isLoaded && jokeStatus.showDelivery"
      @click="getJoke">Another
    </button>
  </div>
</template>