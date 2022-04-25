<template>
  <div class="card-body p-5">
    <h1 class="fs-4 card-title fw-bold mb-4">Darme de alta</h1>

    <form class="needs-validation" novalidate="" autocomplete="off"
      @submit.prevent="onSubmit">
      <div class="mb-3">
        <label class="mb-2 text-muted" for="nombre">Nombre</label>
        <input v-model="nombre" id="nombre" type="text" class="form-control" required autofocus>
        <div class="invalid-feedback">
          El email es invalido
        </div>
      </div>
      
      <div class="mb-3">
        <label class="mb-2 text-muted" for="email">E-Mail</label>
        <input v-model="email" id="email" type="email" class="form-control" required autofocus>
        <div class="invalid-feedback">
          El email es invalido
        </div>
      </div>

      <div class="mb-3">
        <div class="mb-2 w-100">
          <label class="text-muted" for="password">Contraseña</label>
        </div>
        <input v-model="password" id="password" type="password" class="form-control" required>
        <div class="invalid-feedback">
          La contraseña es requerida
        </div>
      </div>

      <div class="mb-3">
        <div class="mb-2 w-100">
          <label class="text-muted" for="password2">Repita Contraseña</label>
        </div>
        <input v-model="password2" id="password2" type="password" class="form-control" required>
        <div class="invalid-feedback">
          La contraseña es requerida
        </div>
      </div>

      <div class="d-flex align-items-center">
        <button type="submit" class="btn btn-primary ms-auto">
          Registrarme
        </button>
      </div>

            <hr class="my-4">
      <div class="text-center mt-3 mb-0">
        <router-link class="d-block my-2" :to="{ name: 'SingIn'}">Ya tengo una cuenta</router-link>
        <router-link class="d-block my-2" :to="{ name: 'RestprePassword'}">Olvide mi contraseña</router-link>
      </div>

    </form>
  </div>
</template>

<script setup>

  import { ref } from 'vue'
  
  import Swal from 'sweetalert2'

  import useStoreLogin from '../store'

  const storeLogin = useStoreLogin()

  const nombre    = ref(null)
  const email     = ref(null)
  const password  = ref(null)
  const password2 = ref(null)

  const onSubmit = async () => {

  if ( password.value !== password2.value ) {
      Swal.fire( 'Son distintas', 'Las contraseñas no coinciden', 'error')
      return
  }

    const datos = {
      email: email.value,
      password: password.value,
      returnSecureToken: true
    }

    const { ok, message } = await storeLogin.registerUser( datos, nombre.value )

    if( !ok ){
      console.log( message )
    }

  }
  

</script>

<style>
</style>