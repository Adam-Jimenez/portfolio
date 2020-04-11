import Vue from "vue";
import Vuex from "vuex";
import DemoScene from "@/scenes/demo";
Vue.use(Vuex);

const scenes = {
  demo: new DemoScene()
};

const initialState = {
  activeScene: scenes.demo,
  sceneLoading: true
};

const store = new Vuex.Store({
  state: initialState,
  mutations: {
    setSceneLoading(state, isLoading) {
      state.sceneLoading = isLoading;
    }
  }
});

export default store;
