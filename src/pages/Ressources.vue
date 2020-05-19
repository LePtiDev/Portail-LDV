<template>
  <div class="container">
    <h2>RESSOURCES</h2>
    <div class="ressources">
        <div class="object">
            <h3>DOCUMENTS</h3>
            <img src="./../assets/contract.png" alt="contract">
        </div>
        <div class="object">
            <h3>MyPRINT</h3>
            <img src="./../assets/print.png" alt="print">
        </div>
        <div class="object">
            <h3>LEARNING CENTER</h3>
            <img src="./../assets/3d-printer.png" alt="3d printer">
        </div>
        <div class="object">
            <h3>DE VINCI INNOVATION CENTER</h3>
            <img src="./../assets/3d-printer.png" alt="3d printer">
        </div>
        <div class="object">
            <h3>OFFICE 365</h3>
            <img src="./../assets/print.png" alt="print">
        </div>
        <div class="object">
            <h3>CENTRE LOGICIEL</h3>
            <img src="./../assets/contract.png" alt="contract">
        </div>
        <div class="object">
            <h3>SERVICE INFORMATIQUE</h3>
            <img src="./../assets/contract.png" alt="contract">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ressources",
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
  z-index: 0;
}

/* configue page */
h2 {
  font-size: 20px;
  color: white;
  filter: opacity(0.5);
}

.ressources {
    width: 100%;
    height: 90%;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.object {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 250px;
    background-color: #242424;
    margin: 30px;
}

.object h3, .object img {
    margin: 0 20px;
}

</style>
