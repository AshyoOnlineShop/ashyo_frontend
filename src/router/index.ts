import { createRouter, createWebHistory } from "vue-router";
import customer_signin from "./customer_signin";
import customer_signup from "./customer_signup";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [customer_signin, customer_signup],
});

export default router;
