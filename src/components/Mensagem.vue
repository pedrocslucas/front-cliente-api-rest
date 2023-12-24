<template>

    <div>
        <div class="notification is-info is-light">
            <p>{{ msg }}</p>
        </div>
    </div>

</template>

<script>

    export default {
        name: "Mensagem",
        props: {
            msg: String
        }
    }

</script>

<style>

</style>
