<template>
    <div class="bouton">
        <p>JE SUIS PRÉSENT</p>
        <div class=timer>
            <img src="../assets/horloge.png" alt="">
            <p class="time">4:39</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CheckButton',
    props: {
        student: String,
    },
    methods: {

    }
}
</script>

<style scoped>

.bouton{
    height: 94px;
    width: 100%;
    background-color: #27AE60;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
}

.timer{
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
}

.time{
    margin-left: 5px;
}

</style>