<template>
    <div class="container-absence" v-bind:class="[status ? 'div-good' : 'div-bad']">
        <p class="contenu date">{{date}}</p>
        <p class="contenu course">{{course}}</p>
        <p class="contenu reason" v-bind:class="[status ? 'good' : 'bad']">{{reason}}</p>
    </div>
</template>

<script>
export default {
    name: 'DivAbsence',
    props: {
        date: String,
        reason: String,
        course: String,
        status: Boolean
    },
}
</script>

<style scoped>

.container-absence{
    height: auto;
    width: 100%;
    background-color: #0F0F0F;
    border-radius: 4px;
    padding: 15px;
    margin: 20px 0px 0px 0px;
}

.contenu-absence{
    width: 98%;
    height: 100%;
}

.contenu{
    margin: 0px 0px 2px 0px;
    font-size: 15px
}

.reason{
    font-weight: 600;
}

.good{
    color: #27AE60;
}

.bad{
    color: #E74C3C;
}

.div-good{
    border-right: 6px solid #27AE60;
}

.div-bad{
    border-right: 6px solid #E74C3C;
}

</style>