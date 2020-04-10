import * as THREE from "three";

const SKY_BLUE = "#87CEED";

export default class Renderer extends THREE.WebGLRenderer {
  constructor(canvasDomNode) {
    super({ canvas: canvasDomNode });
    this.setClearColor(SKY_BLUE);
    this.setSize(window.innerWidth, window.innerHeight);
    this.shadowMapEnabled = true;
    this.shadowMap.type = THREE.BasicShadowMap;
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
    // if (mixer) {
    //   mixer.update(1 / 60);
    // }
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
