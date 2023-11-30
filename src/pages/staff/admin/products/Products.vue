<template>
  <div class="flex flex-col m-[40px] gap-[20px]">
    <h1 class="text-[25px] font-bold">Products</h1>


    <Table :body="data" :headers="[{title: 'Price', field: 'price'}]">
    </Table>

    <!-- <div v-for="count1 = 0 in Math.ceil(data.length / 4)">
      <div class="flex flex-row w-[300px] gap-[35px]">
        <div v-for="count in 4 * count1">
          <Product
          v-if="data[count - 1 + (4 * count1 - 4)]?.price"
            :price="`${data[count - 1 + (4 * count1 - 4)]?.price} uzs`"
            :text="`${data[count - 1 + (4 * count1 - 4)]?.category.name} ${
              data[count - 1 + 4 * count1 - 4]?.brands.name
            } ${data[count - 1 + (4 * count1 - 4)]?.product_model.name}`"
            :height="'150px'"
            :width="'150px'"
          ></Product>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useAdminStore } from "../../../../stores/admin";
// import Product from "../../../../components/product/Product.vue";
//@ts-ignore
import Table from '@/components/ui/Table.vue'

const store = useAdminStore();
let data: any = ref([]);

onMounted(async () => {
  data.value = await store.getProducts();
  //   console.log(data.value);
});
</script>

<style lang="scss" scoped></style>
