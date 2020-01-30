import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

require("@/assets/css/style.css");

Vue.use(VueResource);
Vue.http.options.root = "https://source.mk/sourcico.com/wp-json";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
