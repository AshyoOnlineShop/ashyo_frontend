import { createRouter, createWebHistory } from "vue-router";
import signin from "./customer_signin";
import signup from "./customer_signup";
import main from "./main";
import admin from "./admin";
import pageNotFound from './page-not-found'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [signin, signup, main, admin, pageNotFound],
});

export default router;
