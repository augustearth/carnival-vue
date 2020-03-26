import Vue from "vue";
import Vuex from "vuex";
import * as vertex from "@/store/modules/vertex.js";
import * as notification from "@/store/modules/notification.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { vertex, notification }
});
