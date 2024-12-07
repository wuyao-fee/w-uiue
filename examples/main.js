import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import WUI from "../packages/index";

Vue.config.productionTip = false;
Vue.use(WUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
