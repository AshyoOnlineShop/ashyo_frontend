import { createRouter, createWebHistory } from "vue-router";
import signin from "./customer_signin";
import signup from "./customer_signup";
import main from "./main";
import admin from "./admin";
import pageNotFound from "./page-not-found";
import deliver from "./deliver";
// @ts-ignore
import NProgress from "nprogress";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    signin,
    signup,
    main,
    // admin.adminLogin,
    // admin.adminPage,
    // deliver,
    // pageNotFound,
  ],
});

// ================= NProgress Start ================
router.beforeResolve((to, from, next) => {
  NProgress.start();
  next();
});

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role");
//   const id = localStorage.getItem("id");
//   const name = to.name === "signin";
//   console.log("To:", to);
//   console.log("Name:", name);

//   if (!token && !name) {
//     return next({ name: "signin" });
//   } else {
//     if (token && name) {
//       if (role === "customer") {
//         return next({ name: "main_page_items" });
//         // } else if (role === "admin") {
//         //   return next({ name: "admin" });
//         // }
//       } else {
//         next();
//       }
//     }
//   }
// });

router.afterEach(() => {
  NProgress.done();
});

export default router;
