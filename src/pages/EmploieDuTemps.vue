<template>
    <div class="allContent">
        <section class="head">
            <p id="edt">Emploie du temps</p>
            <div id="choix">
                <p id="week">Semaine</p>
                <p>|</p>
                <p id="month">Mois</p>
            </div>
            <div id="btn">
                <button>+ Ajouter un évènement</button>
            </div>
        </section>

        <div class="content">
            <section id="title">
                <p id="headTitle">MAI 2020</p>
                <div id="allBtn">
                <div if="leftBtn">
                    <svg id="left" xmlns="http://www.w3.org/2000/svg" width="7.434" height="12.056" viewBox="0 0 7.434 12.056">
                    <path id="Icon_Keyboard_Arrow_-_Up_Dark" data-name="Icon / Keyboard Arrow - Up / Dark" d="M10.649,7.434,6.028,2.813,1.406,7.434,0,6.028,6.028,0l6.028,6.028Z" transform="translate(0 12.056) rotate(-90)" fill="#fff"/>
                    </svg>
                </div>
                <div id="rightBtn">
                    <svg id="right" xmlns="http://www.w3.org/2000/svg" width="7.434" height="12.056" viewBox="0 0 7.434 12.056">
                    <path id="Icon_Keyboard_Arrow_-_Up_Dark" data-name="Icon / Keyboard Arrow - Up / Dark" d="M10.649,7.434,6.028,2.813,1.406,7.434,0,6.028,6.028,0l6.028,6.028Z" transform="translate(0 12.056) rotate(-90)" fill="#fff"/>
                    </svg>
                </div>
            </div>
            </section>
            <section id="contentPlanning">
                
                <div class="planning">
                <div class="heures">
                
                    <p>8H00</p>                
                    <p>9H00</p>              
                    <p>10H00</p>               
                    <p>11H00</p>               
                    <p>12H00</p>                
                    <p>13H00</p>                
                    <p>14H00</p>                
                    <p>15H00</p>                
                    <p>16H00</p>               
                    <p>17H00</p>                
                    <p>18H00</p>                
                    <p>19H00</p>
                </div>
                    <div id="contentDay">
                    
                        <p id="day">Lundi | 6</p>
                        <div id="lundi">

                        </div>
                    </div>
                    <div id="contentDay">
                        <p id="day">Mardi | 7</p>
                        <div id="mardi">
                        </div>
                    </div>
                    <div id="contentDay">
                        <p id="day">Mercredi | 8</p>
                        <div id="mercredi">
                        </div>
                    </div>
                    <div id="contentDay">
                        <p id="day">Jeudi | 9</p>
                        <div id="jeudi">
                        </div>
                    </div>
                    <div id="contentDay">
                        <p id="day">Vendredi | 10</p>
                        <div id="vendredi">
                        </div>
                    </div>
                    <div id="contentDay">
                        <p id="day">Samedi | 11</p>
                        <div id="samedi">
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    
</template>

<script>

export default {
    name: 'EmploieDuTemps',
    components: {
        
    },

    methods: {
        height(start, end){
            this.nb = ((end - start) * 60) / 15
            this.hauteur = this.nb * 2.27272727
            return this.hauteur
        },

        when(debut){
            return (((debut - 8) * 60) / 15) * 2.27272727
        }
    },

    mounted() {
         
            for (let index = 0; index < this.tab.length; index++) {
                this.jours = this.tab[index].jours
                this.start = this.tab[index].start
                this.end = this.tab[index].end
                this.type = this.tab[index].type
                this.salle = this.tab[index].salle
                this.name = this.tab[index].name

                document.getElementById(this.jours).insertAdjacentHTML('afterbegin', '<div id="' + this.jours + '" class="'+ this.type +'" style="height:'+ this.height(this.start, this.end, this.jours) +'%; top:'+ this.when(this.start) +'%; display: flex; flex-wrap: wrap;"><div style="display: flex; flex-wrap: wrap; height: 15%; padding: 2px;"><p id="heure-cours">'+this.start+'h00 - '+this.end+'h00</p><p id="salle">['+this.salle+']</p> <p id="name">'+this.name+'</p></div>');
            }
        
    },

    data(){
        return{
            tab: [
    {"start": 8, "end": 13, "jours": "lundi", "type": "cours", "salle": "E359", "name": "Symfony|PHP"},
    {"start": 14, "end": 19, "jours": "lundi", "type": "event", "salle": "L404", "name": "Sport"},
    {"start": 8, "end": 13, "jours": "mardi", "type": "cours", "salle": "E106", "name": "Devlab"},
    {"start": 14, "end": 19, "jours": "mardi", "type": "event", "salle": "AMPHI H", "name": "Réunion iimpact"},
    {"start": 8, "end": 13, "jours": "mercredi", "type": "event", "salle": "E259", "name": "Symfony|PHP"},
    {"start": 14, "end": 19, "jours": "jeudi", "type": "cours", "salle": "E359", "name": "Date avec quentin"},
],
        }
    },
}

</script>

<style>
*{
    margin: 0;
  }
  .cours{
    width: 100%;
    background-color: black;
    position: absolute;
    left: 0;
    text-align: left;
}
.event{
    width: 100%;
    background-color: #FF8800;
    position: absolute;
    left: 0;
    text-align: left;
}
#heure-cours{
    font-size: 10px;
    padding: 3px 25px 0px 3px;
}

#salle{
    font-size: 10px;
    padding: 3px 0 0 3px;
    position: absolute;
    right: 5px;
}
#name{
    width: 100%;
    padding-top: 10px;
    font-size: 14px;
    font-weight: bold;
    padding: 10px 0px 0px 3px;
}
@media screen and (min-width: 0px) and (max-width: 1300px){
    #salle{
        position: initial;
    }
}
</style>

<style scoped>
.allContent{
    margin: 0 25px;
    color: #ffffff;
    width: 100vw;
    font-family: 'Montserrat';
}
/* debut header */
.head{
    padding: 20px 0 10px;
  }
#edt{
    font-size: 17px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0 2px;
}

#choix{
    display: flex;
    margin-top: 30px;
}

#choix p{
    padding: 0 2px;
    font-size: 17px;
    font-weight: bold;
    text-transform: uppercase;
}
#btn{
    text-align: right;
}
#btn button{
    background-color: #FF8800;
    border: none;
    cursor: pointer;
    border-radius: 25px;
    padding: 10px 10px;
    color: white;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 600;
}
/* fin header */

/* haut du contenu de ledt */
.content{
    background-color:#272727;
    height: 80%;
}
#title{
    text-align: center;
    display: flex;
    padding-top: 15px;
    padding-bottom: 5px;
}
#headTitle{
    width: 100%;
    font-weight: 600;
}
#allBtn{
    display: flex;
    margin-right: 10px;
}
#allBtn #leftBtn{
    width: 100%;
}
#right{
    transform: rotate(180deg);
    padding: 0 15px;
}
/* fin du haut du contenu */

/* contenu principal de ledt */
#contentPlanning{
    display:flex;
}
.planning{
    display: flex;
    padding: 15px 5px 0;
    align-items: flex-end;
}
.heures{
    text-align: center;
    justify-content: space-between;
    display:flex;
    flex-direction: column;
    height: 60vh;
    padding-bottom: 2px;
    padding: 0 5px;
}
.heures p{
    font-size: 13px;
}
#contentDay{
    text-align: center;
    padding: 0 30px 0 0;
}
#lundi{
    height: 60vh;
    width: 10vw;
    border: solid 1px #ffffff;
    position: relative;
}
#mardi{
    height: 60vh;
    width: 10vw;
    border: solid 1px #ffffff;
    position: relative;
}
#mercredi{
    height: 60vh;
    width: 10vw;
    border: solid 1px #ffffff;
    position: relative;
}
#jeudi{
    height: 60vh;
    width: 10vw;
    border: solid 1px #ffffff;
    position: relative;
}
#vendredi{
    height: 60vh;
    width: 10vw;
    border: solid 1px #ffffff;
    position: relative;
}
#samedi{
    height: 60vh;
    width: 10vw;
    border: solid 1px #ffffff;
    position: relative;
}
#day{
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    padding-bottom: 10px;
}

#H{
    width: 100%;
    padding: 0;
    height: 0px;
    position: relative;
    bottom: 20px;
}



</style>