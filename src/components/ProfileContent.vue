<template>
    <div id="container">

        <section class="top">

            <h2 id="account"> MON COMPTE </h2>
            <h2 class="lang"> FR|EN </h2>

        </section>

        <section class="content">

            <div class="info1">

                <img src="cobra1.jpg" class="pp" width="100%" height="auto">
                <h3> Antoine DROUIN <br/>
                    <span style="font-weight: normal; font-size: 17px; color: #FF8800"> A2DW1 </span></h3>
                <button class="modif"> Faire une demande de modifications </button>

            </div>

            <div class="info2">
                <form>
                    <label> ID DEVINCI </label><br/>
                    <input disabled type="text" value="AD180628"><br/>

                    <label> NUMERO DE BADGE </label><br/>
                    <input disabled type="text" value="705655"><br/>

                    <label> ID. ADMINISTRATIF </label><br/>
                    <input disabled type="text" value="705655"><br/>

                    <label> INE/BEA </label><br/>
                    <input disabled type="text" value="2510083981D"><br/>

                    <label> ADRESSE </label><br/>
                    <textarea disabled name="adress" rows="3"> 47 rue Jules Ferry 91380 Chilly-Mazarin FRANCE </textarea><br/>

                    <label> TELEPHONE </label><br/>
                    <textarea disabled name="phone" rows="2"> 01XXXXXXXX 06XXXXXXXX </textarea><br/>
                </form>
            </div>

            <div class="info3">
                <form>
                    <label> IDENTIFIANT </label><br/>
                    <textarea disabled name="phone" rows="2"> antoine.drouin@edu.devinci.fr antoine.drouin@hotmail.fr </textarea><br/>

                    <label> NAISSANCE </label><br/>
                    <input disabled type="text" value="06/01/1999 Longjumeau"><br/>

                    <label> CONTACT D'URGENCE </label><br/>
                    <input disabled type="text" value="Monsieur Drouin 06XXXXXXXX Père"><br/>

                    <button class="modif2"> Faire une demande de modifications </button>
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

</style>
