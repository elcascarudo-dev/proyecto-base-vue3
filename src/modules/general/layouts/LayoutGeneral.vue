<template>
  <NavBarVue />

  <div class="container">
    <router-view />
  </div>
</template>

<script setup>
  import NavBarVue from "../components/NavBar.vue";


  componets: {
    NavBarVue
  }
</script>

<style>

</style>