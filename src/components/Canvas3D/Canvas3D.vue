<template>
    <canvas ref="canvas" />
</template>

<script>
import Renderer from '@/renderer';
import { mapState } from 'vuex';
export default {
  name: 'Canvas3D',
  computed: {
    ...mapState([
      'activeScene'
    ])
  },
  mounted() {
    const canvas = this.$refs.canvas;
    const renderer = new Renderer(canvas);
    renderer.setScene(this.activeScene);
    renderer.startRenderLoop();
  }
}
</script>

<style>
canvas {
  width: 100% !important;
  height: 100% !important;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  margin:0;
  padding:0;
  border:none;
}
</style>
