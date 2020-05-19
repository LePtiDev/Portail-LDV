<template>
    <div class="container">
        <h2>Notes</h2>
        <div class="grid">
            <div class="row-one">
                <div class="section section-program">
                    <p class="section-title">PROGRAMMES</p>
                    <div class="allProgrammes">
                        <div v-for="program in this.program" :key="program.id">
                            <DivProgram :date="program.date" :name="program.name"></DivProgram>
                        </div>
                    </div>
                </div>
                <div class="space"></div>
                <div class="section section-graph"></div>
            </div>
            <div class="row-two">
                <p><span class="bold">NOTES :</span> Année 2 - Axe Développement Web (A2DW1)</p>
                <div class="bonus-button">
                    <p class="bold">PARTIE BONUS</p>
                    <p>Vous disposez de 5 points</p>
                </div>
            </div>
            <div class="row-three">
                <p class="semester bold">SEMESTRE 1</p>
                <div class="head">
                    <div class="section-name">
                        <img class="img-save" src="../assets/save.svg" alt="">
                        <p class="name bold">NATIF BACK</p>
                    </div>
                    <div class="check-modules">
                        <div class="average">
                            <p class="number-average">{{this.average}}</p>
                        </div>
                        <!-- condition pour tester si le module est validé-->
                        <div v-if="average >= 10">
                            <img class="validate" src="../assets/validate.svg" alt="">
                        </div>
                        <div v-if="average < 10">
                            <img class="validate" src="../assets/cross.svg" alt="">
                        </div>
                    </div>
                </div>
                <div v-for="item in marks" :key="item.id">
                    <DivAllMark :mark="item.mark" :score="item.score" :course="item.course" :professor="item.professor" :comment="item.comment"></DivAllMark>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import DivProgram from '../components/marks_components/DivProgram'
import DivAllMark from '../components/marks_components/DivAllMark'

export default {
    name: "Marks",
    components: {
        DivProgram,
        DivAllMark
    },
    props: {

    },

    data(){
        return{
            program : [
              {id: 1, date: "2019-2020", name: "A2DW1"},
              {id: 2, date: "2019-2020", name: "A1GR4"}
            ],

            marks : [
              {id: 1, mark: 14.00, score: "13.67 / 20", course: "Versionning/ IDE / Config interne", professor: "Pierre Grimaud", comment:"Très bon travail sur la configuration"},
              {id: 2, mark: 8.00, score: "14.10 / 20", course: "Base de donnée / Modélisation", professor: "Céline OULMI", comment:"Dommage, peu mieux faire, erreur MySQL"},
              {id: 3, mark: 15.50, score: "13.14 / 20", course: "PHP", professor: "Alexis BOUGY", comment:"Des facilités mais a su rester impliqué et interessé, bonne participation"},
              {id: 4, mark: 0.00, score: "13.67 / 20", course: "Mise en ligne / FTP", professor: "Pierre Grimaud :", comment:"Travail non rendu…"},
              {id: 5, mark: 18.00, score: "15.23 / 20", course: "Déploiement", professor: "Prof EPITECH", comment:"Très bon rapport"},
            ],
            average: 10,
        } 
    },

    mounted(){
        var total = 0;
        for(var i = 0; i < this.marks.length; i++){
            total = total + this.marks[i].mark
        }
        this.average = total / this.marks.length
    }
};
</script>


<style scoped>

/* general */
.container{
    position: relative;
    left: 17vw;
    top: 0;
    z-index: 0;
    background-color: #121212;
    padding: 25px 35px 35px 35px;
    min-height: 100vh;
    width: 83vw;
}

h2{
    font-size: 20px;
    color: white;
    filter: opacity(0.5);
    margin-bottom: 40px;
}

.bold{
    font-weight: 600;
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

/* grid */

.grid{
    width: 100%;
    height: 100vh;
}

/* rows */

.row-one{
    width: 100%;
    height: 230px;
    margin-bottom: 3vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
}

.row-two{
    width: 100%;
    height: 120px;
    background-color: #242424;
    margin-bottom: 3vw;
    padding: 25px 80px 25px 80px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
}

.row-three{
    width: 100%;
    min-height: 500px;
    background-color: #242424;
    margin-bottom: 3vw;
    padding: 35px 95px 35px 95px;
    position: relative;
    border-radius: 4px;
}

/* sections */

.semester{
    font-size: 20px;
    position: absolute;
    right: 0;
    top: -30px;
}

.space{
    height: 100%;
    width: 3vw;
}

.section{
    height: 100%;
    background-color: #242424;
    padding: 25px;
}

/* program */

.section-program{
    width: 38%;
    padding: 25px 78px 25px 78px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.section-graph{
    width: 60%;
}

/* bonus */

.bonus-button{
    height: 50px;
    width: 180px;
    background-color: #EE7F01;
    font-size: 12px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

/* head of marks section */

.head{
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}

.section-name{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}

.name{
    margin: 2px 0px 0px 5px;
    font-size: 20px;
}

.check-modules{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 5px 0px 0px 5px;
}

.average{
    height: 32px;
    width: 114px;
    border: solid 1px white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 20px 0px 0px;
}

.validate{
    height: 25px;
}

</style>
