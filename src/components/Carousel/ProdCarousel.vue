<template>
  <Carousel
    :v-bind="settings"
    :breakpoints="breakpoints"
    :autoplay="3000"
    :pauseAutoplayOnHover="true"
    :wrap-around="true"
    class="mb-[4%]">
    <Slide v-for="(img, index) in imgs" :key="index">
      <Product
        :text="img.text"
        :price="img.price"
        :content="img.content"
        :width="img.width"
        :height="img.height"
        @click="get_product(img.id)"></Product>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
//@ts-ignore
import { Carousel, Navigation, Slide } from "vue3-carousel";
//@ts-ignore
import Product from "../product/Product.vue";
import "vue3-carousel/dist/carousel.css";
import { useRouter } from "vue-router";
const router = useRouter();

const imgs = ref([
  {
    id: 1,
    text: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 usz ",
    content: "src/assets/images/image-removebg-preview (37) 1.png",
    width: "50px",
    height: "30px",
  },
  {
    id: 2,
    text: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 usz ",
    content: "src/assets/images/image-removebg-preview (37) 1.png",
    width: "30px",
    height: "20px",
  },
  {
    id: 3,
    text: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 usz ",
    content: "src/assets/images/image-removebg-preview (37) 1.png",
    width: "30px",
    height: "20px",
  },
]);

const get_product = (id: number) => {
  router.push({ name: "single_product", params: { id: id } });
};

const settings = {
  itemsToShow: 0.8,
  snapAlign: "center",
};

const breakpoints = {
  700: {
    itemsToShow: 3.3,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 5.2,
    snapAlign: "center",
  },
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

::v-deep .carousel__prev {
  left: 50px;
}

::v-deep .carousel__next {
  right: 50px;
}
</style>
