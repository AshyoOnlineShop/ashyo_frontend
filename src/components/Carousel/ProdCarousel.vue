<template>
  <Carousel
    :v-bind="settings"
    :breakpoints="breakpoints"
    :autoplay="3000"
    :pauseAutoplayOnHover="true"
    :wrap-around="true"
    class="mb-[4%]">
    <Slide v-for="(item, index) in items" :key="index">
      <Product
        :key="index"
        :id="item.id"
        :text="item.product_model.name"
        :price="item.price.toString()"
        :desc="item.description"
        :content="item.image"
        :is_liked="item.is_liked"
        :is_cart="item.is_cart"
        :is_discounted="item?.is_discounted">
      </Product>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import Product from "../product/Product.vue";
import "vue3-carousel/dist/carousel.css";
import router from "../../router/index";

const props = defineProps({
  items: { type: Array },
  // type: {
  //   most_popular,
  //   discounted,
  //   last_viewed,
  // },
});

// console.log(items.is_liked);

// sorting products

// related carousel
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
:deep(.carousel__prev),
:deep(.carousel__next) {
  background: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
:deep(.carousel__prev) {
  left: 50px;
}

:deep(.carousel__next) {
  right: 50px;
}
</style>
