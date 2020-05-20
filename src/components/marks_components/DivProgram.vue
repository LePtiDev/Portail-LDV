<template>
    <div class="program">
        <div class="section-program">
            <div class="program-date">
                <p class="date">{{date}}</p>
            </div>
            <div class="program-name">
                <p>{{name}}</p>
            </div>
        </div>
        <div class="section-marks">
            <p>NOTES</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "DivProgram",
    props: {
        date: String,
        name: String,
    }
}
</script>

<style scoped>

    .program{
        height: 40px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 15px 0px 0px 0px;
    }

    .section-program{
        width: 69%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.12);
        border-radius: 4px 0px 0px 4px;
        padding: 2px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .section-marks{
        width: 28%;
        height: 100%;
        background-color: #242424;
        border: 1px white solid;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
    }

    .program-date{
        height: 100%;
        width: 35%;
        background-color: #242424;
        border-radius: 2px 2px 2px 2px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .program-name{
        width: 65%;
        height: 100%;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .date{
        font-size: 12px;
    }

</style>