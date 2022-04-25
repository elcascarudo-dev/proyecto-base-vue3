import axios from 'axios'


const ApiRest = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL_REST
})



ApiRest.interceptors.request.use((config) => {

    config.params = {
        auth: localStorage.getItem('idToken')
    }

    return config
})

export default ApiRest