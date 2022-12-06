<script setup lang="ts">
defineProps<{
  label: string;
  number: number
}>();

const numberToText = (countdownNumber: number) => {
  if (countdownNumber <= 10) {
    return countdownNumber.toString().padStart(2, "0");
  }
  return countdownNumber.toString();
};

</script>
<template>
  <div class="segment text-center">
    <div class="pt-10 overflow-hidden relative">
      <Transition>
      <span :key="number" class="numbers text-green absolute top-0 left-[50%]">
        {{ numberToText(number) }}
      </span>
      </Transition>
    </div>

    <span class="label block pt-2">{{ label }}</span>
  </div>
</template>
<style>
.segment {
  width: 80px;
}

.numbers {
  transform: translateX(-50%);
  font-size: 32px;
}

.label {
  font-size: 16px;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from {
  transform: translateX(-50%) translateY(100%);
}

.v-leave-to {
  transform: translateX(-50%) translateY(-100%);
}
</style>
