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
                <a> Relevé de présence </a>
            </div>

            <div id="buttons">
                <img src="./../assets/calendrier.png">
                <a> Emploie du temps </a>
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
                <a> devinci online</a>
            </div>

            <div id="buttons">
                <img src="./../assets/oeil.png">
                <a>Promotion école</a>
            </div>
            <hr id="medium">
            
            <p class="service"> Services </p>

            <div id="buttons">
                <img src="./../assets/partage.png">
                <a>Occupation des salles</a>
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


        </div>

        <div class="etudiant">
            <img src="./../assets/Puech-Antoine.jpg" id="photoProfil">
            <p id="nom">Antoine Puech</p>
        </div>
        <p id="copyright"> ALV Online - 2020 © Léonard de Vinci </p>
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
    width: 20%;
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
    width: 200px;
    margin-top: 20px;
}

.direction{
    margin-top: 25px;
    text-transform: uppercase;    
}

#button {
    display: flex;
    align-items: center;
    padding: 0 30px;
    margin: 15px 0;
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
    padding: 0 30px;
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
    padding: 0 35px;
    color: lightgrey;
    text-transform: capitalize;
}

.service{
    margin-bottom: 5px;
    margin-top: 10px;
    font-size: 10px;
    padding: 0 35px;
    color: lightgrey;
    text-transform: capitalize;
}

.etudiant {
    display: flex;
    justify-content: center;
    margin-top: 20%;
    align-items: center;
}

.etudiant #photoProfil {
    width: 15%;
    border-radius: 100px;
    height: 15%;
    margin: 0 15px;
}

.etudiant #nom {
    padding: 0 5px;
    font-family: 'Montserrat';
    font-weight: bold;
}

#copyright {
    font-size: 12px;
    color: #ffffff;
    opacity: 50%;
    text-align: center;
    margin-top: 25px;
}
</style>