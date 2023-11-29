export default {
  path: "/admin",
  name: "admin",
  //@ts-ignore
  component: () => import("@/pages/staff/admin/Admin.vue"),
  children: [
    {
      path: "/products",
      name: "products",
      component: () =>
        //@ts-ignore
        import("@/pages/staff/admin/products/Products.vue"),
    },
    {
      path: "/admin-profile",
      name: "profile",
      component: () =>
        //@ts-ignore
        import("@/pages/staff/admin/profile/Profile.vue"),
    },
  ],
};
