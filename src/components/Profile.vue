<template>
    <div id="container">
        <section class="top">
            <h2> MON COMPTE </h2>
            <h2> FR|EN </h2>
        </section>
        <section class="content">
            <div id="info1">
                <div class="pp"></div>
                <h3> Antoine DROUIN </h3>
                <div class="class"></div>
            </div>
            <div id="info2">
                <form>
                    <label> id devinci </label>
                    <input type="text" value="AD180628">

                    <label> numéro de badge </label>
                    <input type="text">

                    <label> id.administratif </label>
                    <input type="text">

                    <label> ine/bea </label>
                    <input type="text">

                    <label> adresse </label>
                    <input type="text">

                    <label> téléphone </label>
                    <input type="text">
                </form>
            </div>
            <div id="info3">
                <form>
                    <label> identifiant </label>
                    <input type="text">

                    <label> naissance </label>
                    <input type="text">

                    <label> contact d'urgence </label>
                    <input type="text">

                </form>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>
    body {
        color: white;
    }
    /*#container {
        display:;
    }*/
    .content {
        display: grid;
        grid-template-colums: 10% 15% 55% 15%;
    }
</style>