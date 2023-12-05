<template>
  <div class="mt-10 mb-[4%] relative">
    <carousel
      :items-to-show="1"
      :autoplay="5000"
      :wrap-around="true"
      :pauseAutoplayOnHover="true">
      <slide v-for="(img, index) in imgs" :key="index">
        <div :style="{ background: img.bgColor }" class="full flex h-[450px]">
          <div class="w-[1230px] flex items-center justify-between">
            <div class="flex flex-col items-start gap-4">
              <h1 class="title">{{ img.text }}</h1>
              <p class="desc w-[650px] text-start">
                {{ img.desc }}
              </p>
              <button class="btn">Batafsil</button>
            </div>
            <div class="w-[550px] h-[100%] relative">
              <img
                class="h-[450px] w-[100%] object-cover"
                :src="img.content"
                alt="Slide Image" />
            </div>
          </div>
        </div>
      </slide>

      <template #addons>
        <div
          class="absolute bottom-[15px] w-[100%] flex items-center justify-center">
          <div class="w-[1230px] flex items-start">
            <pagination />
          </div>
        </div>
        <!-- <div class="flex">
          <navigation />
        </div> -->
      </template>
    </carousel>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { computed, ref } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";

const imgs = ref([
  {
    text: "Siz kutgan Xiaomi 12 Mi Laite",
    desc: "Orginallik va qulay narxni o'zida jamlagan  Xiaomi 12 Mi Laite  siz uchun eng yaxshi arziydigan takliflarimizdan biridir!!!",
    content: "src/assets/images/image 1855.png",
    bgColor: "#F3F0F0",
  },
  {
    text: "Siz kutgan Xiaomi 12 Mi Laite",
    desc: "Orginallik va qulay narxni o'zida jamlagan  Xiaomi 12 Mi Laite  siz uchun eng yaxshi arziydigan takliflarimizdan biridir!!!",
    content: "src/assets/images/image 1855.png",
    bgColor: "#F3F0F0",
  },
  {
    text: "Siz kutgan Xiaomi 12 Mi Laite",
    desc: "Orginallik va qulay narxni o'zida jamlagan  Xiaomi 12 Mi Laite  siz uchun eng yaxshi arziydigan takliflarimizdan biridir!!!",
    content: "src/assets/images/image 1855.png",
    bgColor: "#F3F0F0",
  },
  {
    text: "Siz kutgan Xiaomi 12 Mi Laite",
    desc: "Orginallik va qulay narxni o'zida jamlagan  Xiaomi 12 Mi Laite  siz uchun eng yaxshi arziydigan takliflarimizdan biridir!!!",
    content: "src/assets/images/image 1855.png",
    bgColor: "#F3F0F0",
  },
  {
    text: "Siz kutgan Xiaomi 12 Mi Laite",
    desc: "Orginallik va qulay narxni o'zida jamlagan  Xiaomi 12 Mi Laite  siz uchun eng yaxshi arziydigan takliflarimizdan biridir!!!",
    content: "src/assets/images/image 1855.png",
    bgColor: "#F3F0F0",
  },
]);
</script>

<style scoped>
.title {
  color: #0a1729;
  font-family: "Roboto", sans-serif;
  font-size: 44px;
  font-style: normal;
  font-weight: 900;
  line-height: 120%;
}

.desc {
  color: #545d6a;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.btn {
  width: 161px;
  height: 45px;
  color: #fff;
  border-radius: 6px;
  background: #0f4a97;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin-top: 22px;
}

.btn:hover {
  background: #0c56b6ec;
}

/* :deep(.carousel__pagination) {
  display: flex;
  justify-content: center;
  list-style: none;
  line-height: 0;
  margin: 10px 0 0;
  align-items: center;
}

:deep(.carousel__pagination-button) {
  display: block;
  border: 0;
  margin: 0;
  cursor: pointer;
  padding: 7px;
  background: transparent;
  border-radius: 50%;
}

:deep(.carousel__pagination-button::after) {
  display: block;
  content: "";
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: white;
}

:deep(.carousel__pagination-button:hover::after) {
  background-color: #95bef3;
}
:deep(.carousel__pagination-button--active::after) {
  width: 25px;
  height: 25px;
  background-color: #95bef3;
} */

:deep(.carousel__pagination) {
  display: flex;
  align-items: center;
}
:deep(.carousel__pagination-button::after) {
  width: 12px;
  height: 12px;
  background-color: white;
  border-radius: 50%;
}
:deep(.carousel__pagination-button--active::after) {
  width: 48px;
  height: 48px;
  background-color: #95bef3;
  border: 15px solid white;
  border-radius: 50%;
  position: relative;
}
:deep(.carousel__pagination-button:hover::after) {
  background-color: #95bef3;
  border-radius: 50%;
  color: #e6e6e6;
}
</style>
