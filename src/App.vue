<script setup lang="ts">
import CountdownHeader from "@/components/CountdownHeader.vue";
import { ref, Ref, watch } from "vue";
import CountdownSegment from "./components/CountdownSegment.vue";
import { useNow } from "@vueuse/core";

interface TimeRemaining {
  daysRemaining: number;
  hoursRemaining: number;
  minutesRemaining: number;
  secondsRemaining: number;
}

const timeRemaining = ref<TimeRemaining>({
  daysRemaining: 0,
  hoursRemaining: 0,
  minutesRemaining: 0,
  secondsRemaining: 0
});

const now = useNow();
const christmas = new Date("12/25/2022 00:00:00");

const getTimeToChristmas = () => {
  const timeLeft = christmas.getTime() - now.value.getTime();
  timeRemaining.value.daysRemaining =
    Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  timeRemaining.value.hoursRemaining =
    Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  timeRemaining.value.minutesRemaining =
    Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
  timeRemaining.value.secondsRemaining =
    Math.floor(timeLeft % (1000 * 60) / 1000);
};
watch(now, getTimeToChristmas);
</script>
<template>
  <div class="w-full h-full flex justify-center items-center p-10">
    <div>
      <div class="shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px]">
        <CountdownHeader />
        <main class="flex justify-center">
          <CountdownSegment label="days"
            :number="timeRemaining.daysRemaining" />
          <CountdownSegment label="hours"
            :number="timeRemaining.hoursRemaining" />
          <CountdownSegment label="minutes"
            :number="timeRemaining.minutesRemaining" />
          <CountdownSegment label="seconds"
            :number="timeRemaining.secondsRemaining" />
        </main>
      </div>
      <h4 class="mt-10 text-gray-400 text-center text-sm">
        This challenge brought to you by <a href="https://vueschool.io/"
        class="underline">Vue School</a>
      </h4>
    </div>
  </div>
</template>

<style>
div {
  display: block;
}

body {
  @apply bg-gray-100;
}
</style>
