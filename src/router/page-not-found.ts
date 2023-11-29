export default {
  path: "/:notFound",
  name: "notFound",
  //@ts-ignore
  component: () => import("@/pages/NotFound.vue")
};
