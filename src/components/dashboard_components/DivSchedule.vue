<template>
    <div class="container-course">
        <p class="contenu date">{{date}}</p>
        <p class="contenu room">{{room}}</p>
        <p class="contenu course">{{course}}</p>
    </div>
</template>

<script>
export default {
    name: 'DivSchedule',
    props: {
        student: String,
        date: String,
        room: String,
        course: String
    },
}
</script>

<style scoped>

.container-course{
    height: auto;
    width: 100%;
    background-color: #0F0F0F;
    border-radius: 4px;
    padding: 20px;
    margin: 20px 0px 0px 0px;
}

.contenu{
    margin: 0px 0px 2px 0px;
}

</style>