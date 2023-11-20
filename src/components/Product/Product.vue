<template>
  <div class="flex-col">
    <div
      class="carousel__item w-[273px] h-[280px] bg-[#EBEFF3] rounded-md flex items-center relative"
      style="{ width: productProps.width, height: productProps.height }">
      <img class="m-auto" :src="productProps.content" alt="Slide Image" />
    </div>
    <button class="absolute top-[20px] left-[245px]">
      <i
        class="fa-regular fa-heart text-[#545D6A] hover:text-[black] text-[24px]"></i>
    </button>
    <div class="flex-col w-[273px]">
      <h4 class="text-start mt-[16px] text-[14px]">{{ productProps.text }}</h4>
      <div class="flex justify-between">
        <p class="text-[20px] font-[700] text-start mt-[28px]">
          {{ productProps.price }}
        </p>
        <div class="flex gap-2">
          <i
            class="fa-solid fa-scale-unbalanced-flip p-3 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer mt-5 hover:bg-[#dde2e6]">
          </i>
          <i
            class="fa-solid fa-cart-shopping p-3 bg-[#134E9B] text-white rounded-md cursor-pointer mt-5 hover:bg-[#0c56b6ec]">
          </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const productProps = defineProps({
  text: { type: String },
  price: { type: String },
  content: { type: String },
  width: { type: String },
  height: { type: String },
});
</script>

<style scoped></style>
