<template>
  <!-- ============== First layer =================== -->
  <div class="bg-[#EBEFF3] w-full h-[40px] flex pt-2 justify-center gap-4">
    <div class="container flex justify-between">
      <div class="first flex gap-8">
        <div class="location flex gap-[15px]">
          <a href="#" class="flex">
            <span class="mt-1 mr-1 text-[#]"><IconLocation /></span>
            <span class="location-text">Tashkent</span>
          </a>
        </div>
        <div class="others flex gap-[25px]">
          <router-link to="about" class="a">About Us</router-link>
          <router-link to="#" class="a">Products</router-link>
          <router-link to="#" class="a">Contacts</router-link>
        </div>
      </div>
      <div class="second flex gap-8">
        <h1 class="raqam text-[#545D6A]">+998(71) 123-45-67</h1>
        <select
          class="bg-[inherit] text-[#545D6A] outline-none"
          name="lan"
          id="lan">
          <option class="" value="uzb">Uz</option>
          <option value="en">En</option>
          <option value="rus">Ru</option>
        </select>
      </div>
    </div>
  </div>

  <!-- ============== Second layer ===================  -->
  <div class="full bg bg-white h-[110px] flex flex-col gap-4">
    <div
      class="container flex flex-row gap-[60px] items-center justify-center mt-2">
      <!-- icon -->
      <div
        class="flex flex-row items-center justify-center ml-[-20px] cursor-pointer"
        @click="main">
        <IconAshyoVue />
        <h1 class="logo">Ashyo</h1>
      </div>
      <!-- category button -->
      <div class="flex gap-3">
        <button
          @click="category_open = !category_open"
          class="bg-[#134E9B] text-white w-[160px] h-[48px] p-[20px] rounded-md font-['Roboto'] flex items-center justify-between hover:bg-[#0c56b6ec]">
          <span>Kategoriya</span>
          <span v-if="!category_open"><IconDown /></span>
          <span v-else><IconUp /></span>
        </button>

        <!-- search -->
        <div class="flex">
          <input
            name="search"
            type="text"
            placeholder="What are you looking for?"
            autocomplete="off"
            class="ps-5 pe-5 p-[12.3px] color-[#EBEFF3] bg-[#EBEFF3] text-[13px] w-[518px] h-[48px] rounded-md outline-none" />
          <button
            class="bg-global_blue w-[60px] h-[48px] rounded-md cursor-pointer flex items-center justify-center ml-[-10px] hover:bg-blue_hover">
            <IconSearch />
          </button>
        </div>
      </div>
      <!-- details -->
      <!-- comparing -->
      <div class="flex flex-row gap-3 items-center justify-center">
        <button>
          <i
            class="fa-solid fa-scale-unbalanced-flip p-4 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer mt-5 hover:bg-[#d2d6da]">
          </i>
          <p
            v-if="count"
            class="count font['Roboto'] text-[10px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 text-white rounded-full">
            {{ count }}
          </p>
          <p v-else class="w-[20px] h-[20px] opacity-0"></p>
        </button>
        <!-- likes -->
        <button @click="getLikedProds">
          <i
            class="fa-regular fa-heart p-4 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer mt-5 hover:bg-[#d2d6da]"></i>
          <p
            v-if="productStore.liked_products_count"
            class="count font['Roboto'] text-[10px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 text-white rounded-full">
            {{ productStore.liked_products_count }}
          </p>
          <p v-else class="w-[20px] h-[20px] opacity-0"></p>
        </button>

        <!-- cart -->
        <button @click="getCartProds">
          <i
            class="fa-solid fa-cart-shopping p-4 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer mt-5 hover:bg-[#d2d6da]">
          </i>
          <p
            v-if="productStore?.cart_products_count"
            class="count font['Roboto'] text-[10px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 text-white rounded-full">
            {{ productStore?.cart_products_count }}
          </p>
          <p v-else class="w-[20px] h-[20px] opacity-0"></p>
        </button>

        <!-- profile -->
        <button @click="moveProfile">
          <i
            class="fa-solid fa-user p-4 bg-[#EBEFF3] rounded-md text-[#545D6A] cursor-pointer mt-5 hover:bg-[#d2d6da]">
          </i>
          <p
            v-if="count"
            class="count font['Roboto'] text-[10px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 text-white rounded-full">
            {{ count }}
          </p>
          <p v-else class="w-[20px] h-[20px] opacity-0"></p>
        </button>
      </div>
    </div>
  </div>
  <!-- ============== Third layer ===================  -->
  <div class="full">
    <div class="container flex items-center justify-center gap-[66px]">
      <a href="#" class="text-[#535c6a] font-['Roboto'] hover:text-[#2a2b2c]"
        >Aksiyalar</a
      >
      <a href="#" class="text-[#545D6A] font-['Roboto'] hover:text-[#2a2b2c]"
        >Smartfonlar</a
      >
      <a href="#" class="text-[#545D6A] font-['Roboto'] hover:text-[#2a2b2c]"
        >Noutbuklar</a
      >
      <a href="#" class="text-[#545D6A] font-['Roboto'] hover:text-[#2a2b2c]"
        >Konditsionerlar</a
      >
      <a href="#" class="text-[#545D6A] font-['Roboto'] hover:text-[#2a2b2c]"
        >Televizorlar</a
      >
      <a href="#" class="text-[#545D6A] font-['Roboto'] hover:text-[#2a2b2c]"
        >Muzlatgichlar</a
      >
      <a href="#" class="text-[#545D6A] font-['Roboto'] hover:text-[#2a2b2c]"
        >Kir yuvish mashinalari</a
      >
      <a href="#" class="text-[#545D6A] font-['Roboto']">Maishiy texnika</a>
    </div>
  </div>

  <!-- ===================== SUB MENU ==================== -->
  <div
    @click="openSubMenu"
    class="sub_menu full absolute top-0 left-0 z-10 min-h-screen pt-[25px] duration-100"
    :class="category_open ? 'opacity-100 visible' : 'opacity-0 invisible'">
    <!-- category sub menu -->
    <div
      class="container flex border border-[#EBEFF3] w-full rounded-md overflow-hidden duration-200">
      <ul class="w-[32%] py-[43px] px-[72px] bg-[#EBEFF3]">
        <li class="category flex items-center cursor-pointer py-3 mb-[14px]">
          <IconLike />
          <span class="text-[#545D6A] ml-[15px] duration-200">Aksiyalar</span>
        </li>
        <li class="category flex items-center cursor-pointer py-3 mb-[14px]">
          <IconLike />
          <span class="text-[#545D6A] ml-[15px] duration-200"
            >Smartfonlar va Aksasuerlar</span
          >
        </li>
        <li class="category flex items-center cursor-pointer py-3 mb-[14px]">
          <IconLike />
          <span class="text-[#545D6A] ml-[15px] duration-200"
            >Kiryuvish mashinalari</span
          >
        </li>
        <li class="category flex items-center cursor-pointer py-3 mb-[14px]">
          <IconLike />
          <span class="text-[#545D6A] ml-[15px] duration-200"
            >Telivizorlar</span
          >
        </li>
        <li class="category flex items-center cursor-pointer py-3 mb-[14px]">
          <IconLike />
          <span class="text-[#545D6A] ml-[15px] duration-200"
            >Kondetsionerlar</span
          >
        </li>
        <li class="category flex items-center cursor-pointer py-3 mb-[14px]">
          <IconLike />
          <span class="text-[#545D6A] ml-[15px] duration-200"
            >Kompuyert va jihozlari</span
          >
        </li>
        <li class="category flex items-center cursor-pointer py-3 mb-[14px]">
          <IconLike />
          <span class="text-[#545D6A] ml-[15px] duration-200"
            >Muzlatgichlar</span
          >
        </li>
        <li class="category flex items-center cursor-pointer py-3 mb-[14px]">
          <IconLike />
          <span class="text-[#545D6A] ml-[15px] duration-200"
            >Chang yutgichlar</span
          >
        </li>
      </ul>
      <div class="w-[68%] py-[43px] px-[72px] bg-[white]">
        <div class="w-full h-full overflow-y-auto flex gap-x-4">
          <div class="w-1/3 flex flex-col">
            <h3 class="font-medium mb-[25px]">Smartfonlar</h3>
            <router-link
              to="#"
              class="text-[#545D6A] text-sm mb-[17px] hover:text-[#454545] duration-200">
              Oppo smartfonlar
            </router-link>
          </div>
          <div class="w-1/3 flex flex-col">
            <h3 class="font-medium mb-[25px]">Televizorlar</h3>
            <router-link
              to="#"
              class="text-[#545D6A] text-sm mb-[17px] hover:text-[#454545] duration-200">
              Oppo smartfonlar
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "../../router/index";
import IconAshyoVue from "../icons/IconAshyo.vue";
import IconSearch from "../icons/IconSearch.vue";
import IconDown from "../icons/IconDown.vue";
import IconUp from "../icons/IconUp.vue";
import IconLike from "../icons/IconLike.vue";
import IconLocation from "../icons/IconLocation.vue";
import { ref, onMounted, watch, onBeforeUnmount } from "vue";
import { useProductStore } from "../../stores/main/product/product";
const isSecondLayerFixed = ref(false);
const productStore = useProductStore();
const customerId = localStorage.getItem("id");

const main = () => {
  router.push({ name: "main_page_items" });
};

const getLikedProds = () => {
  router.push({ name: "likes" });
};

const getCartProds = () => {
  router.push({ name: "cart" });
};

const moveProfile = () => {
  router.push({ name: "profile" });
};

const category_open = ref(false);

const openSubMenu = (e) => {
  if (e.target.classList.contains("sub_menu")) {
    category_open.value = false;
  }
};

onMounted(async () => {
  await productStore.getCustomer(customerId);
  await productStore.getAllProducts({});
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap");

.location {
  .location-text {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: #545d6a;
  }
  // .location-text:hover {
  //   color: #000;
  // }
}

.others {
  .a {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: #545d6a;
  }
  .a:hover {
    color: #000;
  }
}
.second {
  select {
    padding-top: -10px;
    font-family: "Roboto", sans-serif;
    margin-bottom: 8px;
  }
}
.count {
  position: relative;
  right: -40px;
  bottom: 55px;
}

.logo {
  color: #134e9b;
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-left: -10px;
}
</style>
