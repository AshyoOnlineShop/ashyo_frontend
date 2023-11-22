<template>
  <Header />
  <!-- <div > -->
    <!-- <div class="items-center"> -->
      <router-view></router-view>
    <!-- </div> -->
  <!-- </div> -->

  <div class="mt-[150px]"><Footer /></div>
</template>

<script setup lang="ts">
import Header from "../components/header/Header.vue";
import Footer from "../components/footer/Footer.vue";
</script>

<style scoped></style>
