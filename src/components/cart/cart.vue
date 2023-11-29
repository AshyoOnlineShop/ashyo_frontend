<template>
    <div class="flex flex-row ml-[140px] mt-[60px] gap-[100px]">
        <div class="flex flex-col gap-[25px]">
            <h1 class="font-bold text-[30px]">Savat</h1>
            <div class="flex flex-col gap-[25px]" v-for="(item, index) in items" :key="index">
                <div class="flex flex-row gap-[70px]">
                    <img :src="item.images[0].name" class="h-[130px] w-[150px] bg-[#d9d9d9] rounded">
                    <div class="flex flex-col w-[300px] gap-[50px]">
                        <p class="mt-[7px] text-[gray]">{{ item.product.category.name }} {{ item.product.brand.name }} {{ item.product.product_model.name }}</p>
                        <div class="flex gap-[8px] flex-row">
                            <button class="h-[40px] w-[52px] bg-[#EBEFF3] rounded flex items-center justify-center"><SvgIcon type="mdi" :path="mdiHeartOutline"></SvgIcon></button>
                            <button @click="del(index)" class="h-[40px] w-[52px] bg-[#EBEFF3] rounded flex items-center justify-center"><SvgIcon type="mdi" :path="mdiTrashCanOutline"></SvgIcon></button>
                        </div>
                    </div>

                    <div class="flex flex-col gap-[30px]">
                        <p class="mt-[4px] font-bold flex text-[25px] justify-center items-center">{{ item.product.price }}<p class="text-[12px] mt-[7px]">&nbsp; UZS</p></p>
                        <div class="flex flex-row gap-5">
                            <button :class="item.quantity==1 ? 'pointer-events-none' : ''" class="bg-[#EBEFF3] rounded w-[60px] h-[40px]" @click="dec(index)">-</button>
                            <p class="text-[24px]">{{ item.quantity }}</p>
                            <button class="bg-[#EBEFF3] rounded w-[60px] h-[40px]" @click="inc(index)">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-[340px] h-[325px] rounded bg-[#EBEFF3] mt-[80px] p-[20px] flex flex-col items-center justify-center gap-[30px]">
            <p class="font-bold text-[20px]">Sizni haridingiz</p>
            <div class="flex flex-col gap-[20px]">
                <div class="flex flex-row gap-[130px]">
                    <p class="text-[#7c7c7c]">Yetkazib berish:</p>
                    <p class="font-bold">Bepul</p>
                </div>

                <div class="flex flex-row gap-[35px] items-center">
                    <p class="text-[#7c7c7c]">Jami summa:</p>
                    <div class="flex flex-row items-center justify-center gap-[3px]"><p class="font-bold text-[27px]">{{ summa }}</p><p class="font-bold text-[20px] mt-[2px]">uzs</p></div>
                </div>
            </div>

            <VButton :btn_type="'primary'">Hoziroq stiib olish</VButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiHeartOutline } from '@mdi/js';
import { mdiTrashCanOutline } from '@mdi/js';

import VButton from '../../components/form/VButton.vue'
import { ref } from 'vue';

const props : any = defineProps({
    items: {
        type: Array(Object)
    },
})

let items = ref(props.items)

let summa = ref(0)

const sum = (items: any)=>{
    for (let i of items){
        summa.value = summa.value + i.product.price
    }
}

sum(props.items)

const dec = (index: number)=>{
    
    items.value[index].quantity = items.value[index].quantity - 1
}

const inc = (index: number)=>{
    items.value[index].quantity = items.value[index].quantity + 1
}

const del = (index: number)=>{
    summa.value = summa.value - items.value[index].product.price
    items.value.splice(index, 1)
}

</script>

<style scoped>

</style>