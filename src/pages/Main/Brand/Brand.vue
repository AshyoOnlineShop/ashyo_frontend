<template>
  <div class="mt-[30px] mx-auto w-[1250px] pt-[20px] items-start">
    <div class="flex flex-row gap-[15px]">
      <button
        v-for="category in sortedCategories"
        class="attribute-button flex flex-col bg-[#EBEFF3] ctg-btn"
        @click="toggleSelected(category.position, category)"
        :key="category.id"
        :class="{ active: category.position == activeCategoryId }">
        <img
          :src="category.image"
          alt="Category Image"
          class="category-image" />
        {{ category.name }}
      </button>
    </div>

    <div class="mt-[50px] w-[100%] flex">
      <div class="flex flex-row gap-10 flex-wrap">
        <Product
          v-for="(item, index) in products"
          :key="index"
          :text="item.description"
          :price="item.price"
          :content="item.image"
          :width="'30px'"
          :height="'20px'"></Product>
      </div>
    </div>
  </div>
</template>

<script setup>
import Product from "../../../components/Product/Product.vue";
import { ref, watch } from "vue";

const brandId = 1;

const categories = [
  {
    id: 1,
    name: "phone",
    position: 1,
    image: "src/assets/images/image 1814.png",
    parent_category_id: 1,
    createdAt: "2023-11-29T12:21:42.633Z",
    updatedAt: "2023-11-29T12:21:42.633Z",
    attribute_groups: [
      {
        id: 4,
        name: "BRAND",
        category_id: 1,
        position: 5,
        createdAt: "2023-11-30T05:58:56.949Z",
        updatedAt: "2023-11-30T05:58:56.949Z",
      },
      {
        id: 3,
        name: "ROM",
        category_id: 1,
        position: 4,
        createdAt: "2023-11-30T03:34:23.707Z",
        updatedAt: "2023-11-30T03:34:23.707Z",
      },
      {
        id: 2,
        name: "RAM",
        category_id: 1,
        position: 3,
        createdAt: "2023-11-30T03:34:09.900Z",
        updatedAt: "2023-11-30T03:34:09.900Z",
      },
      {
        id: 1,
        name: "Akkumulyator hajmi",
        category_id: 1,
        position: 1,
        createdAt: "2023-11-29T12:22:10.260Z",
        updatedAt: "2023-11-29T12:22:10.260Z",
      },
    ],
    product: [
      {
        id: 1,
        name: "phone",
        description:
          "The phone uses a frame made out of titanium, which has been used to reduce its overall weight.",
        price: 15180000,
        category_id: 1,
        model_id: 1,
        brand_id: 1,
        image: "src/assets/images/image 1814.png",
        quantity: 100,
        createdAt: "2023-11-30T03:31:40.569Z",
        updatedAt: "2023-11-30T03:31:40.569Z",
      },
      {
        id: 2,
        name: "phone",
        description:
          "The phone uses a frame made out of titanium, which has been used to reduce its overall weight.",
        price: 100000,
        category_id: 1,
        model_id: 2,
        image: "src/assets/images/image 1814.png",
        brand_id: 2,
        quantity: 100,
        createdAt: "2023-11-30T03:32:11.622Z",
        updatedAt: "2023-12-01T05:59:31.736Z",
      },
      {
        id: 3,
        name: "phone",
        description:
          "The phone uses a frame made out of titanium, which has been used to reduce its overall weight.",
        price: 5000000,
        category_id: 1,
        image: "src/assets/images/image 1814.png",
        model_id: 2,
        brand_id: 3,
        quantity: 100,
        createdAt: "2023-12-03T09:23:20.862Z",
        updatedAt: "2023-12-03T09:23:20.862Z",
      },
    ],
    brands: [
      {
        id: 1,
        name: "Apple",
        image: "src/assets/images/image 1814.png",
        position: 1,
        createdAt: "2023-11-30T03:21:32.268Z",
        updatedAt: "2023-11-30T03:22:20.026Z",
        BrandCategory: {
          id: 1,
          brand_id: 1,
          category_id: 1,
          createdAt: "2023-11-30T03:24:58.844Z",
          updatedAt: "2023-11-30T03:24:58.844Z",
        },
      },
      {
        id: 2,
        name: "Samsung",
        image: "src/assets/images/image-removebg-preview (37) 1.png",
        position: 2,
        createdAt: "2023-11-30T03:22:29.215Z",
        updatedAt: "2023-11-30T03:22:29.215Z",
        BrandCategory: {
          id: 2,
          brand_id: 2,
          category_id: 1,
          createdAt: "2023-11-30T03:26:18.111Z",
          updatedAt: "2023-11-30T03:26:18.111Z",
        },
      },
    ],
    parent_category: {
      id: 1,
      name: "phone",
      position: 1,
      image: "src/assets/images/image 1814.png",
      parent_category_id: 1,
      createdAt: "2023-11-29T12:21:42.633Z",
      updatedAt: "2023-11-29T12:21:42.633Z",
    },
    sub_categories: [
      {
        id: 2,
        name: "tv",
        position: 2,
        image: "src/assets/category_img/tv.png",
        parent_category_id: 1,
        createdAt: "2023-11-29T12:21:54.121Z",
        updatedAt: "2023-11-29T12:21:54.121Z",
      },
      {
        id: 1,
        name: "phone",
        position: 1,
        image: "src/assets/images/image-removebg-preview (37) 1.png",
        parent_category_id: 1,
        createdAt: "2023-11-29T12:21:42.633Z",
        updatedAt: "2023-11-29T12:21:42.633Z",
      },
    ],
  },
  {
    id: 2,
    name: "tv",
    position: 2,
    image: "src/assets/category_img/tv.png",
    parent_category_id: 1,
    createdAt: "2023-11-29T12:21:54.121Z",
    updatedAt: "2023-11-29T12:21:54.121Z",
    attribute_groups: [],
    product: [
      {
        id: 4,
        name: "tv",
        description:
          "a telecommunication medium for transmitting moving images and sound.",
        price: 5000000,
        category_id: 2,
        model_id: 1,
        brand_id: 1,
        image: "src/assets/category_img/tv.png",
        quantity: 100,
        createdAt: "2023-12-03T22:40:10.427Z",
        updatedAt: "2023-12-03T22:40:10.427Z",
      },
      {
        id: 5,
        name: "tv",
        description:
          "a telecommunication medium for transmitting moving images and sound.",
        price: 4000000,
        category_id: 2,
        image: "src/assets/category_img/tv.png",
        model_id: 2,
        brand_id: 1,
        quantity: 100,
        createdAt: "2023-12-03T22:40:30.127Z",
        updatedAt: "2023-12-03T22:40:30.127Z",
      },
    ],
    brands: [
      {
        id: 1,
        name: "Apple",
        image: "src/assets/images/image-removebg-preview (37) 1.png",
        position: 1,
        createdAt: "2023-11-30T03:21:32.268Z",
        updatedAt: "2023-11-30T03:22:20.026Z",
        BrandCategory: {
          id: 3,
          brand_id: 1,
          category_id: 2,
          createdAt: "2023-12-03T22:43:31.152Z",
          updatedAt: "2023-12-03T22:43:31.152Z",
        },
      },
    ],
    parent_category: {
      id: 1,
      name: "phone",
      position: 1,
      image: "src/assets/images/image-removebg-preview (37) 1.png",
      parent_category_id: 1,
      createdAt: "2023-11-29T12:21:42.633Z",
      updatedAt: "2023-11-29T12:21:42.633Z",
    },
    sub_categories: [
      {
        id: 6,
        name: "Laptop",
        position: 3,
        image: "src/assets/images/image-removebg-preview (37) 1.png",
        parent_category_id: 2,
        createdAt: "2023-12-03T22:52:26.259Z",
        updatedAt: "2023-12-03T22:52:26.259Z",
      },
      {
        id: 5,
        name: "mac",
        position: 3,
        image: "src/assets/category_img/noutbook.png",
        parent_category_id: 2,
        createdAt: "2023-12-03T22:41:10.929Z",
        updatedAt: "2023-12-03T22:41:10.929Z",
      },
    ],
  },
  {
    id: 5,
    name: "mac",
    position: 3,
    image: "src/assets/category_img/noutbook.png",
    parent_category_id: 2,
    createdAt: "2023-12-03T22:41:10.929Z",
    updatedAt: "2023-12-03T22:41:10.929Z",
    attribute_groups: [],
    product: [
      {
        id: 6,
        name: "mac",
        description:
          "a family of personal computers designed and marketed by Apple Inc",
        price: 7000000,
        category_id: 5,
        model_id: 2,
        image: "src/assets/category_img/noutbook.png",
        brand_id: 1,
        quantity: 100,
        createdAt: "2023-12-03T22:42:23.496Z",
        updatedAt: "2023-12-03T22:42:23.496Z",
      },
      {
        id: 7,
        name: "mac",
        description:
          "a family of personal computers designed and marketed by Apple Inc",
        price: 7500000,
        category_id: 5,
        image: "src/assets/category_img/noutbook.png",
        model_id: 2,
        brand_id: 1,
        quantity: 100,
        createdAt: "2023-12-03T22:42:32.769Z",
        updatedAt: "2023-12-03T22:42:32.769Z",
      },
    ],
    brands: [
      {
        id: 1,
        name: "Apple",
        image: "src/assets/images/image-removebg-preview (37) 1.png",
        position: 1,
        createdAt: "2023-11-30T03:21:32.268Z",
        updatedAt: "2023-11-30T03:22:20.026Z",
        BrandCategory: {
          id: 4,
          brand_id: 1,
          category_id: 5,
          createdAt: "2023-12-03T22:43:42.379Z",
          updatedAt: "2023-12-03T22:43:42.379Z",
        },
      },
    ],
    parent_category: {
      id: 2,
      name: "tv",
      position: 2,
      image: "src/assets/images/image-removebg-preview (37) 1.png",
      parent_category_id: 1,
      createdAt: "2023-11-29T12:21:54.121Z",
      updatedAt: "2023-11-29T12:21:54.121Z",
    },
    sub_categories: [],
  },
  {
    id: 6,
    name: "Laptop",
    position: 3,
    image: "src/assets/images/image-removebg-preview (37) 1.png",
    parent_category_id: 2,
    createdAt: "2023-12-03T22:52:26.259Z",
    updatedAt: "2023-12-03T22:52:26.259Z",
    attribute_groups: [],
    product: [],
    brands: [
      {
        id: 2,
        name: "Samsung",
        image: "src/assets/images/image-removebg-preview (37) 1.png",
        position: 2,
        createdAt: "2023-11-30T03:22:29.215Z",
        updatedAt: "2023-11-30T03:22:29.215Z",
        BrandCategory: {
          id: 5,
          brand_id: 2,
          category_id: 6,
          createdAt: "2023-12-03T22:53:08.450Z",
          updatedAt: "2023-12-03T22:53:08.450Z",
        },
      },
    ],
    parent_category: {
      id: 2,
      name: "tv",
      position: 2,
      image: "src/assets/images/image-removebg-preview (37) 1.png",
      parent_category_id: 1,
      createdAt: "2023-11-29T12:21:54.121Z",
      updatedAt: "2023-11-29T12:21:54.121Z",
    },
    sub_categories: [],
  },
];

let activeCategoryId = ref(null);

const sortedCategories =
  categories &&
  categories.filter((category) => {
    return (
      category.brands && category.brands.some((brand) => brand.id === brandId)
    );
  });

console.log(sortedCategories, 1);
let products = sortedCategories.flatMap((category) => category.product);
console.log(products);

const toggleSelected = (position, category) => {
  if (activeCategoryId.value === position) {
    activeCategoryId.value = null;
  } else {
    activeCategoryId.value = position;
  }

  console.log(position, activeCategoryId.value);
};
watch(
  () => activeCategoryId.value,
  (value) => {
    if (value != null) {
      products = sortedCategories
        .filter((category) => category.position === value)
        .flatMap((category) =>
          category.product.filter(
            (product) => product.category_id === category.id
          )
        );
      console.log(products);
    } else {
      products = sortedCategories.flatMap((category) => category.product);
    }
  }
);

window.onbeforeunload = (function () {
  window.scrollTo(0, 0);
})();
</script>

<style lang="scss" scoped>
/* Add your styling for category images or button styles here */
.attribute-button {
  /* Your existing button styles */
  display: flex;
  align-items: center;
}
.ctg-btn {
  display: flex;
  padding: 16px 50px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 3px;
  border-radius: 5px;
}

.category-image {
  width: 100px;
  height: 90px;
}
.active {
  background: #134e9b;
  color: white;
}
</style>
