import { createRouter, createWebHistory } from "vue-router";
import customer_signin from "./customer_signin";
import customer_signup from "./customer_signup";
import login from "./login";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [login]
})

export default router;
