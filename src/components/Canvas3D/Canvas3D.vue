<template>
  <div>
    <Loading :style="{ opacity: sceneLoading ? 1 : 0 }"/>
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
    this.$store.commit('setRenderer', this.renderer);
    this.$store.dispatch('loadScene', 'demo');
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
