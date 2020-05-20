<template>
  <div class="overlay">
    <div class="fond"></div>
    <div class="component-content">
      <h3>VOTRE MOTIF :</h3>
      <textarea cols="30" rows="10"></textarea>
      <h3 class="fichier">Fichiers en complément :</h3>
      <div class="file">
        <input type="text" class="bg-dark" placeholder="Présensation.docx" />
        <button class="bg-dark">
          <img src="./../assets/file.png" alt="file" />
          <h4>IMPORTER</h4>
        </button>
      </div>
      <div class="button">
        <input id="submit" type="submit" value="Confirmer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MotifAbsence"
};
</script>

<style scoped>
* {
  text-decoration: none;
  color: #ffffff;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h3 {
  text-transform: uppercase;
  padding: 15px 0;
}

.fond {
  position: absolute;
  z-index: 1;
  background-color: #121212;
  opacity: 0.75;
  width: 100vw;
  height: 100vh;
}
.component-content {
  z-index: 2;
  width: 75%;
  height: 75%;
  background-color: #121212;
  padding: 4vh 4vw;
}

.component-content textarea {
  width: 100%;
  min-height: 30%;
  border-radius: 4px;
  background-color: #242424;
  padding: 30px;
  outline: none;
  border: none;
  font-size: 18px;
}

.fichier {
  margin-top: 30px;
}

.bg-dark {
  background-color: #242424;
  border-radius: 4px;
  padding: 30px 40px;
}

.file {
  display: flex;
}
.file button {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.file input {
  outline: none;
  border: none;
  width: 84%;
  margin-right: 2vw;
}

.file button {
  outline: none;
  border: 2px solid #ff8800;
}
button img,
button h4 {
  margin: 0 4px;
}

input#submit {
  width: 16%;
}

.button {
    text-align: center;
}

input[type="submit"] {
  margin-top: 5vh;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 15px;
  background-color: #27ae60;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>