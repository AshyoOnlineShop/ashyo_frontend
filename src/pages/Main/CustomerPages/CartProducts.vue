<template>
  <div class="full">
    <div class="container mt-[50px]">
      <h1 class="title">Cart</h1>
      <div v-if="productStore.cart_products?.length">
        <div class="w-full flex justify-between">
          <div class="w-[65%] h-[700px] flex flex-col mt-[30px] overflow-auto">
            <div
              v-for="(item, index) in productStore?.customer_cart"
              :key="index">
              <Cart
                :id="item.product_id"
                :cart_id="item.id"
                :image="item.product.image"
                :name="item.product.name"
                :desc="item.product.description"
                :price="item.product.price"
                :quantity="item.quantity"></Cart>
            </div>
          </div>
          <div class="w-[27%] mt-[30px]">
            <Check
              title="Sizni haridingiz"
              :arr="arr"
              price="123000"
              :fn="payment"></Check>
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
import router from "../../../router/index";
const customerId = localStorage.getItem("id");
const productStore = useProductStore();
const arr = ref([]);

const payment = () => {
  router.push({ name: "payment" });
};

onMounted(async () => {
  await productStore.getAllProducts({});
  await productStore.getCustomer(customerId);
  await productStore.getAllCustomerCarts(customerId, {});
  await productStore.getCartProductsInfo();
  arr.value = [
    {
      title: `${productStore.cart_products_count} ta mahsulot:`,
      value: "6999999 usz",
    },
    { title: "Yetkazib berish:", value: "Bepul" },
  ];
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
