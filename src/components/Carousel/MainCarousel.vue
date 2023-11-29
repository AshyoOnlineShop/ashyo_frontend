<template>
  <div class="mt-10 mb-[4%] relative">
    <carousel
      :items-to-show="1"
      :autoplay="5000"
      :wrap-around="true"
      :pauseAutoplayOnHover="true">
      <slide v-for="(img, index) in imgs" :key="index">
        <div :style="{ background: img.bgColor }" class="full flex h-[450px]">
          <div class="container flex items-center justify-between">
            <div class="flex flex-col items-start gap-4">
              <h1 class="text-[44px] font-[900]">{{ img.text }}</h1>
              <p
                class="font-[600] w-[650px] text-[16px] text-start text-[#545D6A]">
                {{ img.desc }}
              </p>
              <button
                class="bg-[#134e9b] hover:bg-[#0c56b6] text-white w-[160px] font-bold py-2 px-4 rounded">
                Batafsil
              </button>
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
          <div class="container flex items-start">
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
::v-deep .carousel__pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  line-height: 0;
  margin: 10px 0 0;
  align-items: center;
}

::v-deep .carousel__pagination-button {
  display: block;
  border: 0;
  margin: 0;
  cursor: pointer;
  padding: 7px;
  background: transparent;
  border-radius: 50%;
}

::v-deep .carousel__pagination-button::after {
  display: block;
  content: "";
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: white;
}

::v-deep .carousel__pagination-button:hover::after {
  background-color: #95bef3;
}
::v-deep .carousel__pagination-button--active::after {
  width: 25px;
  height: 25px;
  background-color: #95bef3;
}

/* second */
/* ::v-deep .carousel__pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  line-height: 0;
  margin: 10px 0 0;
  align-items: center;
  flex-wrap: nowrap;
  gap: 10px;
}

::v-deep .carousel__pagination-button {
  display: block;
  border: 0;
  margin: 10px;
  cursor: pointer;
  padding: 8px;
  background: transparent;
  position: relative;
}

::v-deep .carousel__pagination-button::after {
  display: block;
  content: "";
  width: 18px; 
  height: 18px; 
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
}

::v-deep .carousel__pagination-button::before {
  display: block;
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  z-index: 1; 
}

::v-deep .carousel__pagination-button:hover::after {
  background-color: #95bef3;
}

::v-deep .carousel__pagination-button--active::after {
  width: 20px;
  height: 20px;
  background-color: #95bef3;
  padding: 15px; 
  box-sizing: content-box;

} */
</style>
