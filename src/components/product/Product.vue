<template>
  <div class="relative">
    <div
      class="carousel__item w-[273px] h-[280px] bg-[#EBEFF3] rounded-md flex items-center relative">
      <img
        @click="getOne(productProps.id)"
        class="product m-auto"
        :src="productProps.content"
        alt="Slide Image" />
    </div>
    <div>
      <span
        v-if="productProps?.is_discounted"
        class="discount absolute top-[13px] left-[15px]"
        >Aksiyada</span
      >
      <button
        class="absolute top-[13px] left-[235px]"
        @click="like(productProps.id)">
        <i
          :class="
            !productProps.is_liked
              ? 'fa-regular fa-heart text-[#545D6A] hover:text-[black] text-[20px]'
              : 'fa-solid fa-heart text-[crimson] text-[20px]'
          "></i>
      </button>
    </div>

    <div class="flex-col w-[273px]">
      <h4 class="text-start mt-[16px] text-[14px]">
        {{ productProps.text }}/{{ productProps.desc }}
      </h4>
      <div class="flex justify-between">
        <p class="text-[20px] font-[700] text-start mt-[28px]">
          {{ productProps.price }}
        </p>
        <div class="flex gap-2">
          <button
            class="fa-solid fa-scale-unbalanced-flip p-3 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer mt-5 hover:bg-[#dde2e6]"></button>
          <!-- cart btn -->
          <button
            @click="cart(productProps.id)"
            :class="
              !productProps.is_cart
                ? 'fa-solid fa-cart-shopping p-3 bg-[#134E9B] text-white rounded-md cursor-pointer mt-5 hover:bg-[#0c56b6ec]'
                : 'fa-solid fa-cart-shopping p-3 bg-[white] text-[crimson] border border-[crimson] rounded-md cursor-pointer mt-5 hover:bg-[#ffefef]'
            "></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useProductStore } from "../../stores/main/product/product";
import router from "../../router/index";

const productProps = defineProps({
  id: { type: Number },
  text: { type: String },
  price: { type: String },
  desc: { type: String },
  content: { type: String },
  is_liked: { type: Boolean },
  is_discounted: { type: Boolean },
  is_cart: { type: Boolean },
});

const productStore = useProductStore();
const is_liked = ref(productProps.is_liked);
const is_cart = ref(productProps.is_cart);
const customerId = localStorage.getItem("id");

const like = async (id) => {
  if (productProps.is_liked == false) {
    productProps.is_liked = true;
    await productStore.likeProduct({
      product_id: id,
      customer_id: +customerId,
    });
    await productStore.getAllProducts({});
    await productStore.getCustomer(customerId);
    // await productStore.getLikedProductsInfo();
    await productStore.getCartProductsInfo();
    console.log("Liked prod id:", id);
  } else {
    productProps.is_liked = false;
    await productStore.removeLikedProduct(id, +customerId);
    console.log("UnLiked prod id:", id);
    await productStore.getAllProducts({});
    await productStore.getCustomer(customerId);
    // await productStore.getLikedProductsInfo();
    await productStore.getCartProductsInfo();
  }
};

const cart = async (id) => {
  if (productProps.is_cart == false) {
    productProps.is_cart = true;
    await productStore.addProductCart({
      product_id: id,
      customer_id: +customerId,
    });
    console.log("Carted prod id:", id);
    await productStore.getAllProducts({});
    await productStore.getCustomer(customerId);
    // await productStore.getLikedProductsInfo();
    await productStore.getCartProductsInfo();
  } else {
    productProps.is_cart = false;
    await productStore.removeProductCart(id, +customerId);
    console.log("UnCarted prod id:", id);
    await productStore.getAllProducts({});
    await productStore.getCustomer(customerId);
    // await productStore.getLikedProductsInfo();
    await productStore.getCartProductsInfo();
  }
};

const getOne = (id) => {
  console.log("Single product id", id);
  router.push({ name: "single_product", params: { id: id } });
};
</script>

<style scoped>
.product:hover {
  scale: 1.1;
  transition: all 0.1s linear;
}

.discount {
  color: #e81504;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: inline-flex;
  padding: 7px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 5px;
  background: #fff;
}
</style>
