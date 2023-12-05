<template>
  <div class="full">
    <div class="container mt-[50px]">
      <h1 class="title">Xaridlarni rasmiylashtirish</h1>
      <div v-if="productStore.cart_products?.length">
        <div class="w-full flex justify-between">
          <div class="w-[65%] flex flex-col mt-[30px]">
            <!-- form -->
            <h1 class="title2">1 Sizning malumotlariningiz</h1>
            <div class="mb-8">
              <h1 class="ml-5 text-[12px]">Telfon raqam</h1>
              <input
                type="text"
                class="w-[300px] h-[50px] rounded-md text-black bg-[#EBEFF3] outline-none px-[4%] text-[14px]" />
            </div>

            <div class="flex flex-row gap-[2%]">
              <div>
                <h1 class="ml-5 text-[12px]">Ism</h1>
                <input
                  type="text"
                  class="w-[300px] h-[50px] rounded-md text-black bg-[#EBEFF3] outline-none px-[16%] text-[14px]" />
              </div>

              <div>
                <h1 class="ml-5 text-[12px]">Familiya</h1>
                <input
                  type="text"
                  class="w-[300px] h-[50px] rounded-md text-black bg-[#EBEFF3] outline-none px-[16%] text-[14px]" />
              </div>
            </div>

            <!-- orders -->
            <h1 class="title2 mt-[51px]">2 Buyurtmalaringiz</h1>
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
            <!-- cards -->
            <h1 class="title2 mt-[80px]">3 To‘lov usullari</h1>
            <Payment></Payment>
            <!-- location -->
            <h1 class="title2 mt-[65px]">
              4 Yetkazib berish manzilini kiriting
            </h1>
            <div class="mb-8 flex w-[720px] justify-between">
              <div>
                <h1 class="ml-5 text-[12px]">Viloyat</h1>
                <select
                  v-model="value1"
                  placeholder="Select"
                  class="w-[330px] h-[50px] rounded-md bg-[#EBEFF3] outline-none px-[10%] text-black">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

              <div>
                <h1 class="ml-5 text-[12px]">Tuman/Shahar</h1>
                <select
                  v-model="value2"
                  placeholder="Select"
                  class="w-[330px] h-[50px] rounded-md bg-[#EBEFF3] outline-none px-[10%] text-black">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </div>
          <!-- CHECK -->
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
import Payment from "../../../components/payment_types/payment.vue";
const customerId = localStorage.getItem("id");
const productStore = useProductStore();
const arr = ref([]);

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

<style lang="scss" scoped>
.title {
  color: rgba(0, 0, 0, 0.6);
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 41.6px */
  margin-bottom: 71px;
}

.title2 {
  color: rgba(0, 0, 0, 0.6);
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 118%; /* 28.32px */
  margin-bottom: 30px;
}
</style>
