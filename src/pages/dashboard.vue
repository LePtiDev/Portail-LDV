<template>
    <div class="container">
        <h2>TABLEAU DE BORD</h2>
        <div class="grid">
            <div class="rows row-one">
                <div class="section presence">
                    <p class="section-title">RELEVÉ DE PRÉSENCE</p>
                    <p class="section-underTitle">Devlab S2 - 10/03</p>
                    <CheckButton/>
                </div>
                <div class="space"></div>
                <div class="section information"></div>
            </div>
            <div class="rows row-two">
                <div class="section edt"></div>
                <div class="space"></div>
                <div class="section absence"></div>
                <div class="space"></div>
                <div class="section mark"></div>
            </div>
            <div class="rows row-three">
                <div class="section contact"></div>
            </div>
        </div>
    </div>
</template>

<script>

import CheckButton from '../components/CheckButton'

export default {
  name: "Dashboard",
  components: {
      CheckButton,
  },
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

.section-title{
  font-family: 'Montserrat';
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 18px;
}

.section-underTitle{
  font-size: 18px;
}

/* Grille */

.grid {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 40px 0px 40px 0px;
  width: 100%;
  height: auto;
}

/* rows */
.rows{
    width: 100%;
    margin: 0 0 2vw 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.row-one{
    height: 212px;
}

.row-two{
    height: 500px;
}

.row-three{
    height: 212px;
}

/* sections */
.section{
    padding: 30px;
    background-color: #242424;
    height: 100%;
    border-radius: 4px;
}

.space{
    height: 100%;
    width: 2vw;
}

.presence{
    width: 30%;
}

.information{
    width: 68%;
}

.edt{
    width: 30%;
}

.absence{
    width: 28%;
}

.mark{
    width: 38%;
}

.contact {
    width: 100%;
}

/* section presence */

.button-presence{
  height: 100px;
  width: 100%;
  background-color: #27AE60;
}

</style>
