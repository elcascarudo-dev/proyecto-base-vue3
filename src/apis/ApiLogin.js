import axios from 'axios'

const ApiLogin = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL_LOGIN,
    params: {
        key: import.meta.env.VITE_APP_BASE_URL_KEY
    }
})

export default ApiLogin