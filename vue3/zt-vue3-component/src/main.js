import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ZTUI from "../packages/index";
import Varlet from "@varlet/ui";
import "@varlet/ui/es/style";
const app = createApp(App);
app.use(ZTUI).use(Varlet);
app.mount("#app");
