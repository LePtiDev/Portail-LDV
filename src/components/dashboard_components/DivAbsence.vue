<template>
    <div class="container-absence">
        <div class="contenu-absence">
            <p class="contenu date">{{date}}</p>
            <p class="contenu course">{{course}}</p>
            <p class="contenu reason">{{reason}}</p>
        </div>
        <div class="justify"></div>
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
    padding: 20px;
    margin: 20px 0px 0px 0px;
    display: flex;
    flex-direction: row;
    /* border-right: 4px solid red; */
}

.contenu-absence{
    width: 10px;
    height: 100%;
}

.justify{
    height: 100%;
    width: 2px;
    background-color: red;
}
.contenu{
    margin: 0px 0px 2px 0px;
}

</style>