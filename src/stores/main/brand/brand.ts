//@ts-nocheck
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { brandsApi } from "../../../api/main/brand/brand";

export const useBrandStore = defineStore({
  id: "brands",
  state: () => {
    return {
      brand: null,
      img: null,
    };
  },
  actions: {
    async getAllBrands(params) {
      try {
        const data = await brandsApi.getAllBrands(params);
        this.brand = data.brands;
        this.img = this.brand[0].image;
        console.log("Brands:", this.brand);
        console.log("Image:", this.img);
        params.last_page = Math.ceil(this.count / params?.limit);
      } catch (error) {
        // this.error = error?.response?.data?.message
        //   ? error?.response?.data?.message
        //   : error.message;
        // console.log(error);
        console.log("Error in brands store:", error);
      }
    },
  },
});
