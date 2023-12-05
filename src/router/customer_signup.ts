export default {
  path: "/signup",
  name: "signup",
  //@ts-ignore
  component: () => import("@/pages/auth/CustomerSignUp.vue"),
  children: [
    {
      path: "/:notFound",
      name: "notFound",
      //@ts-ignore
      component: () => import("@/pages/NotFound.vue"),
    },
  ],
};
