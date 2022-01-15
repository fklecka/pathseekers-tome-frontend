import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import "./assets/tailwind.css";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import config from "../config/index.js";
import VueCookieComply from "vue-cookie-comply";
import "vue-cookie-comply/dist/style.css";

axios.defaults.withCredentials = true;

const app = createApp(App);

app
  .use(store)
  .use(router)
  .use(VueCookieComply)
  .use(Toast, {
    position: POSITION.TOP_RIGHT,
    timeout: 2000,
    transition: "Vue-Toastification__fade",
    icon: false,
  })
  .mount("#app");

app.config.globalProperties.$config = config;
