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
</script>

<style scoped>

    .present-btn-mobile {
        display: none;
        padding: 17px 77px;
        background-color: #27AE60;
        border-radius: 3px;
        font-family: Montserrat, sans-serif;
        font-size: 15px;
        font-weight: bold;
        color: white;
        text-decoration: none;
        border: none;
    }

    @media screen and (max-width: 450px)
    {
        .present-btn-mobile {
            display: initial;
            width: 100%;
            margin-bottom: 40px;
            padding: 17px 0;
        }
    }

</style>
