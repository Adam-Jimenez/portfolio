<template>
    <canvas ref="canvas" />
</template>

<script>
import initScene from './scene'
export default {
   name: 'Canvas3D',
   mounted() {
       const canvas = this.$refs.canvas;
       initScene(canvas);
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