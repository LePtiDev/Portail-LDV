<template>
    <div class="container-contact">
        <img class="image" v-bind:src="require(`@/assets/${picture}`)" :alt="picture">
        <div class="content">
            <p>{{name}}</p>
            <p>{{post}}</p>
            <p>{{axe}}</p>
            <p>{{email}}</p>
            <p>{{number}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DivContact',
    props: {
        name: String,
        post: String,
        axe: String,
        email: String,
        number: String,
        picture: String,
    },
}
</script>

<style scoped>

.image{
    margin-right: 10px;
    height: 100px;
    border-radius: 50px;
}

.container-contact{
    display: flex;
    flex-direction: row;
}

</style>