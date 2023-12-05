<template>
  <div class="mx-auto w-[1250px] pt-[20px] flex items-start mt-[30px]">
    <div class="bg-[#EBEFF3] p-5 pb-7 w-[25%] rounded-[10px] flex flex-col">
      <!-- <div class="pb-4 m-2 rounded-lg w-[96%] flex flex-col">
            <h2 class="text-lg font-semibold mb-2 ml-1">Narx [so'm]</h2>
            <div class="flex flex-wrap gap-1.5">
              <button
                v-for="(item, index) in product_info"
                class="attribute-button"
                :key="item?.id"
              >
                {{ item.product.price }}
              </button>
            </div>
          </div> -->

      <div class="pb-4 m-2 rounded-lg w-[90%] flex flex-col">
        <h2 class="text-lg font-semibold mb-2 ml-1">Narx [so'm]</h2>
        <div class="flex gap-2">
          <div>
            <h3
              class="text-[grey] font-roboto text-sm font-normal leading-[34px]">
              ...dan
            </h3>
            <div
              class="w-[120px] h-[43px] flex-shrink-0 rounded-[5px] bg-white text-center flex items-center justify-center">
              <span
                class="text-black text-opacity-60 font-roboto text-base font-normal leading-34"
                >{{ minMaxArr[0] }}</span
              >
            </div>
          </div>
          <div>
            <h3
              class="text-[grey] font-roboto text-sm font-normal leading-[34px]">
              ...gacha
            </h3>
            <div
              class="w-[120px] h-[43px] flex-shrink-0 rounded-[5px] bg-white text-center flex items-center justify-center">
              <span
                class="text-black text-opacity-60 font-roboto text-base font-normal leading-34"
                >{{ minMaxArr[1] }}</span
              >
            </div>
          </div>
        </div>

        <el-slider
          v-model="sliderValue"
          range
          :min="min"
          :max="max"
          class="w-[50px] mt-[10px] ml-[5px]"
          :show-tooltip="false" />
      </div>

      <div class="pb-4 m-2 rounded-lg w-[96%] flex flex-col">
        <h2 class="text-lg font-semibold mb-2 ml-1">BRAND</h2>
        <div class="flex flex-wrap gap-1.5">
          <button
            v-for="(item) in brands"
            :key="item?.id"
            @click="brandSort(item.id)"
            :class="{ active: brand == item.id }"
            class="attribute-button">
            {{ item.name }}
          </button>
        </div>
      </div>
      <div
        v-for="(groupItem) in attribute_group"
        :key="groupItem.id"
        class="pb-4 m-2 rounded-lg w-[96%] flex flex-col">
        <h2 class="text-lg font-semibold mb-2 ml-1">{{ groupItem.name }}</h2>

        <div class="flex flex-wrap gap-1.5">
          <button
            v-for="attribute in groupItem.attributes"
            class="attribute-button"
            @click="toggleSelected(groupItem, attribute)"
            :key="attribute?.id"
            :class="{ active: active[groupItem.id] === attribute.id }">
            {{ attribute?.name }}
          </button>
        </div>
      </div>
    </div>
    <!-- <div class="ml-[5%] w-[74%] pl-[10px] flex">
          <div class="flex flex-row gap-6 flex-wrap">
            <Product
              v-for="(img, index) in imgs"
              :key="index"
              :text="img.text"
              :price="img.price"
              :content="img.content"
              :width="img.width"
              :height="img.height"
            ></Product>
          </div>
        </div> -->
    <div
      :class="
        products.length > 0
          ? 'ml-[5%] w-[74%] pl-[10px] flex'
          : 'flex w-[74%] h-[500px] items-center justify-center'
      ">
      <div v-if="products.length > 0" class="flex flex-row gap-6 flex-wrap">
        <Product
          v-for="(product, index) in products"
          :key="index"
          :text="product.description"
          :price="product.price"
          :content="product.url"
          :width="'30%'"
          :height="'20px'"></Product>
      </div>
      <div v-else>
        <NotFoundData></NotFoundData>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Product from "../../../components/product/Product.vue";
import NotFoundData from "../../../components/NotFoundData.vue";
// import VPagination from "@hennge/vue3-pagination";
// import { useProductStore } from "../../stores/admin/product";

const categoryId = 1;

const productInfoWithUrl = [
  [
    {
      id: 1,
      product_id: 1,
      attribute_id: 1,
      createdAt: "2023-11-30T03:52:03.522Z",
      updatedAt: "2023-11-30T03:52:03.522Z",
      product: {
        id: 1,
        name: "phone",
        description: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
        price: 15180000,
        category_id: 1,
        model_id: 1,
        brand_id: 1,
        quantity: 100,
        createdAt: "2023-11-30T03:31:40.569Z",
        updatedAt: "2023-11-30T03:31:40.569Z",
      },
      attribute: {
        id: 1,
        name: "500mAh",
        attribute_group_id: 1,
        position: 1,
        createdAt: "2023-11-29T12:23:04.363Z",
        updatedAt: "2023-11-30T03:44:21.087Z",
      },
    },
    {
      id: 2,
      product_id: 1,
      attribute_id: 2,
      createdAt: "2023-11-30T03:53:23.641Z",
      updatedAt: "2023-11-30T03:53:23.641Z",
      product: {
        id: 1,
        name: "phone",
        description: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
        price: 15180000,
        category_id: 1,
        model_id: 1,
        brand_id: 1,
        quantity: 100,
        createdAt: "2023-11-30T03:31:40.569Z",
        updatedAt: "2023-11-30T03:31:40.569Z",
      },
      attribute: {
        id: 2,
        name: "24GB",
        attribute_group_id: 2,
        position: 2,
        createdAt: "2023-11-30T03:45:59.488Z",
        updatedAt: "2023-11-30T03:45:59.488Z",
      },
    },
    {
      id: 3,
      product_id: 1,
      attribute_id: 5,
      createdAt: "2023-11-30T03:53:42.469Z",
      updatedAt: "2023-11-30T03:53:42.469Z",
      product: {
        id: 1,
        name: "phone",
        description: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
        price: 15180000,
        category_id: 1,
        model_id: 1,
        brand_id: 1,
        quantity: 100,
        createdAt: "2023-11-30T03:31:40.569Z",
        updatedAt: "2023-11-30T03:31:40.569Z",
      },
      attribute: {
        id: 5,
        name: "26GB",
        attribute_group_id: 3,
        position: 2,
        createdAt: "2023-11-30T03:46:49.823Z",
        updatedAt: "2023-11-30T03:46:49.823Z",
      },
    },
    {
      id: 4,
      product_id: 2,
      attribute_id: 3,
      createdAt: "2023-11-30T03:55:05.823Z",
      updatedAt: "2023-11-30T03:55:05.823Z",
      product: {
        id: 2,
        name: "phone",
        description: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
        price: 100000,
        category_id: 1,
        model_id: 2,
        brand_id: 2,
        quantity: 100,
        createdAt: "2023-11-30T03:32:11.622Z",
        updatedAt: "2023-12-01T05:59:31.736Z",
      },
      attribute: {
        id: 3,
        name: "16GB",
        attribute_group_id: 2,
        position: 2,
        createdAt: "2023-11-30T03:46:30.976Z",
        updatedAt: "2023-11-30T03:46:30.976Z",
      },
    },
    {
      id: 5,
      product_id: 2,
      attribute_id: 2,
      createdAt: "2023-11-30T03:55:20.321Z",
      updatedAt: "2023-11-30T03:55:20.321Z",
      product: {
        id: 2,
        name: "phone",
        description: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
        price: 100000,
        category_id: 1,
        model_id: 2,
        brand_id: 2,
        quantity: 100,
        createdAt: "2023-11-30T03:32:11.622Z",
        updatedAt: "2023-12-01T05:59:31.736Z",
      },
      attribute: {
        id: 2,
        name: "24GB",
        attribute_group_id: 2,
        position: 2,
        createdAt: "2023-11-30T03:45:59.488Z",
        updatedAt: "2023-11-30T03:45:59.488Z",
      },
    },
    {
      id: 6,
      product_id: 2,
      attribute_id: 7,
      createdAt: "2023-11-30T03:55:47.087Z",
      updatedAt: "2023-11-30T03:55:47.087Z",
      product: {
        id: 2,
        name: "phone",
        description: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px.",
        price: 100000,
        category_id: 1,
        model_id: 2,
        brand_id: 2,
        quantity: 100,
        createdAt: "2023-11-30T03:32:11.622Z",
        updatedAt: "2023-12-01T05:59:31.736Z",
      },
      attribute: {
        id: 7,
        name: "200mAh",
        attribute_group_id: 1,
        position: 2,
        createdAt: "2023-11-30T03:55:42.163Z",
        updatedAt: "2023-11-30T03:55:42.163Z",
      },
    },
    {
      id: 7,
      product_id: 3,
      attribute_id: 6,
      createdAt: "2023-12-03T09:25:35.193Z",
      updatedAt: "2023-12-03T09:25:35.193Z",
      product: {
        id: 3,
        name: "phone",
        description: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px.",
        price: 5000000,
        category_id: 1,
        model_id: 2,
        brand_id: 3,
        quantity: 100,
        createdAt: "2023-12-03T09:23:20.862Z",
        updatedAt: "2023-12-03T09:23:20.862Z",
      },
      attribute: {
        id: 6,
        name: "32GB",
        attribute_group_id: 3,
        position: 2,
        createdAt: "2023-11-30T03:46:57.505Z",
        updatedAt: "2023-11-30T03:46:57.505Z",
      },
    },
  ],
  [
    {
      1: "src/assets/images/image 1814.jpg",
      2: "src/assets/images/image 1855.png",
      3: "src/assets/images/image-removebg-preview (37) 1.png",
    },
  ],
];
let product_info = productInfoWithUrl[0];

const getProduct = () => {
  let products = [];

  for (let i = 0; i < product_info.length; i++) {
    let isDuplicate = false;
    let arrAtr = [];

    for (let j = 0; j < products.length && products.length !== 0; j++) {
      if (product_info[i].product.id === products[j].id) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate && product_info[i].product.category_id == categoryId) {
      for (let j = 0; j < productInfoWithUrl[0].length; j++) {
        if (productInfoWithUrl[0][j].product.id == product_info[i].product.id) {
          arrAtr.push(productInfoWithUrl[0][j].attribute.id);
        }
      }

      products.push({
        ...product_info[i].product,
        url: productInfoWithUrl[1][0][product_info[i].product.id],
        attribute: arrAtr,
      });
    }
  }
  return products;
};

const attribute_group = [
  {
    id: 1,
    name: "Akkumulyator hajmi",
    category_id: 1,
    position: 1,
    createdAt: "2023-11-29T12:22:10.260Z",
    updatedAt: "2023-11-29T12:22:10.260Z",
    attributes: [
      {
        id: 1,
        name: "500mAh",
        attribute_group_id: 1,
        position: 1,
        createdAt: "2023-11-29T12:23:04.363Z",
        updatedAt: "2023-11-30T03:44:21.087Z",
      },
      {
        id: 7,
        name: "200mAh",
        attribute_group_id: 1,
        position: 2,
        createdAt: "2023-11-30T03:55:42.163Z",
        updatedAt: "2023-11-30T03:55:42.163Z",
      },
    ],
    category: {
      id: 1,
      name: "phone",
      position: 1,
      image: "src/assets/images/image-removebg-preview (37) 1.png",
      parent_category_id: 1,
      createdAt: "2023-11-29T12:21:42.633Z",
      updatedAt: "2023-11-29T12:21:42.633Z",
    },
  },
  {
    id: 2,
    name: "RAM",
    category_id: 1,
    position: 3,
    createdAt: "2023-11-30T03:34:09.900Z",
    updatedAt: "2023-11-30T03:34:09.900Z",
    attributes: [
      {
        id: 2,
        name: "24GB",
        attribute_group_id: 2,
        position: 2,
        createdAt: "2023-11-30T03:45:59.488Z",
        updatedAt: "2023-11-30T03:45:59.488Z",
      },
      {
        id: 3,
        name: "16GB",
        attribute_group_id: 2,
        position: 2,
        createdAt: "2023-11-30T03:46:30.976Z",
        updatedAt: "2023-11-30T03:46:30.976Z",
      },
    ],
    category: {
      id: 1,
      name: "phone",
      position: 1,
      image: "src/assets/images/image-removebg-preview (37) 1.png",
      parent_category_id: 1,
      createdAt: "2023-11-29T12:21:42.633Z",
      updatedAt: "2023-11-29T12:21:42.633Z",
    },
  },
  {
    id: 3,
    name: "ROM",
    category_id: 1,
    position: 4,
    createdAt: "2023-11-30T03:34:23.707Z",
    updatedAt: "2023-11-30T03:34:23.707Z",
    attributes: [
      {
        id: 4,
        name: "126GB",
        attribute_group_id: 3,
        position: 2,
        createdAt: "2023-11-30T03:46:46.009Z",
        updatedAt: "2023-11-30T03:46:46.009Z",
      },
      {
        id: 5,
        name: "26GB",
        attribute_group_id: 3,
        position: 2,
        createdAt: "2023-11-30T03:46:49.823Z",
        updatedAt: "2023-11-30T03:46:49.823Z",
      },
      {
        id: 6,
        name: "32GB",
        attribute_group_id: 3,
        position: 2,
        createdAt: "2023-11-30T03:46:57.505Z",
        updatedAt: "2023-11-30T03:46:57.505Z",
      },
    ],
    category: {
      id: 1,
      name: "phone",
      position: 1,
      image: "src/assets/images/image-removebg-preview (37) 1.png",
      parent_category_id: 1,
      createdAt: "2023-11-29T12:21:42.633Z",
      updatedAt: "2023-11-29T12:21:42.633Z",
    },
  },
  // {
  //   id: 4,
  //   name: "BRAND",
  //   category_id: 1,
  //   position: 5,
  //   createdAt: "2023-11-30T05:58:56.949Z",
  //   updatedAt: "2023-11-30T05:58:56.949Z",
  //   attributes: [
  //     {
  //       id: 10,
  //       name: "Apple",
  //       attribute_group_id: 4,
  //       position: 2,
  //       createdAt: "2023-11-30T06:02:31.009Z",
  //       updatedAt: "2023-11-30T06:02:31.009Z",
  //     },
  //     {
  //       id: 11,
  //       name: "Samsung",
  //       attribute_group_id: 4,
  //       position: 2,
  //       createdAt: "2023-11-30T06:02:36.873Z",
  //       updatedAt: "2023-11-30T06:02:36.873Z",
  //     },
  //     {
  //       id: 12,
  //       name: "NOKIA",
  //       attribute_group_id: 4,
  //       position: 2,
  //       createdAt: "2023-11-30T06:02:42.556Z",
  //       updatedAt: "2023-11-30T06:02:42.556Z",
  //     },
  //     {
  //       id: 13,
  //       name: "MI",
  //       attribute_group_id: 4,
  //       position: 2,
  //       createdAt: "2023-11-30T06:02:45.546Z",
  //       updatedAt: "2023-11-30T06:02:45.546Z",
  //     },
  //   ],
  //   category: {
  //     id: 1,
  //     name: "phone",
  //     position: 1,
  //     image: "src/assets/images/image-removebg-preview (37) 1.png",
  //     parent_category_id: 1,
  //     createdAt: "2023-11-29T12:21:42.633Z",
  //     updatedAt: "2023-11-29T12:21:42.633Z",
  //   },
  // },
];

let brand = ref(null);

let brands = [
  {
    id: 1,
    name: "Apple",
    image: "src/assets/images/image-removebg-preview (37) 1.png",
    position: 1,
    createdAt: "2023-11-30T03:21:32.268Z",
    updatedAt: "2023-11-30T03:22:20.026Z",
    categories: [
      {
        id: 1,
        name: "phone",
        position: 1,
        image: "src/assets/images/image-removebg-preview (37) 1.png",
        parent_category_id: 1,
        createdAt: "2023-11-29T12:21:42.633Z",
        updatedAt: "2023-11-29T12:21:42.633Z",
        BrandCategory: {
          id: 1,
          brand_id: 1,
          category_id: 1,
          createdAt: "2023-11-30T03:24:58.844Z",
          updatedAt: "2023-11-30T03:24:58.844Z",
        },
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
        quantity: 100,
        createdAt: "2023-11-30T03:31:40.569Z",
        updatedAt: "2023-11-30T03:31:40.569Z",
      },
    ],
  },
  {
    id: 2,
    name: "Samsung",
    image: "src/assets/images/image-removebg-preview (37) 1.png",
    position: 2,
    createdAt: "2023-11-30T03:22:29.215Z",
    updatedAt: "2023-11-30T03:22:29.215Z",
    categories: [
      {
        id: 1,
        name: "phone",
        position: 1,
        image: "src/assets/images/image-removebg-preview (37) 1.png",
        parent_category_id: 1,
        createdAt: "2023-11-29T12:21:42.633Z",
        updatedAt: "2023-11-29T12:21:42.633Z",
        BrandCategory: {
          id: 2,
          brand_id: 2,
          category_id: 1,
          createdAt: "2023-11-30T03:26:18.111Z",
          updatedAt: "2023-11-30T03:26:18.111Z",
        },
      },
    ],
    product: [
      {
        id: 2,
        name: "phone",
        description:
          "The phone uses a frame made out of titanium, which has been used to reduce its overall weight.",
        price: 100000,
        category_id: 1,
        model_id: 2,
        brand_id: 2,
        quantity: 100,
        createdAt: "2023-11-30T03:32:11.622Z",
        updatedAt: "2023-12-01T05:59:31.736Z",
      },
    ],
  },
  {
    id: 4,
    name: "LG",
    image: "src/assets/images/image-removebg-preview (37) 1.png",
    position: 4,
    createdAt: "2023-11-30T03:22:52.540Z",
    updatedAt: "2023-11-30T03:22:52.540Z",
    categories: [],
    product: [],
  },
  {
    id: 3,
    name: "NOKIA",
    image: "src/assets/images/image-removebg-preview (37) 1.png",
    position: 3,
    createdAt: "2023-11-30T03:22:36.962Z",
    updatedAt: "2023-11-30T03:22:36.962Z",
    categories: [],
    product: [
      {
        id: 3,
        name: "phone",
        description:
          "The phone uses a frame made out of titanium, which has been used to reduce its overall weight.",
        price: 5000000,
        category_id: 1,
        model_id: 2,
        brand_id: 3,
        quantity: 100,
        createdAt: "2023-12-03T09:23:20.862Z",
        updatedAt: "2023-12-03T09:23:20.862Z",
      },
    ],
  },
];

function uniqValues(arr) {
  const idSet = new Set();
  const result = [];

  for (const obj of arr) {
    const { id } = obj;

    if (!idSet.has(id)) {
      idSet.add(id);
      result.push(obj);
    }
  }

  return result;
}

let products = getProduct();
let active = ref({});
let products2 = products;

let max = products[0].price;
let min = products[0].price;

for (let i = 0; i < products.length; i++) {
  if (products[i].price > max) max = products[i].price;
  if (min > products[i].price) min = products[i].price;
}

let minMaxArr = [min, max];
const sliderValue = ref(0);

watch(
  () => sliderValue.value,
  (newValue) => {
    minMaxArr[0] = newValue[0];
    minMaxArr[1] = newValue[1];
    products2 = uniqValues([...products2]);
    let productsValue = products2;

    for (let i = 0; i < productsValue.length; i++) {
      if (min === minMaxArr[0] && max === minMaxArr[1]) {
        products = getProduct();
        products2 = getProduct();
      }
      if (
        productsValue[i].price < minMaxArr[0] ||
        productsValue[i].price > minMaxArr[1]
      ) {
        products = products.filter(
          (product) => product.id !== productsValue[i].id
        );
      } else if (
        productsValue[i].price >= minMaxArr[0] &&
        productsValue[i].price <= minMaxArr[1]
      ) {
        let count = ref(0);
        for (let j = 0; j < products.length; j++) {
          if (products[j].id == productsValue[i].id) count.value++;
        }
        if (!count.value) {
          if (brand.value != null) {
            if (productsValue[i].brand_id == brand.value) {
              products.push(productsValue[i]);
            }
          } else {
            products.push(productsValue[i]);
          }
        }
        products = uniqValues(products);
      }
      if (Object.values(active.value).some((value) => value !== null)) {
        let productsValue = getProduct();
        products = [];
        for (let i = 0; i < productsValue.length; i++) {
          let attrCount = 0;
          let productAttr = 0;

          for (let j of Object.values(active.value)) {
            if (j !== null) {
              attrCount++;
              if (productsValue[i].attribute.includes(j)) productAttr++;
            }
          }

          if (!attrCount && brand.value == null) {
            products = getProduct();
          }

          if (
            attrCount === productAttr &&
            productsValue[i].price >= minMaxArr[0] &&
            productsValue[i].price <= minMaxArr[1]
          ) {
            if (brand.value != null) {
              if (productsValue[i].brand_id == brand.value) {
                products.push(productsValue[i]);
              }
            } else {
              products.push(productsValue[i]);
            }
          }
        }
        products = uniqValues([...products]);
        // products2 = products;
      }
    }
  },
  { deep: true }
);

watch(
  () => active.value,
  (value) => {
    let productsValue = getProduct();
    products = [];
    for (let i = 0; i < productsValue.length; i++) {
      let attrCount = 0;
      let productAttr = 0;

      for (let j of Object.values(value)) {
        if (j !== null) {
          attrCount++;
          if (productsValue[i].attribute.includes(j)) productAttr++;
        }
      }

      // if (!attrCount && brand.value == null) {
      //   products = getProduct();
      // }

      if (
        attrCount === productAttr &&
        productsValue[i].price >= minMaxArr[0] &&
        productsValue[i].price <= minMaxArr[1]
      ) {
        if (brand.value != null) {
          if (productsValue[i].brand_id == brand.value) {
            products.push(productsValue[i]);
          }
        } else {
          products.push(productsValue[i]);
        }
      }
    }
    products = uniqValues([...products]);
    products2 = products;
  },
  { deep: true }
);

const brandSort = (id) => {
  const allNullValues = Object.values(active.value).every(
    (value) => value === null
  );

  products2 = uniqValues([...products2]);

  if (brand.value !== id) {
    brand.value = id;
    products = products2.filter(
      (product) =>
        product.brand_id === id &&
        product.price >= minMaxArr[0] &&
        product.price <= minMaxArr[1]
    );
    let productsValue = getProduct();
    products = [];
    for (let i = 0; i < productsValue.length; i++) {
      let attrCount = 0;
      let productAttr = 0;

      for (let j of Object.values(active.value)) {
        if (j !== null) {
          attrCount++;
          if (productsValue[i].attribute.includes(j)) productAttr++;
        }
      }

      if (!attrCount && brand.value == null) {
        products = getProduct();
      }

      if (
        attrCount === productAttr &&
        productsValue[i].price >= minMaxArr[0] &&
        productsValue[i].price <= minMaxArr[1]
      ) {
        if (brand.value != null) {
          if (productsValue[i].brand_id == brand.value) {
            products.push(productsValue[i]);
          }
        } else {
          products.push(productsValue[i]);
        }
      }
    }
    products = uniqValues(products);
    products2 = products;
  } else {
    brand.value = null;
    if (max != minMaxArr[1] || min != minMaxArr[0]) {
      products = products2.filter((product) => {
        return product.price >= minMaxArr[0] && product.price <= minMaxArr[1];
      });
    } else if (Object.values(active.value).some((value) => value !== null)) {
      let productsValue = getProduct();
      products = [];
      for (let i = 0; i < productsValue.length; i++) {
        let attrCount = 0;
        let productAttr = 0;

        for (let j of Object.values(active.value)) {
          if (j !== null) {
            attrCount++;
            if (productsValue[i].attribute.includes(j)) productAttr++;
          }
        }

        if (!attrCount && brand.value == null) {
          products = getProduct();
        }

        if (
          attrCount === productAttr &&
          productsValue[i].price >= minMaxArr[0] &&
          productsValue[i].price <= minMaxArr[1]
        ) {
          if (brand.value != null) {
            if (productsValue[i].brand_id == brand.value) {
              products.push(productsValue[i]);
            }
          } else {
            products.push(productsValue[i]);
          }
        }
      }
      products = uniqValues([...products]);
      products2 = products;
    } else if (allNullValues) {
      products = getProduct();
    } else {
      products = [...products2];
    }
  }
};

for (const groupItem of attribute_group) {
  active.value[groupItem.id] = null;
}

const toggleSelected = (atr_group, attribute) => {
  active.value[atr_group.id] =
    active.value[atr_group.id] === attribute.id ? null : attribute.id;
};

const params = {
  page: 1,
  limit: 10,
  last_page: null,
};
</script>

<style scoped>
.attribute-button {
  font-size: 12px;
  background-color: white;
  border-radius: 30px;
  cursor: pointer;
  padding: 7px 18px;
}

.active {
  background-color: #134e9b;
  color: white;
}
</style>
