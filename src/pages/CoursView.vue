<template>
  <div class="container">
    <div class="txt">
      <h2>EMPLOI DU TEMPS</h2>
      <span>></span>
      <h2>COURS</h2>
      <span>></span>
      <h2>SYMFONY | PHP</h2>
    </div>
    <div class="informations">
      <div class="row1">
        <div class="salle">
          <h3>SALLE</h3>
          <div class="bg-dark">
            <p>E313</p>
          </div>
        </div>
        <div class="intervenant">
          <h3>INTERVENANT</h3>
          <div class="bg-dark">
            <p>Yoann COUALAN</p>
          </div>
        </div>
        <div class="email">
          <h3>EMAIL</h3>
          <div class="bg-dark">
            <p>yoann.coualan@devinci.fr</p>
          </div>
        </div>
      </div>
      <div class="row2">
        <h3>DESCRIPTION</h3>
        <div class="bg-dark">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, temporibus laborum maiores magnam doloremque deleniti ut aperiam totam saepe modi error officia incidunt sint corrupti. Sapiente incidunt magnam enim repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia excepturi, illo corrupti sed consectetur repellendus veniam voluptatibus cumque architecto voluptatum ducimus animi fugit a in quam repudiandae recusandae, tempora nobis?</p>
        </div>
      </div>
      <div class="row3">
        <h3>DOCUMENTS</h3>
        <div class="row3-content">
          <button class="bg-dark">
            <img src="./../assets/file.png" alt="file" />
            <h4>CHOISIR</h4>
          </button>
          <input type="text" class="bg-dark" placeholder="MonPPT.docx" />
        </div>
      </div>
      <div class="row4">
        <h3>RENDU DE LA SEMAINE</h3>
        <div class="row3-content">
          <input type="text" class="bg-dark" placeholder="Présensation.docx" />
          <button class="bg-dark">
            <img src="./../assets/file.png" alt="file" />
            <h4>Téléverser</h4>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursView",
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
.txt {
  display: flex;
}
h2 {
  font-size: 20px;
  color: white;
  filter: opacity(0.5);
}

h3 {
  margin: 14px 0;
}
h4{
  text-transform: uppercase;
}

span {
  margin: 0 13px;
  filter: opacity(1);
  font-weight: 900;
  font-size: 20px;
}

.informations {
  width: 100%;
  height: 90%;
  margin-top: 40px;
  padding: 0 50px;
}

.row1 {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.salle {
  width: 15%;
}

.intervenant {
  width: 35%;
}

.email {
  width: 45%;
}
.bg-dark {
  background-color: #242424;
  border-radius: 4px;
  padding: 30px 40px;
}

.row2,
.row3 {
  margin-top: 33px;
}

.row3-content{
  display: flex;
}

.row3 button {
  border: 2px solid #ee7f01;
  outline: none;
  display: flex;
  align-items: center;
  font-size: 16px;
}

.row4 button {
  border: 2px solid #ee7f01;
  outline: none;
  display: flex;
  align-items: center;
  font-size: 16px;
}



.row3 input.bg-dark{
  margin-left: 2vw;
  padding: 30px 45vw 30px 40px;
  outline: none;
  border: none;
}

.row4 input.bg-dark{
  margin-right: 2vw;
  padding: 30px 43vw 30px 40px;
  outline: none;
  border: none;
}


.row3 button img,
.row3 button h4, .row4 button img,
.row4 button h4 {
  margin: 0 5px;
}
</style>
