import Vue from "vue";
import Vuex from "vuex";
import DemoScene from "@/scenes/demo";
Vue.use(Vuex);

const scenes = {
  demo: DemoScene
};

const initialState = {
  activeScene: null,
  renderer: null,
  sceneLoading: true
};

const store = new Vuex.Store({
  state: initialState,
  mutations: {
    setScene(state, scene) {
      state.activeScene = scene;
    },
    setSceneLoading(state, isLoading) {
      state.sceneLoading = isLoading;
    },
    setRenderer(state, renderer) {
      state.renderer = renderer;
    }
  },
  actions: {
    loadScene({ commit, state }, sceneName) {
      state.renderer.stopRenderLoop();
      const scene = new scenes[sceneName](state.renderer);
      state.renderer.setScene(scene);
      scene.load().then(() => {
        commit("setScene", scene);
        commit("setSceneLoading", false);
        state.renderer.startRenderLoop();
      });
    }
  }
});

export default store;
