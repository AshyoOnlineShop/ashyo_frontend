//@ts-nocheck
import type { ICustomerSigninPayload } from "./../../types/customerAuthTypes";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { customerAuthApi } from "../../api/auth/customerAuth";
import router from "../../router/index";
import Notification from "../../plugins/Notification";

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
          localStorage.setItem("id", data.customer.id);
        }
        router.push({ name: "main_page_items" });
        Notification("Successfully signed in", "success");
      } catch (error) {
        // this.error = error?.response?.data?.message
        //   ? error?.response?.data?.message
        //   : error.message;
        // console.log(error);
        console.log("Error in cutsomer sign in:", error);
        Notification("Error, something went wrong", "danger");
      }
    },

    async signup(payload: any) {
      try {
        const data = await customerAuthApi.signup(payload);
        console.log("Registered User:", data);
        if (data?.tokens?.access_token) {
          localStorage.setItem("token", data.tokens.access_token);
          localStorage.setItem("role", "customer");
          localStorage.setItem("id", data.customer.id);
        }
        router.push({ name: "main_page_items" });
        Notification("Successfully signed up", "success");
      } catch (error) {
        // this.error = error?.response?.data?.message
        //   ? error?.response?.data?.message
        //   : error.message;
        // console.log(error);
        console.log("Error in cutsomer sign up:", error);
        Notification("Error, something went wrong", "danger");
      }
    },
  },
});
