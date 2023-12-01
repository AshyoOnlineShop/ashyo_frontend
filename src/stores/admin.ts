import { adminApi } from './../api/admin';
//@ts-nocheck
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "../../router/index";

export const useAdminStore = defineStore({
  id: "admin",
  state: () => {
    return {};
  },
  actions: {
    async getProducts() {
      try {
        const data = await adminApi.getProducts()
        console.log("User:", data);
      } catch (error) {
        // this.error = error?.response?.data?.message
        //   ? error?.response?.data?.message
        //   : error.message;
        // console.log(error);
        console.log("Error while getting products", error);
      }
    },
  },
});
