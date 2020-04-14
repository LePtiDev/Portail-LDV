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
    </div>
</template>

<script>
    export default {
        name: 'Menu',
        props: {
            student: String
        }
    }
</script>

<style scoped>

#menu {
    width: 20%;
    background-color: #252C48;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
    font-size: 16px;
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
    font-size: 16px;
    color: #ffffff;
    text-decoration: none;
}

#buttons img {
    width: 18px;
}

.categorie{
    margin-bottom: 5px;
    margin-top: 25px;
    font-size: 11px;
    padding: 0 35px;
    text-transform: capitalize;
}

.service{
    margin-bottom: 5px;
    margin-top: 10px;
    font-size: 11px;
    padding: 0 35px;
    text-transform: capitalize;
}
</style>