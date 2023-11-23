import { createRouter, createWebHistory } from "vue-router";
import customer_signin from "./customer_signin";
import customer_signup from "./customer_signup";
import single_page_1 from "./single_page_1";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [customer_signin, customer_signup,single_page_1],
});

export default router;
