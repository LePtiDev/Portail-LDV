<template>
  <div id="app">
    <Menu class="fixed"></Menu>
    <router-view></router-view>
  </div>
</template>

<script>

import Menu from "./components/Menu"

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
    color: white;
  }

  #app{
    display: flex;
    background-color: #121212;
  }
</style>
