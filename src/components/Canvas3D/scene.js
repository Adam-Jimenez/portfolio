import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

let camera = null

function initCamera() {
    const aspectRatio = window.innerWidth / window.innerHeight
    const height = 20
    const width = aspectRatio * height
    const near = 0.1
    const far = 1000
    let camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, near, far );
    camera.position.set(10,10,10)
    camera.lookAt(0,0,0)
    return camera
}

export default function initScene(canvas) {
       // Create an empty scene
        var scene = new THREE.Scene();
        camera = initCamera()

        // Create a renderer with Antialiasing
        var renderer = new THREE.WebGLRenderer({canvas, antialias:true});

        // Configure renderer clear color
        renderer.setClearColor("#DDDDDD");

        // Configure renderer size
        renderer.setSize( window.innerWidth, window.innerHeight );
        // Render Loop
        var render = function () {
            requestAnimationFrame( render );
            // Render the scene
            renderer.render(scene, camera);
        };
        window.addEventListener( 'resize', onWindowResize, false );

        function onWindowResize(){
            camera = initCamera();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }

        // Instantiate a loader
        var loader = new GLTFLoader();
        // Load a glTF resource
        loader.load(
            // resource URL
            'models/room.glb',
            // called when the resource is loaded
            function ( gltf ) {
                scene.add( gltf.scene );
            },
            // called while loading is progressing
            function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

            },
            // called when loading has errors
            function ( error ) {
                console.log(error);
            }
        );

        render();
}