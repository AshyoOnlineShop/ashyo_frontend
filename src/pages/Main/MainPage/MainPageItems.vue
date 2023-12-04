<template>
  <Banner />
  <Brand />
  <div class="flex items-center justify-center">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[3.5%]">Most popular products</h1>
    </div>
  </div>
  <!-- <ProdCarousel :items="products" /> -->
  <div class="full flex-col">
    <div class="container flex flex-wrap gap-[52px]">
      <Product
        v-for="(item, index) in productStore?.sorted_liked_products"
        :key="index"
        :id="item.id"
        :text="item.product_model.name"
        :price="item.price.toString()"
        :desc="item.description"
        :content="item.image"
        :is_liked="item.is_liked">
      </Product>
    </div>
    <!-- <div class="container mt-[60px]">
      <vue-awesome-paginate
        :total-items="productStore?.products?.length"
        v-model="params.page"
        :items-per-page="params.limit"
        :max-pages-shown="2"
        paginate-buttons-class="btn"
        active-page-class="btn-active"
        back-button-class="back-btn"
        next-button-class="next-btn"
        prevButtonContent="Back"
        nextButtonContent="Next"
        :on-click="getProducts" />
    </div> -->
  </div>

  <!-- <div class="flex items-center justify-center">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[3.5%]">Most popular products</h1>
    </div>
  </div>
  <ProdCarousel />
  <div class="flex items-center justify-center">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[3.5%]">Most popular products</h1>
    </div>
  </div>
  <ProdCarousel /> -->
  <div class="mt-[119px] mb-[105px]">
    <Category />
  </div>
  <div class="flex items-center justify-center">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[3.5%]">Discounted products</h1>
    </div>
  </div>
  <ProdCarousel />
  <div class="mt-[100px]"><Earphone /></div>
  <div class="flex items-center justify-center">
    <div class="w-[1180px]">
      <h1 class="text-[32px] font-[700] mb-[3.5%]">Last viewed products</h1>
    </div>
  </div>
  <ProdCarousel />
</template>

<script setup>
import Banner from "../../../components/carousel/MainCarousel.vue";
import Brand from "../../../components/brand/Brand.vue";
import ProdCarousel from "../../../components/carousel/ProdCarousel.vue";
import Footer from "../../../components/footer/Footer.vue";
import Category from "../../../components/category/Category.vue";
import Header from "../../../components/header/Header.vue";
import Earphone from "../../../components/earphone/Earphone.vue";
import AppPagination from "../../../components/ui/app-pagination.vue";
import { onMounted, ref } from "vue";
import { useProductStore } from "../../../stores/main/product/product";
import Product from "../../../components/product/Product.vue";
const productStore = useProductStore();
const customerId = localStorage.getItem("id");
const products = ref(productStore.products);

onMounted(async () => {
  await productStore.getAllProducts({});
  await productStore.getCustomer(customerId);
  await productStore.getLikedProductsInfo();
});
</script>

<style scoped></style>
