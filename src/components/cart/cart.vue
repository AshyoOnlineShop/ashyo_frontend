<template>
  <div class="w-full h-[172px] mb-[30px] flex">
    <div
      class="w-[200px] h-[170px] grid place-items-center bg-global_grey rounded-lg">
      <img :src="props.image" alt="product img" class="w-[115px] h-[115px]" />
    </div>
    <div class="flex flex-col w-[570px] h-[170px] ml-[35px]">
      <!-- texts -->
      <div class="texts w-full flex justify-between mt-[20px]">
        <p class="description">{{ props.name }}/{{ props.desc }}</p>
        <p class="flex items-center justify-center">
          <span class="price">{{ price }}</span>
          <span class="cash">UZS</span>
        </p>
      </div>
      <!-- buttons -->
      <div class="flex w-full justify-between mt-3">
        <div class="buttons1 flex items-center justify-center gap-[10px]">
          <button @click="addLike">
            <i
              class="fa-regular fa-heart p-4 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer mt-5 hover:bg-[#d2d6da]"></i>
            <p class="w-[20px] h-[20px] opacity-0"></p>
          </button>
          <button @click="cart(props.id)">
            <i
              class="fa-regular fa-trash-can p-4 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer mt-5 hover:bg-[#ffefef] hover:text-[crimson]"></i>
            <p class="w-[20px] h-[20px] opacity-0"></p>
          </button>
        </div>
        <div class="buttons2 flex items-center justify-center gap-[15px]">
          <button @click="dec(props.cart_id)">
            <i
              class="fa-solid fa-minus p-4 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer mt-5 hover:bg-[#d2d6da]"></i>
            <p class="w-[20px] h-[20px] opacity-0"></p>
          </button>
          <p class="count">{{ props.quantity }}</p>
          <button @click="inc(props.cart_id)">
            <i
              class="fa-solid fa-plus p-4 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer mt-5 hover:bg-[#d2d6da]"></i>
            <p class="w-[20px] h-[20px] opacity-0"></p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useProductStore } from "../../stores/main/product/product";
const productStore = useProductStore();
const customerId = localStorage.getItem("id");
const props = defineProps({
  id: { type: Number },
  cart_id: { type: Number },
  image: { type: String },
  name: { type: String },
  desc: { type: String },
  price: { type: String },
  quantity: { type: String },
});

const cart = async (id) => {
  await productStore.removeProductCart(id, +customerId);
  console.log("UnCarted prod id:", id);
  await productStore.getAllCustomerCarts(customerId, {});
  await productStore.getAllProducts({});
  await productStore.getCustomer(customerId);
  await productStore.getCartProductsInfo();
};

const dec = async (id) => {
  const quantity = ref(props.quantity);
  const price = ref(+props.price);
  if (props.quantity > 1) {
    quantity.value--;
    price.value -= price.value;
    console.log("Value decreased", quantity.value);
    await productStore.updateCart(
      {
        quantity: quantity.value,
      },
      id
    );
    await productStore.getAllCustomerCarts(customerId, {});
    await productStore.getAllProducts({});
    await productStore.getCustomer(customerId);
    await productStore.getCartProductsInfo();
  }
};

const inc = async (id) => {
  const quantity = ref(props.quantity);
  const price = ref(+props.price);
  quantity.value++;
  price.value += price.value;
  console.log("Value increased", quantity.value);

  await productStore.updateCart(
    {
      quantity: quantity.value,
    },
    id
  );
  await productStore.getAllCustomerCarts(customerId, {});
  await productStore.getAllProducts({});
  await productStore.getCustomer(customerId);
  await productStore.getCartProductsInfo();
};
</script>

<style lang="scss" scoped>
.description {
  color: var(--text-t-2, #545d6a);
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  width: 288px;
}

.price {
  color: #06172d;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 118%;
}

.cash {
  color: #000;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-left: 7px;
}

.count {
  color: #697b92;
  font-family: "Roboto, sans-serif";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}
</style>
