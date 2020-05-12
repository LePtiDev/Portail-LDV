<template>
    <div id="container">

        <section class="top">

            <h2 id="account"> MON COMPTE </h2>
            <h2 class="lang"> FR|EN </h2>

        </section>

        <section class="content">

            <div class="info1">

                <img src="../assets/cobra1.jpg" class="pp" width="100%" height="auto">
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







    body {
        font-family: Montserrat, sans-serif;
        background-color: #121212;  /*fond noir*/
        color: #FFFFFF;
    }


    .top {
        margin-bottom: 10vh;
        padding: 4vh 1vw;
        border: 1px solid green;
    }

    #account {
        float: left;
        color: rgba(255,255,255,0.51)
    }

    .lang {
        float: right;
        font-weight: bold;
        font-size: 17px;
    }



    .content {         /*base du grid pour les infos*/
        display: grid;
        grid-template-columns: 8% 18% 25% 29% 15%;
        column-gap: 40px;
        border: 1px solid red;
    }

    .info1 {
        grid-column: 2/3;
        text-align: center;
        border: 1px solid white;
    }

    .pp {
        border: 2px solid #FF8800;
        border-radius: 50%;
    }

    h3 {
        margin: 50px 0;
    }

    .modif {
        background-color: #242424;
        padding: 20px 5px;
        border: 2px solid #FF8800;
        border-radius: 4px;
        font-family: Montserrat, sans-serif;
        font-weight: bold;
        font-size: 16px;
        color: #FFFFFF;
    }

    .info2 {
        grid-column: 3/4;
        border: 1px solid white;
    }


    .info3 {
        grid-column: 4/5;
        border: 1px solid white;
    }

    input {
        width: 85%;
        margin: 5px 0 35px 0;
        padding: 7px 5px;
        background-color: #242424;
        border-style: none;
        border-radius: 4px;
        font-family: Montserrat, sans-serif;
        color: #FFFFFF;
    }

    textarea {
        width: 85%;
        margin: 5px 0 35px 0;
        padding: 7px 5px;
        background-color: #242424;
        border-style: none;
        border-radius: 4px;
        font-family: Montserrat, sans-serif;
        color: #FFFFFF;
    }


    h3, #account, .info2 label, .info3 label {
        font-weight: bold;
        font-size: 20px;
    }

    /*Bouton qui s'affiche en fonction de taille de l'écran*/
    .modif2 {
        background-color: #242424;
        padding: 20px 5px;
        border: 2px solid #FF8800;
        border-radius: 4px;
        font-family: Montserrat, sans-serif;
        font-weight: bold;
        font-size: 16px;
        color: #FFFFFF;
        display: none;
    }


    @media screen and (max-width: 720px)
    {

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
            margin-bottom: 5vh;
        }



        .content {
            display: flex;
            flex-direction: column;
            padding: 0 4vw;
        }

        .info1 {
            width: 50%;
            margin: 0 auto;
        }




        input {
            width: 100%;
            margin: 5px 0 35px 0;
            padding: 7px 5px;
            background-color: #242424;
            border-style: none;
            border-radius: 4px;
        }

        textarea {
            width: 100%;
            margin: 5px 0 35px 0;
            padding: 7px 5px;
            background-color: #242424;
            border-style: none;
            border-radius: 4px;
        }

        #btn-center {
            padding: 0 4vw;
            text-align: center;
        }
    }
</style>
