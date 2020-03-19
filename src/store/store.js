import Vue from "vue";
import Vuex from "vuex";
import * as person from "@/store/modules/person.js";
import * as notification from "@/store/modules/notification.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { person, notification }
});
