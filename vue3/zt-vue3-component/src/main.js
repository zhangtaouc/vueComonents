import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ZTUI from "../packages/index";
const app = createApp(App);
app.use(ZTUI);
app.mount("#app");
