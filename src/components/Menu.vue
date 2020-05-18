<template>
    
    <div id="menuAll">
        <div @click="animation()" class="menu-btn">
            <div class="menu-btn__burger"></div>
        </div>
        <div id="menu">
        <div class="logo">
            <img src="./../assets/IIMLogo.png">
        </div>
        <div class="direction">
            <div id="button">
                <img src="./../assets/TableauxDeBordIcone.png">
                <router-link to="#">
                <a> Tableaux De Bord </a>
                </router-link>
            </div>
            <hr id="top">
            <p class="categorie"> Catégories </p>

            <div id="buttons">
                <img src="./../assets/empreinte.png">
                <router-link to="#">
                <a> Relevé de présence </a>
                </router-link>
            </div>

            <div id="buttons">
                <img src="./../assets/calendrier.png">
                <router-link to="/EmploieDuTemps">
                <a> Emploie du temps </a>
                </router-link>
            </div>

            <div id="buttons">
                <img src="./../assets/loupe.png">
                <router-link to="#">
                <a> Notes </a>
                </router-link>
            </div>

            <div id="buttons">
                <img src="./../assets/horloge.png">
                <router-link to="#">
                <a>Absences</a>
                </router-link>
            </div>

            <div id="buttons">
                <img src="./../assets/reglage.png">
                <router-link to="#">
                <a> devinci online</a>
                </router-link>

            </div>

            <div id="buttons">
                <img src="./../assets/oeil.png">
                <router-link to="#">
                <a>Promotion école</a>
                </router-link>
            </div>
            <hr id="medium">
            
            <p class="service"> Services </p>

            <div id="buttons">
                <img src="./../assets/partage.png">
                <router-link to="#">
                <a>Occupation des salles</a>
                </router-link>
            </div>

            <div id="buttons">
                <img src="./../assets/avion.png">
                <router-link to="#">
                <a>International</a>
                </router-link>
            </div>
            <hr id="bottom">

            <p class="service"> Divers </p>

            <div id="buttons">
                <img src="./../assets/croix.png">
                <router-link to="/Ressources">
                <a>Ressources</a>  
                </router-link>              
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
    </div>
    
</template>

<script>

    export default {
        name: 'Menu',
        props: {
            student: String,
        },
        methods: {
            animation: function () {
                const menuBtn = document.querySelector('.menu-btn');
                let menuOpen = false;
                
                 if(!menuOpen) {
                    menuBtn.classList.toggle('open');
                    menuOpen = true;
                    var element = document.getElementById("menu");
                    element.classList.toggle("mystyle");
                }
            }
        }
    }

</script>

<style scoped>
*{
    text-decoration: none;
    color: #ffffff;
}
/* menu burger */
.menu-btn {
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: all .5s ease-in-out;
  z-index: 10;
  /* border: 3px solid #fff; */
}
.menu-btn__burger {
  width: 35px;
  height: 8px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .5s ease-in-out;
}
.menu-btn__burger::before {
  transform: translateY(-16px);
  content: '';
  position: absolute;
  width: 50px;
  height:8px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .5s ease-in-out;
}
.menu-btn__burger::after {
  transform: translateY(16px);
  content: '';
  position: absolute;
  width: 30px;
  height: 8px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .5s ease-in-out;
}
/* ANIMATION */
.menu-btn.open .menu-btn__burger {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}
.menu-btn.open .menu-btn__burger::before {
  transform: rotate(45deg) translate(35px, -35px);
  width: 40px;
  height:8px;
}
.menu-btn.open .menu-btn__burger::after {
  transform: rotate(-45deg) translate(35px, 35px);
  width: 40px;
  height:8px;
}
/*/////////////////////////////////*/
#menu {
    width: 17vw;
    height: 100vh;
    background-color: #242424;
    font-family: 'Montserrat';
    color: #ffffff;
    transition-duration: 600ms;
    position: fixed;
    top: 0;
    left:0;

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

#button a{
    padding: 0 5px;
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
    padding: 0 5px;
    font-size: 14px;
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
        font-size: 9px;
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
        font-size: 6.5px;
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
@media screen and (min-width: 0px) and (max-width: 600px) {
    #menu{
        position: absolute;
        left: -2000px;
        width: 100%;
    }
    .direction{
        text-align:center;
    }
    .mystyle{
    width: 100% !important;
    transition-duration: 500ms;
    left: 0 !important;
    transition: 700ms;
    }
    .menu-btn{
        display: flex;
    }
    
    .logo img {
        width: 40%;
    }
    #button a{
        font-size: 12px;
    }
    #buttons a{
        font-size: 12px;
    }
    #button img{
        width: 15px;
    }
    #buttons img{
        width: 15px;
    }
    #buttons{
        height: 30px;
        justify-content: center;
    }
    #button{
        justify-content: center;
    }
    #copyright{
        font-size: 12px;
        color: #ffffff;
        opacity: 50%;
        text-align: center;
        position: absolute;
        bottom: 15px;
        left: 18%;
    }
    .etudiant {
        left: 30%;
    }
    .etudiant #nom {
        font-size: 15px;
    }
    .etudiant #photoProfil {
        margin: 0 2px;
        width: 20%;
    }

}


</style>