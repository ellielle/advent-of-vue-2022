<script setup lang="ts">
import ChristmasPresent from "./components/ChristmasPresent.vue";
import ChristmasTree from "./components/ChristmasTree.vue";
import { ref } from "vue";

const presents = ref(["small-red-gift", "blue-gift", "tall-red-gift"]);
const underTheTree = ref([]);

const startDrag = (evt, name) => {
  evt.dataTransfer.dropEffect = "move";
  evt.dataTransfer.effectAllowed = "move";
  evt.dataTransfer.setData("presentName", name);
};

const onDrop = evt => {
  const presentName = evt.dataTransfer.getData("presentName");
  underTheTree.value.push(presentName);
  presents.value.splice(presents.value.indexOf(presentName), 1);
};
</script>

<template>
  <div class="flex flex-col items-center mt-24 min-h-screen w-full">
    <h1 class="mt-8 text-xl font-bold">Drag the presents under the tree!</h1>
    <!-- TODO: make ChristmasTree our drop zone! -->
    <ChristmasTree :presents="underTheTree"
        class="mt-16"
        @drop="onDrop($event)"
        @dragover.prevent
        @dragenter.prevent />
    <div class="pt-32 mt-32 bg-gray-100 w-full justify-center flex-1">
      <div class="flex items-end justify-center" v-auto-animate>
        <!-- TODO: make each present draggable -->
        <ChristmasPresent v-for="(p, index) in presents"
            :key="p"
            :name="p"
            draggable="true"
            @dragstart="startDrag($event, p)" />
      </div>
    </div>
  </div>
</template>
