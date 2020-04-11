import * as THREE from "three";

const COLORS = {
  SKY_BLUE: "#87CEED"
};

export default class Renderer extends THREE.WebGLRenderer {
  constructor(canvasDomNode) {
    super({ canvas: canvasDomNode, antialias: true });
    this.setClearColor(COLORS.SKY_BLUE);
    this.setSize(window.innerWidth, window.innerHeight);
    this.shadowMap.enabled = true;
    this.shadowMap.type = THREE.PCFSoftShadowMap;
    this.activeScene = null;
    this.isRenderLoopActive = false;

    window.addEventListener(
      "resize",
      () => {
        this.setSize(window.innerWidth, window.innerHeight);
      },
      false
    );
  }
  setScene(scene) {
    this.activeScene = scene;
  }
  renderLoop() {
    if (!this.isRenderLoopActive) return;
    requestAnimationFrame(this.renderLoop.bind(this));
    this.activeScene.tick();
    this.render(this.activeScene, this.activeScene.getCamera());
  }
  startRenderLoop() {
    this.isRenderLoopActive = true;
    this.renderLoop();
  }
  stopRenderLoop() {
    this.isRenderLoopActive = false;
  }
}
