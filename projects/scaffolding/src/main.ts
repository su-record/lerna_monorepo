import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import i18n from "./i18n";

import "@mdi/font/css/materialdesignicons.min.css";
import "@/styles/index.css";
import "project-common/src/styles/reset";
import "project-common/src/styles/common";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(i18n);
app.mount("#app");
