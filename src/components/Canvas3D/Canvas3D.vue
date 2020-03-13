<template>
    <canvas ref="canvas" />
</template>

<script>
import * as THREE from 'three'
export default {
   name: 'Canvas3D',
   mounted() {
       const canvas = this.$refs.canvas;
       // Create an empty scene
        var scene = new THREE.Scene();

        // Create a basic perspective camera
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        camera.position.z = 4;

        // Create a renderer with Antialiasing
        var renderer = new THREE.WebGLRenderer({canvas, antialias:true});

        // Configure renderer clear color
        renderer.setClearColor("#FFFFFF");

        // Configure renderer size
        renderer.setSize( window.innerWidth, window.innerHeight );
        // Create a Cube Mesh with basic material
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
        var cube = new THREE.Mesh( geometry, material );

        // Add cube to Scene
        scene.add( cube );

        // Render Loop
        var render = function () {
            requestAnimationFrame( render );

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            // Render the scene
            renderer.render(scene, camera);
        };
        window.addEventListener( 'resize', onWindowResize, false );

        function onWindowResize(){

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

        }

        render();
    }
}
</script>

<style>
canvas {
  margin:0;
  padding:0;
  height:100%;
  width: 100%;
  border:none;
}
</style>