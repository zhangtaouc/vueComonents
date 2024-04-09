import Vue from "vue";
import App from "./App.vue";
import ColorPicker from "zt-header";
import "zt-header/lib/vcolorpicker.css";
Vue.use(ColorPicker);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
