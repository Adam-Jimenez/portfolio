<template>
  <div id="app">
    <Canvas3D/>
  </div>
</template>

<script>
import Canvas3D from './components/Canvas3D/Canvas3D';
export default {
  name: 'App',
  components: {
    Canvas3D
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html,body, #app {
  margin:0;
  padding:0;
  height: 100%;
  width: 100%;
}
</style>
