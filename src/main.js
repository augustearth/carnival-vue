import Vue from "vue";
//import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

// BootstrapVue
//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap-vue/dist/bootstrap-vue.css";
//Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
//Vue.use(IconsPlugin);

// TailwindCSS
import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created: function() {
    // `this` points to the vm instance
    //console.log("created!!!");
    //this.$store.dispatch("person/createPerson", { id: "1", name: "Adam" });
    //this.$store.dispatch("vertex/fetchVertices", { page: 0 });
  },
  render: h => h(App)
}).$mount("#app");
