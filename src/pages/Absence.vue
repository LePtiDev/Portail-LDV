<template>
    <div class="allContent">
    <div class="allContentAbsence">
    <h1>Absences</h1>
        <div id="head">
            <p>Cours</p>
            <p>Date</p>
        </div>
        <div v-for="item in allAbsence" :key="item.id">
            <DivAllAbsence :id="item.id" :intervenant="item.intervenant" :course="item.course" :days="item.days" :month="item.month" :year="item.year"></DivAllAbsence>
        </div>
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
    data(){
        return{
            allAbsence: [
                {id: 1, intervenant: "Pierre Grimaud", course: "Vue.js", days: "18", month: "02", year: "20"},
                {id: 2, intervenant: "Alexis Bougy", course: "Ux mobile", days: "09", month: "03", year: "20"},
                {id: 3, intervenant: "Yoann Couhalan", course: "Symfony", days: "25", month: "04", year: "20"}
            ],
        }
    }
}

</script>

<style scoped>

.allContentAbsence{
    font-family: 'Montserrat';
    color: white;
}
#head{
    display: flex;
    justify-content: space-between;
    padding: 30px 12% 0;
    width: 45vw;
}
h1{
    padding: 15px 0 0 30px;
}

</style>