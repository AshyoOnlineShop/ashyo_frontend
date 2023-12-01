import { createRouter, createWebHistory } from "vue-router";
import signin from "./customer_signin";
import signup from "./customer_signup";
import main from "./main";
import admin from "./admin";
import pageNotFound from './page-not-found'
import deliver from "./deliver";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [signin, signup, main, admin.adminLogin, admin.adminPage, deliver, pageNotFound],
});

export default router;
