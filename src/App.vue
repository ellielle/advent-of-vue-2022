<script setup lang="ts">
import { ref } from "@vue/runtime-core";
import { useI18n } from "vue-i18n";

const { d, locale } = useI18n();
const flagToDisplay = ref<string>("i-twemoji-flag-united-kingdom");
const christmasDate = new Date("2022/12/25");
const daysUntilChristmas = ((Date.parse(christmasDate) - new Date(Date.now())) /
  Math.floor(1000 * 60 * 60 * 24)).toFixed(0);

const handleLocaleChange = (newLocale: string) => {
  flagToDisplay.value = newLocale;
  locale.value = getLocale(newLocale)!;
};

const flags = ["i-twemoji-flag-germany",
  "i-twemoji-flag-japan",
  "i-twemoji-flag-united-kingdom"];

const getLocale = (flag: string) => {
  return {
    "i-twemoji-flag-united-kingdom": "en",
    "i-twemoji-flag-japan": "ja-JP",
    "i-twemoji-flag-germany": "de"
  }[flag];
};

const getLanguage = (locale: string) => {
  return {
    "en": "English",
    "de": "Deutsch",
    "ja-JP": "日本語"
  }[locale];
};

// See the README about tricky timezone issues!
// I figured since this is i18n-friendly, we'd wanna
// make sure the timezones were right :-)
</script>

<template>
  <main class="flex flex-col justify-center h-full mx-auto max-w-600px">
    <section class="flex flex-col items-center leading-loose text-center">
      <div :class="flagToDisplay+' flag'" v-if="flagToDisplay"></div>
      <div class="text-3xl">
        <span class="i-twemoji-christmas-tree"></span>
        <span>{{ $t("happyHolidays") }}</span>
        <span class="i-twemoji-world-map"></span>
      </div>
      <div class="text-2xl">
        {{ $t("christmasIsComing",
        {
          date: d(christmasDate),
          time: $t("day", { count: +daysUntilChristmas })
        }
      ) }}!
      </div>
      <!-- Dates - Check out locales/en.json for the key -->
      <!-- Controls - I give you an .icon-button class if you want to use it -->
      <!-- Flags - the current locale -->
      <div class="flex flex-col mt-4 whitespace-nowrap">
        <span v-for="flag in flags"
          v-once
          :class="flag+' icon-button'"
          @click="handleLocaleChange(flag)">
          <span class="pl-10">
            {{ getLanguage(getLocale(flag)) }}
          </span>
        </span>
      </div>

    </section>
  </main>
</template>

<style scoped>
.icon-button {
  @apply text-xl
  w-32px
  h-32px
  rounded-full
  border-1
  border-transparent
  bg-transparent
  cursor-pointer
  duration-300
  hover:ring-2
  hover:border-green-500
  hover:ring-green-500
  hover:ring-opacity-40
  hover:text-green-600;
}

.flag {
  @apply w-200px
  h-200px
}
</style>
