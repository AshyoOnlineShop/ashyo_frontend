export default {
  path: "/main",
  name: "main",
  //@ts-ignore
  component: () => import("@/pages/Main/MainPage/MainPage.vue"),
  children: [
    {
      path: "/",
      name: "main_page_items",
      component: () => import("@/pages/Main/MainPage/MainPageItems.vue"),
    },
    {
      path: "/single_product/:id",
      name: "single_product",
      component: () =>
        import("@/pages/Main/SingleProduct/Product/SingleProduct.vue"),
    },
    {
      path: "/about",
      name: "about",
      // @ts-ignore
      component: () => import("@/pages/Main/MainPage/About.vue"),
    },
    {
      path: "/category",
      name: "category",
      // @ts-ignore
      component: () => import("@/pages/Main/Category/Category.vue"),
    },
    {
      path: "/brand",
      name: "brand",
      // @ts-ignore
      component: () => import("@/pages/Main/Brand/Brand.vue"),
    },
  ],
};
