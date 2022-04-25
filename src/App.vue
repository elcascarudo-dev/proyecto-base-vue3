<template>
  <router-view></router-view>
</template>

<script setup>
  import useStoreLogin from './modules/login/store';

  
  const storeLogin = useStoreLogin()

  storeLogin.reNewToken()


</script>


<style>

</style>
