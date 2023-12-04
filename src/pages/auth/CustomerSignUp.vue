<template>
  <div class="w-full h-full main">
    <div class="form flex justify-evenly">
      <div class="w-[500px]">
        <h1 class="title text-global_blue">Sign Up</h1>
        <vee-form
          :validation-schema="schema"
          @submit="save"
          class="w-5/5 flex flex-col gap-4">
          <VInput
            type="text"
            name="first_name"
            placeholder="Your name"></VInput>
          <VInput
            type="text"
            name="last_name"
            placeholder="Your last name"></VInput>
          <VInput type="text" name="email" placeholder="Your email"></VInput>
          <VPasswordInput
            name="password"
            placeholder="Set your password"></VPasswordInput>
          <VPasswordInput
            name="confirm_password"
            placeholder="Repeat your password"></VPasswordInput>
          <VInput
            type="text"
            name="phone_number"
            placeholder="+998991234567"></VInput>
          <VButton
            btn_type="primary"
            :isLoading="loading"
            type="submit"
            class="mt-5">
            Send
          </VButton>
        </vee-form>
      </div>
      <div class="flex flex-col items-center mt-[40px]">
        <img :src="SignUpImg" alt="image" />
        <router-link to="signin" class="signup-image-link"
          >I have already registered</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import VInput from "../../components/form/VInput.vue";
import VPasswordInput from "../../components/form/VPasswordInput.vue";
import { useCustomerAuthStore } from "../../stores/auth/customer_auth";
import VButton from "../../components/form/VButton.vue";
import SignUpImg from "../../assets/images/signup-image.jpg";
import Notification from "../../plugins/Notification";
import router from "../../router/index";

const authStore = useCustomerAuthStore();

const schema = computed(() => {
  return {
    first_name: "required|min:3|max:15",
    last_name: "required|min:3|max:15",
    email: "required|email:20",
    password: "required|min:3|max:15",
    confirm_password: "required|min:3|max:15",
    phone_number: "required|min:3|max:15",
  };
});

const regex = /^\+998\d{9}$/;

const save = (values) => {
  console.log("Values from signup:", values);
  if (values.password != values.confirm_password) {
    Notification("Repeated password incorrect", "danger");
  } else if (!regex.test(values.phone_number)) {
    Notification("Please enter valid phone number: +998##########", "danger");
  } else {
    authStore.signup(values);
  }
};
</script>

<style scoped>
.main {
  background: #f8f8f8;
  padding: 70px 0;
}

.title {
  text-align: center;
  margin-top: -40px;
  margin-bottom: 30px;
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
  height: 700px;
  padding: 75px 0;
}

.signup-image-link {
  font-size: 20px;
  color: #474646;
  display: block;
  text-align: center;
  margin-top: 60px;
  transition: all 0.1s linear;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid #474646;
}

.signup-image-link:hover {
  color: #000;
  border-bottom: 1px solid #000;
}
</style>
