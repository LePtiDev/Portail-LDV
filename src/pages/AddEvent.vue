<template>
  <div class="container">
    <div class="txt">
      <h2>EMPLOI DU TEMPS</h2>
      <span>></span>
      <h2>AJOUTER UN évènement</h2>
    </div>
    <div class="informations">
      <div class="row1">
        <div class="nomEvent">
          <h3>NOM de l'évènement</h3>
          <input class="bg-dark" type="text" placeholder="Nom de l'évènement" />
        </div>
        <div class="typeEvent">
          <h3>Type</h3>
          <input class="bg-dark" type="text" placeholder="Type de l'évènement" />
        </div>
      </div>
      <div class="row2">
        <h3>AJOUTER DES PERSONNES</h3>
        <input class="bg-dark" type="text" placeholder="Participants" />
      </div>
      <div class="row3">
        <h3>SALLE à réserver</h3>
        <input class="bg-dark" list="alexisCROFOR" placeholder="Numéro de salle à choisir" />
        <datalist id="alexisCROFOR">
          <option value="Alexis"></option>
          <option value="Quentin"></option>
          <option value="Maxime"></option>
          <option value="Antoine"></option>
          <option value="Bitos"></option>
        </datalist>
      </div>
      <div class="row4">
        <div class="nomEvent">
          <h3>Date</h3>
          <input class="bg-dark" type="date" placeholder="JJ / MM / YY" />
        </div>
        <div class="typeEvent">
          <h3>Durée</h3>
          <input class="bg-dark" type="time" min="01:00" max="05:00" required>
          <div class="dayComplete">
            <label class="coucou">
              Journée complète
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      <div class="button">
        <input id="submit" type="submit" value="Ajouter un évènement">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddEvent",
  props: {
    msg: String
  },
  form: {
    telephone: ''
  },
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
  text-transform: uppercase;
}
h2 {
  font-size: 20px;
  color: white;
  filter: opacity(0.5);
}

h3 {
  margin: 14px 0;
  text-transform: uppercase;
}
h4 {
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

.row1,
.row4 {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.nomEvent,
.typeEvent {
  width: 49%;
}

input {
  width: 100%;
}

input#submit {
  width: 20%;
}

.bg-dark {
  background-color: #242424;
  border-radius: 4px;
  padding: 30px 40px;
  border: none;
  outline: none;
  font-size: 16px;
}

.bg-dark p {
  opacity: 0.5;
}

.row2,
.row3,
.row4 {
  margin-top: 33px;
}

.row3 .row4 button {
  border: 2px solid #ee7f01;
  outline: none;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
}

form input[type="submit"] {
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

.dayComplete {
  padding-top: 10px;
  padding-right: 10%;
  display: flex;
  text-align: right;
  justify-content: flex-end;
  align-items: center;
}
.dayComplete input {
  width: 10%;
  border: 2px solid white;
  border-radius: 4px;
  outline: none;
  background-color: none;
}

.coucou{
  display: block;
  position: relative;
  padding-left: 35px;
  padding-top: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.coucou input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  height: 25px;
  width: 25px;
  border: 2px solid white;
  border-radius: 4px;
}

/* On mouse-over, add a grey background color */
.coucou:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.coucou input:checked ~ .checkmark {
  background-color: none;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.coucou input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.coucou .checkmark:after {
  left: 9px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.button {
  text-align: center;
}

.button input[type="submit"]{
  margin-top: 5vh;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 15px;
  background-color: #27AE60;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
