import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import router from "./router";
import VueGeolocation from "vue-browser-geolocation";

import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";

import "./assets/main.css";
import "quasar/src/css/index.sass";

const app = createApp(App);

app.use(router);
app.use(Quasar);
app.use(VueGeolocation);

app.mount("#app");
