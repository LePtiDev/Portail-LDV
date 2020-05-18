<template>
    <div id="app">
    <Menu/>
    <router-view/>
    </div>
</template>

<script>
import Menu from './components/Menu.vue'

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
    box-sizing: border-box;
  }

  #app{
    display: flex;
    background-color: #121212;
  }
</style>
