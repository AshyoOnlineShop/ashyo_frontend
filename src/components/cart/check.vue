<template>
  <div
    class="w-full flex flex-col items-center justify-center bg-global_grey p-[40px] gap-[25px] rounded-lg">
    <h1 class="title">{{ props.title }}</h1>
    <div
      v-for="(item, index) in props.arr"
      :key="index"
      class="w-full flex justify-between items-center">
      <p class="sub_title">{{ item.title }}</p>
      <p class="value">{{ item.value }}</p>
    </div>
    <div class="w-full flex justify-between items-center">
      <p class="sub_title">Jami summa:</p>
      <p class="flex items-center justify-center">
        <span class="price">{{ props.price }}</span>
        <span class="value ml-[5px]">uzs</span>
      </p>
    </div>
    <div class="w-full">
      <button
        @click="props.fn"
        class="w-full h-[56px] bg-global_blue hover:bg-blue_hover flex items-center justify-center text-[white] mt-[20px] rounded-md">
        Hoziroq sotib olish
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String },
  arr: { type: Array },
  price: { type: Number },
  fn: { type: Function },
});
const arr = [
  { title: "2 ta mahsulot:", value: "6999999 usz" },
  { title: "Yetkazib berish:", value: "Bepul" },
];

const price = "6999999";
</script>

<style lang="scss" scoped>
.title {
  color: #000;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  margin-bottom: 30px;
}

.sub_title {
  color: rgba(0, 0, 0, 0.6);
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}

.price {
  color: #06172d;
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 118%;
}

.value {
  color: #000;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 23.4px */
}
</style>
