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
axios.defaults.baseURL = "https://cryptic-lowlands-38385.herokuapp.com/";

store.dispatch("auth/getUser").then(() => {
  createApp(App)
    .use(store)
    .use(router)
    .use(config)
    .use(Toast, { position: POSITION.BOTTOM_RIGHT })
    .mount("#app");
});
