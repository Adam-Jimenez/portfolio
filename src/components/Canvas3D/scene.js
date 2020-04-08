import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

let camera = null;
let mixer = null;

function initCamera() {
  const aspectRatio = window.innerWidth / window.innerHeight;
  const fov = 60;
  const near = 1;
  const far = 1000;
  let camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
  camera.position.set(0, 5, 10);
  camera.lookAt(0, 0, 0);
  return camera;
}

export default function initScene(canvas) {
  // Create an empty scene
  var scene = new THREE.Scene();
  camera = initCamera();
  // Create a renderer with Antialiasing
  var renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  // Configure renderer clear color
  renderer.setClearColor("#87CEED"); // sky blue
  renderer.setPixelRatio(window.devicePicelRatio);
  // Configure renderer size
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMapEnabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  var ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
  scene.add(ambientLight);
  var light = new THREE.PointLight(0xffffff, 1);
  light.position.set(1, 10, 2);
  light.castShadow = true;
  light.shadow.camera.near = 0.1;
  light.shadow.camera.far = 100;
  light.shadow.mapSize.width = 1024;
  light.shadow.mapSize.height = 1024;
  scene.add(light);
  var geometry = new THREE.PlaneGeometry(200, 50);
  var material = new THREE.MeshPhongMaterial({
    color: 0xcccccc,
    side: THREE.DoubleSide
  });
  var plane = new THREE.Mesh(geometry, material);
  plane.rotation.x = Math.PI / 2;
  plane.receiveShadow = true;
  scene.add(plane);
  // Render Loop
  var render = function() {
    requestAnimationFrame(render);
    if (mixer) {
      mixer.update(1 / 60);
    }
    renderer.render(scene, camera);
  };
  window.addEventListener("resize", onWindowResize, false);
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  // Instantiate a loader
  var loader = new GLTFLoader();
  // Load a glTF resource
  loader.load(
    // resource URL
    "models/stickman_idle_animation.glb",
    // called when the resource is loaded
    function(gltf) {
      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
        }
      });
      scene.add(gltf.scene);
      mixer = new THREE.AnimationMixer(gltf.scene);
      const animation = mixer.clipAction(gltf.animations[0]);
      animation.play();
    },
    // called while loading is progressing
    function(xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    // called when loading has errors
    function(error) {
      console.log(error);
    }
  );
  render();
}
