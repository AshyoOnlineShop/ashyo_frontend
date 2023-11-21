//@ts-nocheck
import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import veeValidatePlugins from "@/plugins/vee-validate.ts";

const app = createApp(App);

app.use(createPinia());
app.use(veeValidatePlugins);
app.use(router);

app.mount("#app");
