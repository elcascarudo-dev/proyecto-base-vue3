<template>
  <div class="card-body p-5">
    <h1 class="fs-4 card-title fw-bold mb-4">Recuperar contraseña</h1>
    <form  class="needs-validation" novalidate="" autocomplete="off"
      @submit.prevent="onSubmit">
      <div class="mb-3">
        <label class="mb-2 text-muted" for="email">E-Mail</label>
        <input v-model="email" id="email" type="email" class="form-control" required autofocus>
        <div class="invalid-feedback">
          El email es invalido
        </div>
      </div>

      <div class="d-flex align-items-center">
        <button type="submit" class="btn btn-primary ms-auto">
          Recuperar
        </button>
      </div>

      <hr class="my-4">
      <div class="text-center mt-3 mb-0">
        <router-link class="d-block my-2" :to="{ name: 'SingIn'}">Ya tengo una cuenta</router-link>
        <router-link class="d-block my-2" :to="{ name: 'SingUp'}">¿No tenes cuenta?</router-link>
      </div>

    </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  import Swal from 'sweetalert2'

  import ApiLogin from '../../../apis/ApiLogin'

  const router = useRouter()

  const email = ref(null)

  const onSubmit = async () => {

    const datos = {
      requestType: 'PASSWORD_RESET', 
      email: email.value
    }

    try {
      await ApiLogin.post( ':sendOobCode', datos )
 
      Swal.fire('Recupera tu contraseña', 'Se envio un email a tu casilla para que puedas cambiar la contraseña','success')
      
      router.push( '/login' )
    } catch (error) {
      Swal.fire( 'Opss!!', 'El correo ingresado no es correcto', 'error')
    }
  }

</script>

<style>
</style>