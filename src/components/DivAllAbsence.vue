<template>
    <div class="allContentAbsence">
        
            <div class="contentAbsence">
            <div id="index">{{id}}</div>
            <div class="allInfo">
                <div id="infoCourse">
                <p id="course">{{course}}<p>
                <p>{{intervenant}}</p>
                </div>
                <p>{{days}}/{{month}}/{{year}}</p>
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
        days: Number,
        month: Number,
        year: Number,
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
    padding: 0 10%;
}
#course{
    font-weight: bold;
    padding-bottom: 1%;
}
.allInfo{
    display: flex;
    justify-content: space-between;
    padding: 0px 4% 0;
    width: 51vw;
    align-items: center;
}
</style>