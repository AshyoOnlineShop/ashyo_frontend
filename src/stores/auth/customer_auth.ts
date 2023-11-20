//@ts-nocheck
import type { ICustomerSigninPayload } from "./../../types/customerAuthTypes";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { customerAuthApi } from "../../api/auth/customerAuth";
import router from "../../router/index";

export const useCustomerAuthStore = defineStore({
  id: "customer_auth",
  state: () => {
    return {};
  },
  actions: {
    async signin(payload: ICustomerSigninPayload) {
      try {
        const data = await customerAuthApi.signin(payload);
        console.log("User:", data);
        if (data?.tokens?.access_token) {
          localStorage.setItem("token", data.tokens.access_token);
          localStorage.setItem("role", "customer");
        }
        router.push({ name: "main" });
      } catch (error) {
        // this.error = error?.response?.data?.message
        //   ? error?.response?.data?.message
        //   : error.message;
        // console.log(error);
        console.log("Error in cutsomer sign in:", error);
      }
    },
  },
});
