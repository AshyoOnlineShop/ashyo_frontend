<template>
  <div class="w-full flex flex-col min-h-screen">
    <Header />
    <router-view class="flex-grow" />
    <div class="mt-[150px]"><Footer /></div>
  </div>
</template>

<script setup lang="ts">
import Header from "../components/header/Header.vue";
import Footer from "../components/footer/Footer.vue";
</script>

<style scoped>
.flex-grow {
  flex: 1;
}
</style>
