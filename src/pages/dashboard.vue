<template>
  <div class="page">
    <div class="menu">

    </div>
    <div class="content">

    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  props: {
    msg: String
  }
}
</script>


<style scoped>

    /* container de la page */
    .page{
        height: 100vh;
        width: 100vw;
    }
    
    /* menu */
    .menu{
        width: 20%;
        height: 100%;
        background-color: red;
    }

    /* content */
    .content{
        width: 80%;
        height: 100%;
        background-color: blue;
    }

  @media screen and (max-width: 450px){

  }
</style>
