<template>
  <div class="card-body pt-5 px-5">
    <h1 class="fs-4 card-title fw-bold mb-4">Login</h1>
    <form class="needs-validation" novalidate="" autocomplete="off"
          @submit.prevent="onSubmit">

      <div class="mb-3">
        <label class="mb-2 text-muted" for="email">E-Mail</label>
        <input v-model="email" id="email" type="email" class="form-control" name="email" required autofocus>
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

      <div class="d-flex align-items-center">
        <div class="form-check">
          <input v-model="remember" type="checkbox" id="remember" class="form-check-input">
          <label for="remember" class="form-check-label">Recordar usuarioe</label>
        </div>
        <button type="submit" class="btn btn-primary ms-auto">
          Ingresar
        </button>
      </div>

      <hr class="my-4">
      <div class="text-center mt-3 mb-0">
        <router-link class="d-block my-2" :to="{ name: 'SingUp'}">¿No tenes cuenta?</router-link>
        <router-link class="d-block my-2" :to="{ name: 'RestprePassword'}">Olvide mi contraseña</router-link>
      </div>
    </form>
  </div>
</template>

<script setup>

  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  import useStoreLogin from '../store'
  import Swal from 'sweetalert2'
  
  const storeLogin = useStoreLogin()
  const router = useRouter()

  const email    = ref(null)
  const password = ref(null)
  const remember = ref(false)
  
  if ( localStorage.getItem( 'email' ) ) {
    email.value     = localStorage.getItem( 'email' )
    remember.value  = true
  }


  const onSubmit = async () => {

    const datos = {
      email: email.value,
      password: password.value,
      returnSecureToken: true
    }


    remember.value 
      ? localStorage.setItem( 'email', email.value )
      : localStorage.removeItem( 'email' )

    const { ok } = await storeLogin.singIn( datos )
    
    ok 
      ? router.push('/')
      : Swal.fire('Error en los datos', 'El usuario o contraseña son incorrectos', 'error')
    
  }

</script>

<style>
</style>