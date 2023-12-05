<template>
  <div class="w-full h-full flex items-center justify-center">
    <div class="container flex flex-col items-center justify-center">
      <img :src="NotFound" alt="not_found" class="w-[180px] h-[200px]" />
      <h1 class="title">No Data Found</h1>
    </div>
  </div>
</template>

<script setup>
import NotFound from "../assets/images/notFound.png";
</script>

<style scoped>
.title {
  color: #b5b5b5;
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
}
</style>
