<template>
  <div id="app">
    <div id="nav">

    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
    color: white;
    box-sizing: border-box;
  }
  #app{
    display: flex;
    background-color: #121212;
  }
  #nav {
    width: 20vw;
    height: 100vh;
    border: 1px solid grey;
  }
</style>
