<template>
    <div class="container-marks" v-bind:class="[mark > 10 ? 'div-good' : 'div-bad']">
        <p class="contenu course">{{course}}</p>
        <p class="contenu mark" v-bind:class="[mark > 10 ? 'good' : 'bad']">{{mark}} / 20</p>
        <p class="contenu date">{{comment}}</p>
    </div>
</template>

<script>
export default {
    name: 'DivMarks',
    props: {
        date: String,
        course: String,
        mark: Number,
        comment: String,
    },
}
</script>

<style scoped>

.container-marks{
    max-height: 300px;
    width: 100%;
    background-color: #0F0F0F;
    border-radius: 4px;
    padding: 15px;
    margin: 20px 0px 0px 0px;
}

.contenu{
    margin: 0px 0px 2px 0px;
    font-size: 15px
}

.mark{
    font-weight: 600;
    font-size: 20px;
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