<template>
  <div class="container">
    <h2>TABLEAU DE BORD</h2>
    <div class="grid">
      <div class="presence">
        <p class="section-title">RELEVÉ DE PRÉSENCE</p>
        <p class="section-underTitle">Devlab S2 - 10/03</p>
        <div class=""></div>
      </div>
      <div class="information"></div>
      <div class="edt"></div>
      <div class="absence"></div>
      <div class="mark"></div>
      <div class="contact"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  props: {
    msg: String
  }
};
</script>


<style scoped>

/* container total */
.container {
  height: 100vh;
  width: 83vw;
  background-color: #121212;
  padding: 25px 35px 35px 35px;
  position: relative;
  left: 17vw;
  top: 0;
  box-sizing: border-box;
}

/* configue page */
h2 {
  font-size: 20px;
  color: white;
  filter: opacity(0.5);
}

/* Grille */

.grid {
  display: grid;
  grid-template-columns: 28% 28% 40%;
  grid-gap: 2vh;
  grid-template-rows: 212px 400px 212px;
  margin: 40px 0px 40px 0px;
}

/* sections */

.presence{
  grid-column: 1;
  grid-row: 1;
  background-color: #242424;
  padding: 30px;
}

.information{
  grid-column: 2/4;
  grid-row: 1;
  background-color: #242424;
}

.edt{
  grid-column:1;
  grid-row: 2;
  background-color: #242424;
}

.absence{
  grid-column:2;
  grid-row: 2;
  background-color: #242424;
}

.mark{
  grid-column:3;
  grid-row: 2;
  background-color: #242424;
}

.contact {
  grid-column:1/4;
  grid-row: 3;
  background-color: #242424;
}

/* section presence */

.section-title{
  font-family: 'Montserrat';
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 20px;
}

.section-underTitle{
  font-size: 20px;
}

.button-presence{
  height: 100px;
  width: 100%;
  background-color: #27AE60;
}

</style>
