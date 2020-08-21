import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import BaseObject from "@/objects/base";
import EventEmitter from "events";

export default class BaseScene extends THREE.Scene {
  constructor(renderer) {
    super();
    this.renderer = renderer;
    this.camera = this.initCamera();
    this.eventEmitter = new EventEmitter();
    this.loading = false;
  }
  initCamera() {
    const aspectRatio = window.innerWidth / window.innerHeight;
    const fov = 60;
    const near = 1;
    const far = 1000;
    let camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
    window.addEventListener(
      "resize",
      () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      },
      false
    );
    return camera;
  }
  getCamera() {
    return this.camera;
  }
  isLoading() {
    return this.loading;
  }
  loadObjects(objects) {
    this.loading = true;
    const loader = new GLTFLoader();
    const promises = [];

    objects.forEach(object => {
      const promise = new Promise((resolve, reject) => {
        loader.load(
          object, // path to model, e.g. "models/stickman.glb"
          gltf => {
            resolve(new BaseObject(gltf));
          },
          () => {
            // loading function, no-op
          },
          error => {
            reject(error);
          }
        );
      });
      promises.push(promise);
    });
    return Promise.all(promises).then(objects => {
      this.loading = false;
      this.loadedObjects = objects;
      this.eventEmitter.emit("loaded");
      return objects;
    });
  }
  load() {
    return this.loadObjects();
  }
  tick() {
    if (this.loadedObjects) {
      this.loadedObjects.forEach(obj => {
        obj.tick();
      });
    }
  }
  on(event, fn) {
    this.eventEmitter.on(event, fn);
  }
}
