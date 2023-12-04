<template>
  <div class="full">
    <div class="container mt-[50px]">
      <h1 class="title">Cart</h1>
      <div v-if="productStore.cart_products?.length">
        <div class="w-full flex justify-between">
          <div class="w-[65%] h-[700px] flex flex-col mt-[30px] overflow-auto">
            <div
              v-for="(item, index) in productStore?.cart_products"
              :key="index">
              <Cart :item="item"></Cart>
            </div>
          </div>
          <div class="w-[27%] mt-[30px]">
            <Check
              title="Sizni haridingiz"
              :arr="arr"
              price="123000"
              :fn="hello"></Check>
          </div>
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
import Cart from "../../../components/cart/cart.vue";
import Check from "../../../components/cart/check.vue";
const customerId = localStorage.getItem("id");
const productStore = useProductStore();

const arr = [
  { title: "3 ta mahsulot:", value: "6999999 usz" },
  { title: "Yetkazib berish:", value: "Bepul" },
];

const hello = () => {
  console.log("Hello world");
};

onMounted(async () => {
  await productStore.getAllProducts({});
  await productStore.getAllCustomerCarts(customerId, {});
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
