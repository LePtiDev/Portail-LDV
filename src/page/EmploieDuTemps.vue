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
                <div class="planning">
                <p>Lundi |</p><p>6</p>
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

    data(){
        return{

        }
    },
}

</script>

<style>
*{
    margin: 0;
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
}
.heures{
    padding: 0 15px;
    text-align: center;
    margin-top: 40px;
}
.heures p{
    padding: 10px 0;
    font-size: 13px;
}

</style>