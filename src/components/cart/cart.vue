<template>
  <div class="w-full h-[172px] mb-[30px] flex">
    <div
      class="w-[200px] h-[170px] grid place-items-center bg-global_grey rounded-lg">
      <!-- <img :src="props.item.product.image" alt="product img" class="w-[115px] h-[115px]" /> -->
      <img :src="ProductImg" alt="product img" class="w-[115px] h-[115px]" />
    </div>
    <div class="flex flex-col w-[570px] h-[170px] ml-[35px]">
      <!-- texts -->
      <div class="texts w-full flex justify-between mt-[20px]">
        <p class="description">
          {{ props.item.product.name }}/{{ props.item.product.description }}
        </p>
        <p class="flex items-center justify-center">
          <span class="price">{{ props.item.product.price }}</span>
          <span class="cash">USZ</span>
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
          <button @click="removeProd">
            <i
              class="fa-regular fa-trash-can p-4 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer mt-5 hover:bg-[#d2d6da]"></i>
            <p class="w-[20px] h-[20px] opacity-0"></p>
          </button>
        </div>

        <div class="buttons2 flex items-center justify-center gap-[15px]">
          <button @click="dec">
            <i
              class="fa-solid fa-minus p-4 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer mt-5 hover:bg-[#d2d6da]"></i>
            <p class="w-[20px] h-[20px] opacity-0"></p>
          </button>
          <p class="count">{{ props.item.quantity }}</p>
          <button @click="inc">
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
import ProductImg from "../../assets/images/image 1814.png";

const props = defineProps({
  item: { type: Object },
});
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
