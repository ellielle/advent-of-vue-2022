<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { useI18n } from "vue-i18n";

const { t, d, availableLocales, locale } = useI18n();
const updateLocaleFlag = computed(() => {
  return {
    "en": "i-twemoji-flag-united-kingdom",
    "ja-JP": "i-twemoji-flag-japan",
    "de": "i-twemoji-flag-germany"
  }[locale.value];
});
const christmasDate = new Date("2022/12/25");
const timeUntilChristmas = Math.floor((new Date("2022/12/25") - Date.now()) /
  (1000 * 60 * 60 * 24));

const localeFlags = (newLocale: string) => {
  return {
    "en": "i-twemoji-flag-united-kingdom",
    "ja-JP": "i-twemoji-flag-japan",
    "de": "i-twemoji-flag-germany"
  }[newLocale];
};
</script>

<template>
  <main class="flex flex-col justify-center h-full mx-auto max-w-600px">
    <section class="flex flex-col items-center leading-loose text-center">
      <div :class="updateLocaleFlag+ ' flag'"></div>
      <div class="text-3xl">
        <span class="i-twemoji-christmas-tree"></span>
        {{ t("happyHolidays") }}
        <span class="i-twemoji-world-map"></span>
      </div>

      <i18n-t keypath="christmasIsComing" tag="span">
        <template #date>
          {{ d(christmasDate, "long") }}
        </template>
        <template #time>
          <span class="text-green-600">
            {{ t('day', timeUntilChristmas) }}
          </span>
          !
        </template>
      </i18n-t>

      <div :class="localeFlags(locales)+` icon-button`"
        v-once
        v-for="locales in availableLocales"
        :key="locales"
        @click="() => {locale = locales}"
      >
      </div>
      <!-- Dates - Check out locales/en.json for the key -->
      <!-- Controls - I give you an .icon-button class if you want to use it -->
      <!-- Flags - the current locale -->
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
