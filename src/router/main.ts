export default {
  path: "/main",
  name: "main",
  //@ts-ignore
  component: () => import("@/pages/Main/MainPage/MainPage.vue"),
  children: [
    {
      path: "/",
      name: "main_page_items",
      component: () =>
        //@ts-ignore
        import("@/pages/Main/MainPage/MainPageItems.vue"),
    },
    {
      path: "/single_product/:id",
      name: "single_product",
      component: () =>
        //@ts-ignore
        import("@/pages/Main/SingleProduct/Product/SingleProduct.vue"),
    },
  ],
};
