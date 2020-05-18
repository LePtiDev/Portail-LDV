<template>

    <div id="container">
        <section class="top">
            <p id="presence"> RELEVÉ DE PRÉSENCE </p>
        </section>

        <section class="content">

            <div class="datas">

                <div class="class">
                    <h2> COURS </h2>
                    <h3 id="pos-mobile-classroom"> Salle : <span style="color: #FF8800">E252</span> </h3>
                    <div class="paddg">
                        <h3 id="pos-pc-classroom"> Salle : <span style="color: #FF8800">E252</span> </h3>
                        <h4> PROJET SYMFONY-ANGULAR </h4>
                    </div>
                </div>

                <div class="schedule">
                    <h2> HORAIRE </h2>
                    <div class="paddg_spec">
                        <h3> 8h00 - 13H00 </h3>
                    </div>
                </div>

                <div class="teacher">
                    <h2> INTERVENANT </h2>
                    <div class="paddg">
                        <h3> YOANN COUALAN </h3>
                        <h4> MAIL : <span style="text-decoration: underline">Yoann.coualan@edu.devinci.fr</span> </h4>
                    </div>
                </div>

            </div>

            <div class="info">
                <p id="i"> Suite au règlement intérieur de l’établissement,
                    vous devez vous mettre présent lorsque vous êtes dans la salle ! </p>
            </div>

            <present-button-pc></present-button-pc>

        </section>

        <present-button-mobile></present-button-mobile>
    </div>

</template>

<script>
    import PresentButtonPc from "./PresentButtonPc";
    import PresentButtonMobile from "./PresentButtonMobile";
    export default {
        name: "PresenceContent",
        components: {PresentButtonMobile, PresentButtonPc}
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
        background-color: #121212;
        color: #ffffff;
    }

    #container {
        background-color: #121212;
        margin: 0 3vw;
        font-family: Montserrat, sans-serif;
        font-weight: bold;
        /*border: 1px solid white;*/
    }

    .top {
        /*border: 1px solid green;*/
        padding: 40px 0;
        font-size: 20px;
    }

    #presence {
        opacity: 50%;
    }



    .content {
        background-color: #242424;
        text-align: center;
        padding: 100px 0;
        /*border: 1px solid orange;*/
        box-shadow: 0 16px 24px rgba(0, 0, 0, 0.2);
    }

    .datas {
        display: grid;
        grid-template-columns: auto 325px 325px 325px auto;
        /*border: 1px solid red;*/
    }

    .class {
        display: grid;
        align-content: space-evenly;
        height: 200px;
        /*border: 1px solid #3e3e3e;*/
        border-right: 1px solid #121212;
        grid-column: 2/3;
    }

    #pos-mobile-classroom {
        display: none;
    }


    .schedule {
        display: grid;
        align-content: space-evenly;
        height: 200px;
        /*border: 1px solid #3e3e3e;*/
        border-right: 1px solid #121212;
        grid-column: 3/4;
    }

    .teacher {
        display: grid;
        align-content: space-evenly;
        height: 200px;
        /*border: 1px solid #3e3e3e;*/
        grid-column: 4/5;
    }
    h2 {
        font-size: 22px;
    }
    h3 {
        font-size: 17px;
    }
    .paddg_spec{
        margin-bottom: 13px;
    }

    h4 {
        font-size: 12px;
        font-weight: normal;
    }

    .info {
        /*border: 1px solid purple;*/
        font-size: 14px;
    }
    #i {
        padding: 70px;
    }


    /* fonts 20-22-17-12-14 */



    @media screen and (max-width: 1024px)
    {

        .content {
            padding: 50px 0 50px;
        }

        .datas {
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: auto auto auto;
            /*border: 1px solid red;*/
        }

        .class {
            height: 150px;
            margin: 0 12%;
            border-right: none;
            border-bottom: 1px solid #111111;
            /*border: 1px solid #3e3e3e;*/
            grid-row: 2/3;
            grid-column: 1/5;
        }
        #pos-mobile-classroom {
            display: initial;
        }
        #pos-pc-classroom {
            display: none;
        }

        .schedule {
            height: 150px;
            border-right: none;
            margin: 0 12%;
            border-bottom: 1px solid #111111;
            /*border: 1px solid #3e3e3e;*/
            grid-row: 1/2;
            grid-column: 1/5;
        }


        .teacher {
            height: 150px;
            border-right: none;
            margin: 0 12%;
            /*border: 1px solid #3e3e3e;*/
            grid-row: 3/4;
            grid-column: 1/5;
        }

    }

    @media screen and (max-width: 425px)
    {

        #container {
            text-align: center;
        }

        .content {
            margin: 20px 0 20px;
            padding: 0;
        }

        .top {
            display: none;
        }

        #i {
            font-size: 10px;
            font-weight: normal;
            padding: 40px 5%;
        }

    }

</style>
