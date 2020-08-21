import * as THREE from "three";
import BaseScene from "./base";
import mouse from "@/input/mouse";
export default class DemoScene extends BaseScene {
  constructor(renderer) {
    super(renderer);

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

    const textureLoader = new THREE.TextureLoader();

    // ["texture","url", x,y,z,w,h,d]
    const socialCubes = [
      [
        "textures/youtube.png",
        "https://www.youtube.com/user/mradamjimenez",
        4,
        1,
        -6,
        3,
        2,
        3
      ],
      [
        "textures/linkedin.png",
        "https://www.linkedin.com/in/adamjim/",
        -5,
        1,
        2,
        2,
        2,
        2
      ],
      [
        "textures/binarysearch.png",
        "https://binarysearch.io/@/poggers",
        10,
        1,
        -8,
        2,
        2,
        2
      ],
      [
        "textures/leetcode.png",
        "https://leetcode.com/adam-jimenez/",
        -10,
        1,
        -8,
        2,
        2,
        2
      ],
      [
        "textures/twitch.png",
        "https://www.twitch.tv/adamjimenez0",
        5,
        1,
        3,
        2,
        2,
        2
      ],
      [
        "textures/github.png",
        "https://github.com/Adam-Jimenez",
        -4,
        1,
        -4,
        2,
        2,
        2
      ],
      [
        "textures/discord.png",
        "https://discord.com/invite/BM4qTef",
        -4,
        3,
        -4,
        2,
        2,
        2
      ]
    ];
    socialCubes.forEach(cube => {
      const [texture, link, x, y, z, w, h, d] = cube;
      const socialCube = new THREE.Mesh(
        new THREE.BoxGeometry(w, h, d),
        new THREE.MeshBasicMaterial({
          map: textureLoader.load(texture),
          transparent: true
        })
      );
      socialCube.position.set(x, y, z);
      socialCube.castShadow = true;
      socialCube.onHover = () => {};
      socialCube.onClick = () => {
        open(link);
      };
      this.add(socialCube);
    });

    this.add(light);
    this.add(ambientLight);
    this.add(plane);

    this.camera.position.set(0, 5, 10);
    this.camera.lookAt(0, 0, 0);

    this.previousHovered = [];
    document.addEventListener("click", () => {
      if (this.previousHovered.length > 0) {
        this.previousHovered[0].object.onClick();
      }
    });
  }
  load() {
    return this.loadObjects(["models/stickman.glb"]).then(objects => {
      objects.forEach(object => {
        this.add(object.getModel());
      });
    });
  }
  tick() {
    super.tick();
    const vector = new THREE.Vector3(mouse.x, mouse.y, 1);
    vector.unproject(this.camera);
    const ray = new THREE.Raycaster(
      this.camera.position,
      vector.sub(this.camera.position).normalize()
    );
    const intersects = ray.intersectObjects(this.children);
    const hoverable = intersects.filter(i => i.object.onHover);
    if (hoverable.length > 0) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "default";
    }
    this.previousHovered.forEach(intersection => {
      intersection.object.material.color.setHex(0xffffff);
    });
    hoverable.forEach(intersection => {
      intersection.object.material.color.setHex(0x33ff99);
    });
    this.previousHovered = hoverable;
  }
}
