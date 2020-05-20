<template>
    <div class="container_canvas">
        <div class="graph" id="graph"></div>
        <canvas id="draw">
            <!-- <polygon points="78,138 219,98" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" /> -->
        </canvas>
    </div>
</template>

<script>
export default {
    name: "DivGraph",
    props: {
        marks: Array,
        average: Number,
    },

    mounted(){

        // variables
        var left = 10
        var bottom = 0
        var average_bottom = 0
        var average = 0
        var color = ""

        // for on the array of marks
        for (var index = 0; index < 5; index++) {
            if(this.marks[index].mark < 10 && this.marks[index].mark > 5){
                color= "#FF8800"
            }
            else if(this.marks[index].mark <= 5) {
                color= "#E74C3C"
            } 
            else {
                color="#27AE60"
            }
            bottom = this.marks[index].mark * 5

            // insert html with 'div' to create point
            document.getElementById("graph").insertAdjacentHTML('afterbegin', '<div class="point" style=" left:'+ left +'%; bottom:'+ bottom +'%; background-color: '+ color +';"></div>');

            // reset of variable
            left = left + 20
            bottom = 0
            average_bottom = average_bottom + this.marks[index].mark
        }

        average = average_bottom / this.marks.length
        // insert html with 'div' to create the average
        document.getElementById("graph").insertAdjacentHTML('afterbegin', '<div class="average-bar" style="bottom:'+ (average_bottom + 6) +'%;"><p class="average-info">'+ average +'</p></div>');
    },
}
</script>

<style>
.point{
    height: 12px;
    width: 12px;
    border-radius: 6px;
    position: absolute;
}

.average-bar{
    height: 2px;
    width: 100%;
    background-color: grey;
    position: absolute;
    left: 0;
}

.average-info{
    text-align: right;
    width: 100%;
    margin: 5px 0px 0px 0px;
}
</style>

<style scoped>
.container_canvas{
    height: 80%;
    width: 100%;
    position: relative;
}

.graph{
    height: 100%;
    width: 100%;
    box-sizing: border-box;
}
</style>