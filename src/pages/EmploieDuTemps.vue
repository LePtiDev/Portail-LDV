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
                <div class="heures">
                <p>_ _ H _ _</p>
                <div>
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
                </div>
                <div class="planning">
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

    mounted () {
         
            for (let index = 0; index < this.tab.length; index++) {
                this.jours = this.tab[index].jours
                this.start = this.tab[index].start
                this.end = this.tab[index].end
                this.type = this.tab[index].type

                document.getElementById(this.jours).insertAdjacentHTML('afterbegin', '<div id="' + this.jours + '" class="'+ this.type +'" style="height:'+ this.height(this.start, this.end, this.jours) +'%; top:'+ this.when(this.start) +'%"></div>');
            }
        
    },

    data(){
        return{
            tab: [
    {"start": 8, "end": 13, "jours": "lundi", "type": "cours"},
    {"start": 14, "end": 19, "jours": "lundi", "type": "event"},
    {"start": 8, "end": 13, "jours": "mardi", "type": "cours"},
    {"start": 14, "end": 19, "jours": "mardi", "type": "event"},
    {"start": 8, "end": 13, "jours": "mercredi", "type": "event"},
    {"start": 14, "end": 19, "jours": "jeudi", "type": "cours"},
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
}
.event{
    width: 100%;
    background-color: #FF8800;
    position: absolute;
    left: 0;
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
    padding: 20px 0;
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
}
#title{
    text-align: center;
    display: flex;
    padding-top: 15px;
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
}
.heures{
    text-align: center;
    display: flex;
    flex-wrap: wrap;
}
.heures p{
    padding: 1.5vh 0;
    font-size: 13px;
}
#contentDay{
    text-align: center;
    padding: 0 30px 0 0;
}
#lundi{
    height: 60vh;
    width: 10vw;
    margin-top: 20px;
    border: solid 1px #ffffff;
    position: relative;
}
#mardi{
    height: 60vh;
    width: 10vw;
    margin-top: 20px;
    border: solid 1px #ffffff;
    position: relative;
}
#mercredi{
    height: 60vh;
    width: 10vw;
    margin-top: 20px;
    border: solid 1px #ffffff;
    position: relative;
}
#jeudi{
    height: 60vh;
    width: 10vw;
    margin-top: 20px;
    border: solid 1px #ffffff;
    position: relative;
}
#vendredi{
    height: 60vh;
    width: 10vw;
    margin-top: 20px;
    border: solid 1px #ffffff;
    position: relative;
}
#samedi{
    height: 60vh;
    width: 10vw;
    margin-top: 20px;
    border: solid 1px #ffffff;
    position: relative;
}
#day{
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
}


</style>