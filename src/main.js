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

axios.defaults.withCredentials = true;

const app = createApp(App);

app
  .use(store)
  .use(router)
  .use(Toast, { position: POSITION.BOTTOM_RIGHT })
  .mount("#app");

app.config.globalProperties.$config = config;
