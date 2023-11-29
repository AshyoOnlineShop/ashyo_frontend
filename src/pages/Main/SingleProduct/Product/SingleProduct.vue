<template>
  <div class="full">
    <div class="container flex justify-between">
      <!-- ================= LEFT SIDE ==================== -->
      <div class="float-left w-[700px] justify-between">
        <h1 class="title mb-[35px]">{{ product.text }}</h1>
        <!-- left -->
        <div class="float-left w-[120px]">
          <!-- children -->
          <div
            class="grid place-items-center mb-[10px] h-[108px] w-[130px] bg-[#EBEFF3] rounded-md"
            v-for="(item, index) in product.images"
            :key="index">
            <img :src="ProductImg" alt="image" class="h-[54px] w-[54px]" />
          </div>
        </div>
        <!-- right -->
        <div class="float-right w-[540px] h-[460px] rounded-xl">
          <Carousel :items-to-show="1" :wrap-around="true">
            <Slide v-for="img in product.images" :key="img">
              <div class="carousel__item">
                <div
                  class="w-[540px] h-[460px] grid place-items-center bg-[#EBEFF3] rounded-xl">
                  <img
                    :src="ProductImg"
                    alt="slide img"
                    class="w-[351px] h-[351px] rounded-xl" />
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>
      <!-- ================= RIGHT SIDE ==================== -->
      <div class="float-right w-[510px]">
        <!-- price -->
        <div class="price flex items-center gap-[20px] mt-[130px]">
          <span class="span1">Narxi</span>
          <p class="p1">{{ product.price }}</p>
          <p class="p2">uzs</p>
        </div>
        <!-- buttons -->
        <div class="w-full flex justify-between mt-[37px]">
          <button
            class="w-[240px] h-[60px] border-2 border-global_blue text-global_blue rounded-md">
            Savatga qo‘shish
          </button>
          <button
            class="w-[240px] h-[60px] bg-global_blue text-[white] rounded-md">
            Xarid qilish
          </button>
        </div>
        <!-- info -->
        <div class="flex flex-col mt-[46px] gap-[22px]">
          <p class="p3 flex items-center">
            <span class="mr-[16px]"><IconDelivery /></span>
            Yetkazib berish O’zbekiston bo’ylab
          </p>
          <p class="p3 flex items-center">
            <span class="mr-[16px]"><IconShop /></span>
            Do’konni o’zidan olib ketishingiz mumkin
          </p>
          <p class="p3 flex items-center">
            <span class="mr-[16px]"><IconClock /></span>
            Tahminiy yetkazib berish vaqti 1 kundan 3 kungacha......
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { computed, ref, defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import ProductImg from "../../../../assets/images/image 1814.png";
import { useRoute } from "vue-router";
import IconDelivery from "../../../../components/icons/IconDelivery.vue";
import IconShop from "../../../../components/icons/IconShop.vue";
import IconClock from "../../../../components/icons/IconClock.vue";
const route = useRoute();

const product = {
  text: "Смартфон Xiaomi 12 Lite 8/128Gb ",
  images: {
    img1: "src/assets/images/image 1814.jpg",
    img2: "src/assets/images/image 1814.jpg",
    img3: "src/assets/images/image 1814.jpg",
    img4: "src/assets/images/image 1814.jpg",
  },
  price: "2 470 000",
};
</script>

<style scoped>
::v-deep .carousel__prev,
::v-deep .carousel__next {
  background: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

::v-deep .carousel__item {
  border-radius: 12px;
}

.span1 {
  color: #515d6c;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 129%;
}

.p1 {
  color: #06172d;
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
}

.p2 {
  color: #06172d;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 118%;
}

.p3 {
  color: rgba(6, 23, 45, 0.7);
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}

.title {
  color: #06172d;
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
}
</style>
