<template>
    <div class="allContentAbsence">
        
            <div class="contentAbsence">
            <div id="index" @click="calcul()">{{id}}</div>
            <div class="allInfo">
                <div id="infoCourse">
                <p id="course">{{course}}<p>
                <p id="prof">{{intervenant}}</p>
                </div>
                <p id="date">{{days}}/{{month}}/{{year}}</p>
                <div id="infoAbsence" class="validate" v-if = "justify === true">
                    <p id="absence">Justifié</p>
                    <p id="motif" v-bind:class="[justify ? 'show' : 'hide' ]">{{reason}}</p>
                </div>
                <div id="infoAbsence" class="absent" v-else-if = "justify === false">
                    <p id="absence">Non justifié</p>
                    <p id="motif" v-bind:class="[justify ? 'show' : 'hide' ]">{{reason}}</p>
                </div>
                <div id="infoAbsence" class="waiting" v-else>
                    <p id="absence">En Attente</p>
                    <p id="motif" v-bind:class="[justify ? 'show' : 'hide' ]">{{reason}}</p>
                </div>
            </div>
            </div>
    </div>
</template>

<script>

export default {
    name: 'DivAllAbsence',
    props: {
        intervenant: String,
        id: Number,
        course: String,
        days: String,
        month: String,
        year: String,
        reason: String,
        justify: Boolean,
    },
    
    
}

</script>

<style scoped>
.allContentAbsence{
    font-family: 'Montserrat';
    color: white;
}

.contentAbsence{
    background-color: #272727;
    margin: 30px 0px 0px 0px;
    width: 100%;
    height: 15vh;
}
#index{
    width: 30px;
    /* height: 30px; */
    padding: 5px 1px;
    text-align: center;
    border-radius: 10px;
    border: solid 1px white;
}
#infoCourse{
    padding: 0 0 0 9%;
    width: 30vw;
}
#course{
    font-weight: bold;
    width:100%;
    padding-bottom: 1%;
}
#prof{
    width: 100%;
}
.allInfo{
    display: flex;
    justify-content: space-between;
    padding: 0px 4% 0;
    width: 64vw;
    align-items: center;
}
#date{
    padding: 0 0 0 15%;
}
#infoAbsence{
    position: relative;
    left: 15%;
    width: 15%;
    text-align: center;
    padding: 0 25px;
}
#absence{
    text-transform: uppercase;
}
#motif{
    font-size: 11px;
    padding-top: 5px;
}
.hide{
    display: none;
}
.validate{
    background-color: #27AE60;
    padding: 10px 25px !important;
    border-radius: 10px;
}
.absent{
    background-color: #E74C3C;
    padding: 10px 25px !important;
    border-radius: 10px;
}
.waiting{
    color: #EE7F01;
}
</style>