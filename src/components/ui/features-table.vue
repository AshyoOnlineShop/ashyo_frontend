<template>
  <div class="w-full">
    <div
      class="flex justify-between w-full h-[44px] border-b border-dashed border-[#B6BABF]"
      v-for="(item, index) in headers"
      :key="index">
      <div class="w-[50%]">
        <p class="my_text">{{ item }}</p>
      </div>
      <div class="w-[50%]">
        <p class="my_text">{{ values[index] }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({});
const headers = [
  "Brend",
  "CIM kartala soni",
  "Modeli",
  "Akkumliyatori",
  "Yadrolar soni",
  "Xorira RAM",
  "Xotira ROM",
  "Protsessor",
  "Brend",
  "CIM kartala soni",
  "Modeli",
  "Akkumliyatori",
  "Yadrolar soni",
  "Xorira RAM",
  "Xotira ROM",
  "Protsessor",
];

const values = [
  "Vivo",
  "2",
  "Redmi 12",
  "400 amp",
  "8",
  "6 GB",
  "128 GB",
  "MediaTek Helio P35 (MT6765)",
  "Vivo",
  "2",
  "Redmi 12",
  "400 amp",
  "8",
  "6 GB",
  "128 GB",
  "MediaTek Helio P35 (MT6765)",
];
</script>

<style scoped>
.my_text {
  color: var(--text-t-2, #545d6a);
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 44px;
}
</style>
