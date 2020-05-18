<template>

    <button class="present-btn-mobile">
        <p> JE SUIS PRÉSENT </p>
        <img
             src="../assets/clock.svg"
             alt="horloge"
             width="17px"
             height="17px"/> <span id="timer">15:00</span>
    </button>

</template>

<script>
    export default {
        name: "PresentButtonMobile"
    }

    method : {
        const startingMinutes = 15;

        let time = startingMinutes * 60;

        const timerEl = document.getElementById('timer');

        setInterval(updateTimer, 1000);

        function updateTimer() {

            const minutes = Math.floor(time / 60);
            let seconds = time % 60;

            seconds = seconds < 10 ? '0' + seconds : seconds;

            timerEl.innerHTML = `${minutes}:${seconds}`;
            time--;
        }
    }

</script>

<style scoped>

    .present-btn-mobile {
        display: none;
        padding: 17px 77px;
        background-color: #27AE60;
        border-radius: 4px;
        font-family: Montserrat, sans-serif;
        font-size: 20px;
        font-weight: bold;
        color: white;
        text-decoration: none;
        border: none;
    }

    @media screen and (max-width: 425px)
    {
        .present-btn-mobile {
            display: initial;
            width: 100%;
            margin-bottom: 40px;
            padding: 17px 0;
        }
    }

</style>
