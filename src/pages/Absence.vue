<template>
    <div class="allContent">
        <div class="allContentAbsence">
            <h1>Absences</h1>
                <div id="head" @click="justify()">
                    <p id="cours">Cours</p>
                    <p id="date">Date</p>
                </div>
                <div v-for="item in allAbsence" :key="item.id">
                    <DivAllAbsence :id="item.id" :intervenant="item.intervenant" :course="item.course" :days="item.days" :month="item.month" :year="item.year" :justify="item.justify" :reason="item.reason"></DivAllAbsence>
                </div>
        </div>
        <div class="totalAbsence">
        <p>Total :</p>
        <p id="total"></p>
        <p>absences</p>
        </div>
    </div>

</template>

<script>
import DivAllAbsence from '../components/DivAllAbsence.vue'

export default {
    name: 'Absence',
    props: {

    },
    components: {
        DivAllAbsence,
    },
    
    mounted() {
        for (let index = 1; index <= this.allAbsence.length; index++) {
            document.getElementById("total").innerHTML=(index)
        }

        
    },
    data(){
        return{
            allAbsence: [
                {id: 1, intervenant: "Pierre Grimaud", course: "Vue.js", days: "18", month: "02", year: "20", reason: "Promotion école", justify: true},
                {id: 2, intervenant: "Alexis Bougy", course: "Ux mobile", days: "09", month: "03", year: "20", reason: "Fraude", justify: false},
                {id: 3, intervenant: "Yoann Couhalan", course: "Symfony", days: "25", month: "04", year: "20"}
            ],
        }
    }
}

</script>

<style scoped>
.allContent{
    width: 83vw;
    position: absolute;
    left: 17vw;
    top: 0;
    padding: 25px 35px 35px 35px;
}
.allContentAbsence{
    font-family: 'Montserrat';
    color: white;
}
#head{
    display: flex;
    justify-content: space-around;
    padding: 30px 0px  0px 0;
    width: 100%;
}
#cours{
    position: relative;
    right: 12%;
}
h1{
    font-size: 20px;
    color: white;
    filter: opacity(0.5);
}
#total{
    color: white;
    padding: 0 5px;
}

.totalAbsence{
    justify-content: flex-end;
    display: flex;
    color: white;
    padding: 0 5%;
}
#date{
    position: relative;
    right: 19%;
}
</style>
