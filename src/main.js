import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import router from './routes'

const pinia = createPinia()

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'sweetalert2/dist/sweetalert2.min.css'

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')