import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import ImageUploader from "vue-image-upload-resize";

Vue.use(ImageUploader);

Vue.config.productionTip = false;
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");