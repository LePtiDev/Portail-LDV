<template>
  <div id="app">
    <Log/>
  </div>
</template>

<script>
import Log from './pages/Log.vue'

export default {
  name: 'App',
  components: {
    Log
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
