<template>
    <div class="menu"></div>
    <presence-content></presence-content>
</template>

<script>
    import PresenceContent from "../components/PresenceContent";
    export default {
        name: "Presence",
        components: {PresenceContent}
    }
</script>

<style scoped>
    body {
        display: flex;
    }
    .menu {
        width: 20vw;
    }
</style>
