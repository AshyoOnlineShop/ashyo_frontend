export default {
  path: "/signin",
  name: "signin",
  //@ts-ignore
  component: () => import("@/pages/auth/CustomerSignIn.vue"),
  children: [
    {
      path: "/:notFound",
      name: "notFound",
      //@ts-ignore
      component: () => import("@/pages/NotFound.vue"),
    },
  ],
};
