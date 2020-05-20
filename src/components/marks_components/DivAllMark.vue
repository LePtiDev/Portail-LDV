<template>
    <div class="section-mark">
        <div class="information">
            <p class="bold titre">{{course}}</p>
            <p class="titre">{{professor}} : <span class="comment">"{{comment}}"</span></p>
        </div>
        <div class="marks">
            <div v-if="mark > 10" class="mark good">
                <p >{{mark}} / 20</p>
            </div>
            <div v-else-if="mark <= 10 && mark > 5" class="mark medium">
                <p >{{mark}} / 20</p>
            </div>
            <div v-else-if="mark <= 5" class="mark bad">
                <p >{{mark}} / 20</p>
            </div>
            <div class="average-container">
                <p class="average">Moyenne de la promo : </p>
                <div  class="average-mark">{{score}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DivAllMark',
    props: {
        mark: Number,
        score: String,
        course: String,
        professor: String,
        comment: String,
    }
}
</script>

<style scoped>
.section-mark{
    height: 100px;
    width: 100%;
    background-color: #0F0F0F;
    border-radius: 4px;
    margin: 0px 0px 20px 0px;
    font-size: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}
/* general */

.titre{
    font-size: 16px;
}

.comment{
    font-size: 14px;
}

.bold{
    font-weight: 600;
}

/* information section */

.information{
    padding: 23px 0px 23px 50px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
}

/* marks section */

.marks{
    height: 100%;
    width: 40%;
    padding: 10px 50px 10px 0px;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    flex-direction: column;
}

.mark{
    height: 32px;
    width: 114px;
    background-color: #27AE60;
    border-radius: 50px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.average-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}

.average{
    font-size: 14px;
}

.average-mark{
    width: 114px;
    font-size: 14px;
    text-align: center;
}

.good{
    background-color: #27AE60;
}

.medium{
    background-color: #FF8800;
}

.bad{
    background-color: #E74C3C;
}
</style>