<template>
    <div class="container">
        <h2>TABLEAU DE BORD</h2>
        <div class="grid">
            <div class="rows row-one">
                <div class="section presence">
                    <div>
                        <p class="section-title">RELEVÉ DE PRÉSENCE</p>
                        <p class="section-underTitle">Devlab S2 - 10/03</p>
                    </div>
                    <CheckButton/>
                </div>
                <div class="space"></div>
                <div class="section information">
                    <p class="section-title">🦠 INFORMATION IMPORTANTE COVID-19</p>
                    <p>
                        Afin d’anticiper au mieux les besoins de la communauté du Pôle Léonard de Vinci, 
                        une cellule de prévention et de suivi a été créée au niveau de la direction générale, 
                        elle se réunit de façon très régulière. Les équipes de la direction générale sont en 
                        étroite relation avec celles du Ministère de l’Enseignement Supérieur, de la Recherche 
                        et de l’Innovation et de la Préfecture, afin d’accompagner les étudiants, professeurs 
                        et collaborateurs dans ce contexte et leur proposer une solution adaptée à leur situation.
                        Pour toutes questions concernant le coronavirus, nous vous prions d’envoyer un mail 
                        à l’adresse : coronavirus@devinci.fr
                    </p>
                </div>
            </div>
            <div class="rows row-two">
                <div class="section edt">
                    <p class="section-title marg-schedule">EMPLOI DU TEMPS DU JOUR</p>
                    <div v-for="item in this.course" :key="item.id">
                        <DivSchedule :room="item.room" :course="item.course" :date="item.date"></DivSchedule>
                    </div>
                    <a class="see-more" href="/#/EmploieDuTemps">Voir mon emploi du temps</a>
                </div>
                <div class="space"></div>
                <div class="section absence">
                    <p class="section-title marg-schedule">ABSENCES RÉCENTES</p>
                    <div v-for="item in this.absence" :key="item.id">
                        <DivAbsence :reason="item.reason" :course="item.course" :date="item.date" :status="item.status"></DivAbsence>
                    </div>
                    <a class="see-more" href="/#/Absence">Voir toutes mes absences</a>
                </div>
                <div class="space"></div>
                <div class="section mark">
                    <p class="section-title marg-schedule">NOTES RÉCENTES</p>
                    <div v-for="item in this.marks" :key="item.id">
                        <DivMarks :course="item.course" :mark="item.mark" :comment="item.comment"></DivMarks>
                    </div>
                    <a class="see-more" href="/#/Marks">Voir toutes mes notes</a>
                </div>
            </div>
            <div class="rows row-three">
                <div class="section contact">
                    <p class="section-title title-contact">VOS CONTACTS IMPORTANTS</p>
                    <div class="contact-for">
                        <div v-for="item in this.contacts" :key="item.id">
                            <DivContact :name="item.name" :post="item.post" :axe="item.axe" :email="item.email" :number="item.number" :picture="item.picture"></DivContact>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import CheckButton from '../components/CheckButton' 
import DivSchedule from '../components/dashboard_components/DivSchedule'
import DivAbsence from '../components/dashboard_components/DivAbsence'
import DivMarks from '../components/dashboard_components/DivMarks'
import DivContact from '../components/dashboard_components/DivContact'

export default {
  name: "Dashboard",
  components: {
      CheckButton,
      DivSchedule,
      DivAbsence,
      DivMarks,
      DivContact
  },
  props: {
    msg: String
  },

  data(){
      return {
          course : [
              {id: 1, date: "10:45 - 13:15", course: "General English [LV]", room: "[E 253] Marianna PAVLOVA"},
              {id: 2, date: "15:00 - 17:00", course: "[E 252] Alexis BOUGY", room: "Devlab S2 [HP]"}
          ],

          absence : [
              {id: 1, date: "10-03-2020", course: "General English", status: false, reason: "Absent"},
              {id: 2, date: "31-01-2020", course: "UX / Strat / Business", status: true, reason: "Excusee par scolarité"},
              {id: 3, date: "06-01-2020", course: "Sport", status: true, reason: "Dispense de sport"},
          ],

          marks : [
              {id: 1, course: "DEVLAB S1 - Alexis BOUGY", mark: 15, comment: "Bon document de rendu, beaucoup d’explications fournies ! Le prototype sous xd est très bien. Bon avancement technique, je note cependant un deséquilibre dans la répartition des charges de travail, cela sera votre axe d’amélioration au S2"},
              {id: 2, course: "STRAT MARKETING - Julien LEBRETON", mark: 0, comment: "Absent"},
              {id: 3, course: "MISE EN LIGNE FTP - Pierre GRIMAUD", mark: 19, comment: "Très bon rapport !"},
          ],

          contacts : [
              {id: 1, name: "Karine MOUSDIK", post: "Coordinatrice Pédagogique", axe: "Axe développement web", email: "karine.mousdik@devinci.fr", number: "+33 1 41 16 75 55", picture: "karine.png"},
              {id: 2, name: "Virak MEY", post: "Responsable du département", axe: "Axe développement web", email: "virak.mey@devinci.fr", number: "+33 1 41 16 72 38", picture: "virak.png"},
              {id: 3, name: "Alexis BOUGY", post: "Professeur Délégué", axe: "Axe développement web", email: "alexis.bougy@devinci.fr", number: "+33 1 41 16 75 26", picture: "alexis.png"},
          ]
      }
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

.see-more{
    position: absolute;
    bottom: 30px;
    right: 30px;
    font-size: 12px;
    text-decoration: none;
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
    height: 600px;
}

.row-three{
    height: 250px;
}

/* sections */
.section{
    padding: 30px;
    background-color: #242424;
    height: 100%;
    border-radius: 4px;
    position: relative;
}

.space{
    height: 100%;
    width: 2vw;
}

.presence{
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
}

.information{
    width: 68%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
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

/* section emploi du temps */

.marg-schedule{
    margin-bottom: 40px;
}

/* section contact */

.title-contact{
    margin-bottom: 30px;
}

.contact-for{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

</style>
