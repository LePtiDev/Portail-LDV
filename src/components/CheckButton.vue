<template>
    <div class="bouton">
        <p>JE SUIS PRÉSENT</p>
        <div class=timer>
            <img src="../assets/horloge.png" alt="">
            <p class="time">{{this.minutes}} : {{this.seconds}}0</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CheckButton',
    props: {
        student: String,
    },

    data() {
        return {
            show: "15:00",
            minutes: 15,
            seconds: 0,
        }
    },
}
</script>

<style scoped>

.bouton{
    height: 90px;
    width: 100%;
    background-color: #27AE60;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    cursor: pointer;
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