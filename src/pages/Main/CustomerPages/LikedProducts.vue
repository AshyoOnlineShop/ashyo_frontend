<template>
  <div class="full">
    <div class="container mt-[50px]">
      <h1 class="title">Liked Products</h1>
      <div
        class="flex gap-[30px] mt-[30px]"
        v-if="productStore?.liked_products_count">
        <div
          v-for="(item, index) in productStore?.only_liked_products"
          :key="index">
          <Product
            :id="item.id"
            :text="item.product_model.name"
            :price="item.price.toString()"
            :desc="item.description"
            :content="item.image"
            :is_liked="item.is_liked"
            :is_cart="item.is_cart"></Product>
        </div>
      </div>
      <div v-else class="mt-[50px]">
        <NotFoundData></NotFoundData>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Product from "../../../components/product/Product.vue";
import { useProductStore } from "../../../stores/main/product/product";
import NotFoundData from "../../../components/NotFoundData.vue";
const productStore = useProductStore();
const customerId = localStorage.getItem("id");

onMounted(async () => {
  await productStore.getAllProducts({});
  await productStore.getCustomer(customerId);
  // await productStore.getLikedProductsInfo();
  await productStore.getCartProductsInfo();
});
</script>

<style scoped>
.title {
  color: #06172d;
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
}
</style>
