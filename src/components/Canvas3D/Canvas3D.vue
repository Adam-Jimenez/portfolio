<template>
  <div>
    <Loading :style="{ opacity: loading ? 1 : 0 }"/>
    <canvas ref="canvas" />
  </div>
</template>

<script>
import Renderer from '@/renderer';
import { mapState } from 'vuex';
import Loading from '@/components/Loading/Loading';
export default {
  name: 'Canvas3D',
  data: () => ({
    renderer: null,
    loading: true
  }),
  computed: {
    ...mapState([
      'activeScene',
      'sceneLoading'
    ])
  },
  mounted() {
    const canvas = this.$refs.canvas;
    this.renderer = new Renderer(canvas);
    this.renderer.setScene(this.activeScene);
    this.activeScene.on('loaded', () => {
      this.loading=false;
      this.renderer.startRenderLoop();
    })
    if (!this.activeScene.isLoading()) {
      this.loading=false;
      this.renderer.startRenderLoop();
    }
  },
  components: {
    Loading
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
