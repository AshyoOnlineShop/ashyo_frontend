<template>
  <div class="w-full mb-[64px]" v-for="(item, index) in data" :key="index">
    <div class="flex">
      <!-- LEFT SIDE -->
      <div class="w-[70px]">
        <img
          :src="UserImage"
          alt="user"
          class="w-[70px] h-[70px] rounded-full" />
      </div>
      <!-- RIGHT SIDE -->
      <div class="ml-[17px] w-[613px]">
        <h1 class="my_text">{{ item.name }}</h1>
        <div class="mt-1.5">
          <!-- <el-rate v-model="value1" @change="handleChange" /> -->
          <el-rate v-model="item.rate" disabled class="custom-rate-style" />
        </div>
        <div class="mt-[15px]">
          <span class="my_text2">{{ item.date }}</span>
        </div>
        <div class="mt-[10px]">
          <p class="my_text3">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import UserImage from "../../assets/images/user_image.png";
import IconStarVue from "../icons/IconStar.vue";

const value1 = ref(5);
const value2 = ref(null);
const handleChange = (value: number) => {
  console.log(`Selected rating: ${value}`);
};

const data = {
  user1: {
    img: "smth",
    name: "Evgeniy Viktorovich",
    rate: 3,
    text: "The most inconvenient application written with the left heel. The\
            interface is awkward. Putting something up for sale is as difficult\
            as possible. You need to go in the tab in the masonry in the hidden\
            tabs in the buttons. Kick-ass",
    date: "September 3, 2022",
  },
  user2: {
    img: "smth",
    name: "Evgeniy Viktorovich",
    rate: 5,
    text: "The most inconvenient application written with the left heel. The\
            interface is awkward. Putting something up for sale is as difficult\
            as possible. You need to go in the tab in the masonry in the hidden\
            tabs in the buttons. Kick-ass",
    date: "September 4, 2022",
  },
};
</script>

<style scoped>
.my_text {
  color: #06172d;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 129%;
}

.my_text2 {
  color: rgba(0, 0, 0, 0.4);
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}

.my_text3 {
  color: #515d6c;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 20.8px */
}
</style>
