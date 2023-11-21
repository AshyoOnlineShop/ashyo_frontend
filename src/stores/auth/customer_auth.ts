import type { ICustomerSigninPayload } from "./../../types/customerAuthTypes";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { customerAuthApi } from "../../api/auth/customerAuth";

export const useCustomerAuthStore = defineStore({
  id: "customer_auth",
  state: () => {
    return {};
  },
  actions: {
    async signin(payload: ICustomerSigninPayload) {
      let res = await customerAuthApi.signin(payload);
      console.log("Response:", res);
    },
  },
});
