import Vue from "vue";
import Vuex from "vuex";
import DemoScene from "@/scenes/scene";
Vue.use(Vuex);

const initialState = {
  activeScene: new DemoScene()
};

const store = new Vuex.Store({
  state: initialState,
  mutations: {}
});

export default store;
