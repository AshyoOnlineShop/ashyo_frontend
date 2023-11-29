import { createRouter, createWebHistory } from "vue-router";
import signin from "./customer_signin";
import signup from "./customer_signup";
import main from "./main";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    customer_signin,
    customer_signup,
  ],
  routes: [signin, signup, main],
});

export default router;
