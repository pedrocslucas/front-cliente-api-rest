<template>
  <div>

    <Navbar v-if="$route.name !== 'Login'" :logo="logo_src" :alt="app_name"/>
    <router-view/>

    <Footer v-if="$route.name !== 'Login'" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

import logo from '@/assets/logo.png';

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      logo_src: logo,
      app_name: "Api Rest Clientes"
    }
  }
}
</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
