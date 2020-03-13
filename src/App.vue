<template>
  <div id="app">
    <Nav/>
  </div>
</template>

<script>
import Nav from './components/Navigation/Nav'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html { 
  background: url("assets/bg.jpg") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

html,body,ul,ol{
  margin:0;
  padding:0;
}
</style>
