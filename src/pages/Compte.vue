<template>
    <div id="container">

        <section class="top">

            <h2 id="account"> MON COMPTE </h2>
            <h2 class="lang"> FR|EN </h2>

        </section>

        <section class="content">

            <div class="info1">

                <img src="../assets/antoine-drn.jpg" class="pp" width="100%" height="auto">
                <h3> Antoine DROUIN <br/>
                    <span style="font-weight: normal; font-size: 14px; color: #FF8800"> A2DW1 </span></h3>
                <button class="modif"> Faire une demande de modifications </button>

            </div>

            <div class="info2">
                <form>
                    <div class="label"> ID DEVINCI </div>
                    <div class="input"> AD180628 </div>

                    <div class="label"> NUMÉRO DE BADGE </div>
                    <div class="input"> 705655 </div>

                    <div class="label"> ID. ADMINISTRATIF </div>
                    <div class="input"> 705655 </div>

                    <div class="label"> INE/BEA </div>
                    <div class="input"> 2510083981D </div>

                    <div class="label"> ADRESSE </div>
                    <div class="input"> 47 rue Jules Ferry <br/>
                        91380 Chilly-Mazarin <br/>
                        FRANCE </div>

                    <div class="label"> TÉLÉPHONE </div>
                    <div class="input"> 01XXXXXXXX <br/>
                        06XXXXXXXX </div>
                </form>
            </div>

            <div class="info3">
                <form>
                    <div class="label"> IDENTIFIANT </div>
                    <div class="input"> antoine.drouin@edu.devinci.fr <br/>
                        antoine.drouin@hotmail.fr </div>

                    <div class="label"> NAISSANCE </div>
                    <div class="input"> 06/01/1999 Longjumeau </div>

                    <div class="label"> CONTACT D'URGENCE </div>
                    <div class="input"> Monsieur Drouin <br/>
                        06XXXXXXXX <br/>
                        Père </div>

                </form>


            </div>

        </section>

        <div id="btn-center"><button class="modif2"> Faire une demande de modifications </button></div>

    </div>
</template>

<script>
    export default {
        name: "Compte"
    }
</script>

<style scoped>
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }






    #container {
        width: 100%;
        margin: 0 2vw;
        font-weight: bold;
        /*border: 1px solid white;*/
    }


    .top {
        padding: 30px 0;
        display:flex;
        justify-content: space-between;
        /*border: 1px solid green;*/
    }

    #account {
        /*float: left;*/
        color: rgba(255,255,255,0.51)
    }

    .lang {
        /*float: right;*/
        font-weight: bold;
        font-size: 15px;
    }



    .content {         /*base du grid pour les infos*/
        display: grid;
        grid-template-columns: auto 18% 25% 33% auto;
        column-gap: 40px;
        padding-top: 5vh;
        /*border: 1px solid red;*/
    }

    .info1 {
        grid-column: 2/3;
        height: 100%;
        padding-top: 60px;
        text-align: center;
        /*border: 1px solid white;*/
    }

    .pp {
        border: 2px solid #FF8800;
        border-radius: 50%;
    }

    h3 {
        margin: 30px 0;
    }

    .modif {
        background-color: #242424;
        padding: 20px 5px;
        border: 1px solid #FF8800;
        border-radius: 3px;
        font-family: Montserrat, sans-serif;
        font-weight: bold;
        font-size: 13px;
        color: #FFFFFF;
    }

    .info2 {
        grid-column: 3/4;
        /*border: 1px solid white;*/
    }


    .info3 {
        grid-column: 4/5;
        /*border: 1px solid white;*/
    }

    .input {
        width: 85%;
        margin: 5px 0 30px 0;
        padding: 7px 7px;
        background-color: #242424;
        border-style: none;
        border-radius: 3px;
        font-family: Montserrat, sans-serif;
        font-size: 15px;
        font-weight: normal;
        color: #FFFFFF;
        overflow: auto;
    }

    h3, #account, .info2 .label, .info3 .label {
        font-weight: bold;
        font-size: 15px;
    }

    /*Bouton qui s'affiche en fonction de taille de l'écran*/
    .modif2 {
        background-color: #242424;
        padding: 20px 5px;
        border: 1px solid #FF8800;
        border-radius: 3px;
        font-family: Montserrat, sans-serif;
        font-weight: bold;
        font-size: 13px;
        color: #FFFFFF;
        display: none;
    }


    @media screen and (max-width: 720px) {

        .modif {
            display: none;
        }

        #account {
            display: none;
        }

        .modif2 {
            display: initial;
            width: 100%;
            padding: 20px 20px;
        }

        .top {
            padding: 0;
            margin-bottom: 5vh;
        }


        .content {
            display: flex;
            flex-direction: column;
        }

        .info1 {
            width: 50%;
            padding: 0;
            margin: 0 auto;
        }


        .input {
            width: 100%;
            padding: 7px 5px;
        }

        #btn-center {
            width: 100%;
            margin-bottom: 40px;
        }
    }
</style>
