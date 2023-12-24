<template>
  <div>
    <Navbar :logo="logo_src" :alt="app_name"/>
    <router-view/>
  </div>
</template>

<script>

  import Navbar from './components/Navbar.vue';

  export default {
    components: {
      Navbar
    },
    data() {
      return {
        logo_src: "/img/logo.png",
        app_name: "Api Rest Clientes"
      }
    }
  }

</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
