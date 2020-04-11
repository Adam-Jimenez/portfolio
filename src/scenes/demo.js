import * as THREE from "three";
import BaseScene from "./base";

export default class DemoScene extends BaseScene {
  constructor() {
    super();

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

    const light = new THREE.PointLight(0xffffff, 0.5);
    light.position.set(1, 10, 2);
    light.castShadow = true;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 100;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;

    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(200, 50),
      new THREE.MeshPhongMaterial({
        color: 0xeeeeee,
        side: THREE.DoubleSide
      })
    );
    plane.rotation.x = Math.PI / 2;
    plane.receiveShadow = true;

    this.add(light);
    this.add(ambientLight);
    this.add(plane);

    this.camera.position.set(0, 5, 10);
    this.camera.lookAt(0, 0, 0);

    this.loadObjects(["models/stickman.glb"]).then(objects => {
      objects.forEach(object => {
        this.add(object.getModel());
      });
    });
  }
}
