export default {
  path: "/main",
  name: "main",
  //@ts-ignore
  component: () => import("@/pages/Main/MainPage/MainPage.vue"),
  children: [
    {
      path: "/",
      name: "main_page_items",
      // @ts-ignore
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
      path: "/likes",
      name: "likes",
      // @ts-ignore
      component: () => import("@/pages/Main/CustomerPages/LikedProducts.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      // @ts-ignore
      component: () => import("@/pages/Main/CustomerPages/CartProducts.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      // @ts-ignore
      component: () => import("@/pages/Main/CustomerPages/Profile.vue"),
    },
    {
      path: "/:notFound",
      name: "notFound",
      //@ts-ignore
      component: () => import("@/pages/NotFound.vue"),
    },
  ],
};
