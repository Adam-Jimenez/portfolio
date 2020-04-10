import * as THREE from "three";

export default class DemoScene extends THREE.Scene {
  constructor() {
    super();

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);

    const light = new THREE.PointLight(0xffffff, 0.6);
    light.position.set(1, 10, 2);
    light.castShadow = true;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 100;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;

    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(200, 50),
      new THREE.MeshPhongMaterial({
        color: 0xcccccc,
        side: THREE.DoubleSide
      })
    );
    plane.rotation.x = Math.PI / 2;
    plane.receiveShadow = true;

    this.camera = this.initCamera();

    this.add(light);
    this.add(ambientLight);
    this.add(plane);
  }
  initCamera() {
    const aspectRatio = window.innerWidth / window.innerHeight;
    const fov = 60;
    const near = 1;
    const far = 1000;
    let camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);
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
}
