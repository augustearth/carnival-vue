import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

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
