<template>
  <div class="w-full h-full main">
    <div class="form flex justify-evenly">
      <div class="flex flex-col items-center justify-center">
        <img :src="SignInImg" alt="image" />
      </div>
      <div class="w-[500px]">
        <vee-form
          :validation-schema="schema"
          @submit="save"
          class="w-5/5 flex flex-col gap-5">
          <h1 class="title text-global_blue">Sign In</h1>
          <VInput type="text" name="email" placeholder="Your email"></VInput>
          <VPasswordInput
            name="password"
            placeholder="Your password"></VPasswordInput>
          <VButton btn_type="primary" :isLoading="loading" type="submit">
            Send
          </VButton>
        </vee-form>
        <div class="w-full flex items-center justify-center mt-[50px]">
          <router-link to="signup" class="signin-image-link"
            >I haven't registered yet</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-nocheck
import { computed, ref } from "vue";
import VInput from "@/components/form/VInput.vue";
import VPasswordInput from "@/components/form/VPasswordInput.vue";
import VButton from "@/components/form/VButton.vue";
import { useCustomerAuthStore } from "../../stores/auth/customer_auth";
import { ICustomerSigninPayload } from "../../types/customerAuthTypes";
import router from "../../router/index";
import Notification from "../../plugins/Notification";
import SignInImg from "../../assets/images/signin-image.jpg";
const authStore = useCustomerAuthStore();

const schema = computed(() => {
  return {
    email: "required|email:20",
    password: "required|min:3|max:15",
  };
});

const loading = ref(false);
const btn_title = computed(() => {
  if (loading.value) {
    return "Loading";
  } else {
    return "Send";
  }
});

const save = async (values: ICustomerSigninPayload) => {
  console.log(values);
  await authStore.signin(values);
};
</script>

<style lang="scss" scoped>
.main {
  background: #f8f8f8;
  padding: 110px 0;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.66;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  font-size: 36px;
}

.form {
  width: 1100px;
  background: #fff;
  box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  margin: 0 auto;
  height: 550px;
  padding: 75px 0;
}

.signin-image-link {
  font-size: 18px;
  color: #474646;
  display: block;
  text-align: center;
  // margin-top: 60px;
  transition: all 0.1s linear;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  border-bottom: 1px solid #474646;
  width: 183px;
}

.signin-image-link:hover {
  color: #000;
}
</style>
