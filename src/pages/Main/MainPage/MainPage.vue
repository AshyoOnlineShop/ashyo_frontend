<template>
  <div class="w-full flex flex-col min-h-screen">
    <MainLayout>
      <router-view class="flex-grow"></router-view>
    </MainLayout>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import MainLayout from "../../../layouts/MainLayout.vue";
</script>

<style lang="scss" scoped>
.flex-grow {
  flex: 1;
}
</style>
