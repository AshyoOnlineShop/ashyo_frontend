<template>
  <Header />
  <Banner />
  <Brand />
  <div class="flex items-center justify-center">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[3.5%]">Most popular product</h1>
    </div>
  </div>
  <Product />
  <div class="flex items-center justify-center">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[3.5%]">Most popular products</h1>
    </div>
  </div>
  <Product />
  <div class="flex items-center justify-center">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[3.5%]">Most popular products</h1>
    </div>
  </div>
  <Product />
  <div class="mt-[119px] mb-[105px]">
    <Category />
  </div>
  <div class="flex items-center justify-center">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[3.5%]">Discounted products</h1>
    </div>
  </div>
  <Product />
  <div class="mt-[100px]"><Earphone /></div>
  <div class="flex items-center justify-center">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[3.5%]">Last viewed products</h1>
    </div>
  </div>
  <Product />
  <div class="mt-[150px]"><Footer /></div>
</template>

<script setup lang="ts">
//@ts-ignore
import Banner from "../../components/carousel/MainCarousel.vue";
//@ts-ignore
import Brand from "../../components/brand/Brand.vue";
//@ts-ignore
import Product from "../../components/carousel/ProdCarousel.vue";
//@ts-ignore
import Footer from "../../components/footer/Footer.vue";
//@ts-ignore
import Category from "../../components/category/Category.vue";
//@ts-ignore
import Header from "../../components/header/Header.vue";
//@ts-ignore
import Earphone from "../../components/earphone/Earphone.vue";
</script>

<style lang="scss" scoped></style>
