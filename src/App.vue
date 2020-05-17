<template>
  <div id="app">
    <router-view></router-view>
    <!-- <router-link to="/Log">Log</router-link>
    <router-link to="/Dashboard">Dash</router-link> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }

  #app{
    display: flex;
    background-color: black;
  }
</style>
