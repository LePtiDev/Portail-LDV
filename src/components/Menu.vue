<template>
    <div id="menu">
        <div class="logo">
            <img src="./../assets/IIMLogo.png">
        </div>
        <div class="direction">
            <div id="button">
                <img src="./../assets/TableauxDeBordIcone.png">
                <a> Tableaux De Bord </a>
            </div>
            <hr id="top">
            <p class="categorie"> Catégories </p>

            <div id="buttons">
                <img src="./../assets/empreinte.png">
                <a id="desktop"> Relevé de présence </a>
                <a id="mobile"> Présence </a>
            </div>

            <div id="buttons">
                <img src="./../assets/calendrier.png">
                <a id="desktop"> Emploie du temps </a>
                <a id="mobile"> EDT </a>
            </div>

            <div id="buttons">
                <img src="./../assets/loupe.png">
                <a> Notes </a>
            </div>

            <div id="buttons">
                <img src="./../assets/horloge.png">
                <a>Absences</a>
            </div>

            <div id="buttons">
                <img src="./../assets/reglage.png">
                <a id="desktop"> devinci online</a>
                <a id="mobile"> DVO </a>

            </div>

            <div id="buttons">
                <img src="./../assets/oeil.png">
                <a>Promotion école</a>
            </div>
            <hr id="medium">
            
            <p class="service"> Services </p>

            <div id="buttons">
                <img src="./../assets/partage.png">
                <a id="desktop">Occupation des salles</a>
                <a id="mobile"> Salles </a>
            </div>

            <div id="buttons">
                <img src="./../assets/avion.png">
                <a>International</a>
            </div>
            <hr id="bottom">

            <p class="service"> Divers </p>

            <div id="buttons">
                <img src="./../assets/croix.png">
                <a href="https://google.fr">Ressources</a>                
            </div>

        <div class="footer">
        <div class="etudiant">
            <img src="./../assets/Puech-Antoine.jpg" id="photoProfil">
            <p id="nom">Antoine Puech</p>
        </div>
        <p id="copyright"> ALV Online - 2020 © Léonard de Vinci </p>
        </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'Menu',
        props: {
            student: String,
        },
        
    }
</script>

<style scoped>

#menu {
    width: 21%;
    height: 100vh;
    background-color: #252C48;
    font-family: 'Montserrat';
    color: #ffffff;
}
#top {
    margin: -10px 0;
    border-width: 0.5px;
}

#medium {
    margin: 10px 0;
    border-width: 0.5px;
}

#bottom {
    border-width: 0.5px;
}

.logo {
    text-align: center;
}

.logo img {
    width: 75%;
    margin-top: 20px;
}

.direction{
    margin-top: 25px;
    text-transform: uppercase;    
}

#button {
    display: flex;
    align-items: center;
    padding: 0 10%;
    margin: 15px 0;
}

#mobile {
    display: none;
}

#button a{
    padding: 0 10px;
    font-size: 15px;
    font-weight: bold;
}

#button img {
    width: 18px;
}

#buttons {
    display: flex;
    align-items: center;
    padding: 0 10%;
    height: 34px;
}

#buttons a{
    padding: 0 10px;
    font-size: 15px;
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
}

#buttons img {
    width: 18px;
}

.categorie{
    margin-bottom: 5px;
    margin-top: 25px;
    font-size: 10px;
    padding: 0 20%;
    color: lightgrey;
    text-transform: capitalize;
}

.service{
    margin-bottom: 5px;
    margin-top: 10px;
    font-size: 10px;
    padding: 0 20%;
    color: lightgrey;
    text-transform: capitalize;
}

.etudiant {
    display: flex;
    /* justify-content: center; */
    /* margin-top: 20%; */
    position: absolute;
    bottom: 50px;
    align-items: center;
    left: 50px;
}

.etudiant #photoProfil {
    width: 5%;
    border-radius: 100px;
    height: 15%;
    margin: 0 15px;
}

.etudiant #nom {
    padding: 0 5px;
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 13px;
    text-transform: none;
}

#copyright {
    font-size: 12px;
    color: #ffffff;
    opacity: 50%;
    text-align: center;
    position: absolute;
    bottom: 15px;
    left: 30px;
}

/* responsive design here */

@media screen and (min-width: 790px) and (max-width: 1120px) {
    #button a{
    font-size: 10px;
    }
    #buttons a{
        font-size: 10px;
    }
    #copyright{
        font-size: 9px;
        color: #ffffff;
        opacity: 50%;
        text-align: center;
        position: absolute;
        bottom: 15px;
        left: 14px;
    }
    .etudiant {
        left: 10px;
    }
}
@media screen and (min-width: 601px) and (max-width: 789px) {
    #button a{
    font-size: 8px;
    }
    #buttons a{
        font-size: 8px;
        line-height: 14px;
    }
    #copyright{
        font-size: 6px;
        color: #ffffff;
        opacity: 50%;
        text-align: center;
        position: absolute;
        bottom: 15px;
        left: 16px;
    }
    .etudiant {
        left: 10px;
    }
    .etudiant #nom {
        font-size: 10px;
    }
    .etudiant #photoProfil {
        margin: 0 10px;
    }
}
@media screen and (min-width: 380px) and (max-width: 600px) {
    #button a{
        font-size: 7px;
    }
    #buttons a{
        font-size: 6px;
    }
    #button img{
        width: 10px;
    }
    #buttons img{
        width: 10px;
    }
    #desktop {
        display: none;
    }
    #mobile{
        display: initial;
    }
    #buttons{
        height: 32px;
    }
    #copyright{
        font-size: 4px;
        color: #ffffff;
        opacity: 50%;
        text-align: center;
        position: absolute;
        bottom: 15px;
        left: 3px;
    }
    .etudiant {
        left: 5px;
    }
    .etudiant #nom {
        font-size: 6px;
    }
    .etudiant #photoProfil {
        margin: 0 2px;
    }
}
@media screen and (min-width: 340px) and (max-width: 379px) {
    #button a{
        font-size: 6px;
        padding: 0 5px;
    }
    #buttons a{
        font-size: 6px;
        padding: 0 5px;
    }
    #button img{
        width: 8px;
    }
    #buttons img{
        width: 8px;
    }
    #desktop {
        display: none;
    }
    #mobile{
        display: initial;
    }
    #buttons{
        height: 30px;
    }
    .service{
        font-size: 8px;
    }
    .categorie{
        font-size: 8px
    }
    #copyright{
        font-size: 3.3px;
        color: #ffffff;
        opacity: 50%;
        text-align: center;
        position: absolute;
        bottom: 15px;
        left: 5px;
    }
    .etudiant {
        left: 5px;
    }
    .etudiant #nom {
        font-size: 6px;
    }
    .etudiant #photoProfil {
        margin: 0;
    }
}
@media screen and (min-width: 0px) and (max-width: 339px) {
    #button a{
        font-size: 5px;
        padding: 0 5px;
    }
    #buttons a{
        font-size: 5px;
        padding: 0 5px;
    }
    #button img{
        width: 10px;
    }
    #buttons img{
        width: 10px;
    }
    #desktop {
        display: none;
    }
    #mobile{
        display: initial;
    }
    #buttons{
        height: 26px;
    }
    .service{
        font-size: 8px;
    }
    .categorie{
        font-size: 8px
    }
    #copyright{
        font-size: 3px;
        color: #ffffff;
        opacity: 50%;
        text-align: center;
        position: absolute;
        bottom: 15px;
        left: 2px;
    }
    .etudiant {
        left: 5px;
    }
    .etudiant #nom {
        font-size: 5px;
    }
    .etudiant #photoProfil {
        margin: 0;
    }
}
</style>