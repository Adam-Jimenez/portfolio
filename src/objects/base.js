import * as THREE from "three";

export default class Base {
  constructor({ scene, animations }) {
    scene.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
      }
    });
    this.scene = scene;
    if (animations) {
      this.animations = {};
      animations.forEach(animation => {
        this.animations[animation.name] = animation;
      });
      this.mixer = new THREE.AnimationMixer(scene);
      // TODO figure better way
      const idle_animation = this.mixer.clipAction(this.animations.idle);
      const wave_animation = this.mixer.clipAction(this.animations.wave);
      wave_animation.setLoop(THREE.LoopOnce);
      wave_animation.play();
      this.mixer.addEventListener("finished", () => {
        idle_animation.play();
      });
    }
  }
  getModel() {
    return this.scene;
  }
  hasAnimation() {
    return typeof this.animations !== "undefined";
  }
  tick() {
    if (this.hasAnimation()) {
      this.mixer.update(1 / 60);
    }
  }
}
