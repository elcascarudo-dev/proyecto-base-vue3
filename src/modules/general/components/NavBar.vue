<template>
  <header class="p-3 mb-3 border-bottom">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <router-link :to="{ name: 'Page1'}" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
            {{ nombre }}
        </router-link>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><router-link :to="{ name: 'Page1' }" class="nav-link px-2 link-dark">Pagina 1</router-link></li>
          <li><router-link :to="{ name: 'Page2' }" class="nav-link px-2 link-dark">Pagina 2</router-link></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control" placeholder="Buscar..." aria-label="Search">
        </form>

        <div class="dropdown text-end">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1"
            data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="#">Otro item...</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a @click="logOut" class="dropdown-item" >Salir</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  import useStoreLogin from "../../login/store"

  const storeLogin = useStoreLogin()
  const router = useRouter()

  const nombre = ref( storeLogin.displayName )

  console.log( nombre.value )

  const logOut = () => {
    storeLogin.logOut()
    router.push('/login')
  }

</script>

<style>
</style>