//@ts-nocheck
import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//@ts-ignore
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";
import App from "./App.vue";
import router from "./router";
import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/styles.css";
import "../node_modules/nprogress/nprogress.css";
// import "vue3-carousel/dist/carousel.css";
import veeValidatePlugins from "@/plugins/vee-validate.ts";
// import VueMask from "vue-the-mask";

const app = createApp(App);
app.use(VueAwesomePaginate);
app.use(createPinia());
app.use(router);
app.use(veeValidatePlugins);
// app.use(VueMask);
app.use(ElementPlus);
app.use(OpenLayersMap /* options */);

app.mount("#app");
