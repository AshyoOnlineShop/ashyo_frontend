<template>
  <div class="flex justify-center w-screen">
    <div class="container grid gap-4 mt-[50px]">
      <h1 class="text-[32px] font-[700] mb-[1.5%]">Qayta aloqa</h1>
      <div class="w-[60%]">
        <p class="text-[#545D6A] mb-[35px]">
          Bizning ishimiz haqidagi fikir mulohazalaringiz bilan bo’lishing yoki
          izohlar maydonida o’zingizni qiziqtirgan savolingizni yo’llang
        </p>
      </div>
      <div class="grid grid-cols-2 gap-3 w-[690px]">
        <div>
          <h1 class="pl-4 text-[#545D6A]">Ism</h1>
          <input
            type="text"
            class="w-[330px] h-[56px] rounded-md bg-[#EBEFF3] outline-none p-4" />
        </div>
        <div>
          <h1 class="pl-4">Familya</h1>
          <input
            type="text"
            class="w-[330px] h-[56px] rounded-md bg-[#EBEFF3] outline-none p-4" />
        </div>
        <div>
          <h1 class="pl-4">Telfon raqam</h1>
          <input
            type="text"
            class="w-[330px] h-[56px] rounded-md bg-[#EBEFF3] outline-none p-4" />
        </div>
        <div>
          <h1 class="pl-4">Elktronpochta</h1>
          <input
            type="text"
            class="w-[330px] h-[56px] rounded-md bg-[#EBEFF3] outline-none p-4" />
        </div>
      </div>
      <div>
        <h1 class="pl-4">O’zingizni fikrlangizni qoldiring</h1>
        <textarea
          class="w-[690px] h-[130px] rounded-md bg-[#EBEFF3] outline-none p-4"
          style="resize: none"></textarea>
        <button
          class="flex justify-center items-center bg-[#134E9B] rounded-md cursor-pointer hover:bg-[#0c56b6ec] w-[690px] h-[56px] mt-8 outline-none mb-[115px]">
          <h1 class="text-[16px] text-white">Yuborish</h1>
        </button>
      </div>
    </div>
  </div>
  <div>
    <div>
      <Map
        :latitude="41.285834"
        :longitude="69.203533"
        class="mt-[20px] relative"
        mapTitle="My Custom Map Title" />
    </div>
  </div>
</template>

<script setup>
import Map from "../../../components/map/map.vue";
</script>

<style lang="scss" scoped></style>
