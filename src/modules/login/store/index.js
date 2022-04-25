import { defineStore } from 'pinia'

import ApiLogin from '../../../apis/ApiLogin'

const useStoreLogin = defineStore('storeLogin', {

    state: () => ({
        localId: null,
        displayName: null,
        email: null
    }),

    actions: {

        async registerUser(datos, displayName) {

            try {
                const { data } = await ApiLogin.post(':signUp', datos)
                await ApiLogin.post(':update', { idToken: data.idToken, displayName })

                data.displayName = displayName

                this.loginUser(data)

                return { ok: true }
            } catch (error) {
                return { ok: false, message: error.response.data.error.message }
            }
        },

        async singIn(datos) {
            try {
                const { data } = await ApiLogin.post(':signInWithPassword', datos)

                this.loginUser(data)

                return { ok: true }
            } catch (error) {
                return { ok: false, message: error.response.data.error.message }
            }
        },

        async reNewToken() {

            const idToken = localStorage.getItem('token')
            const refreshToken = localStorage.getItem('refreshToken')

            if (!idToken) {
                this.logOut()
                return { ok: false, message: 'No hay token' }
            }

            try {
                const { data } = await ApiLogin.post(':lookup', { idToken })

                data.users[0].idToken = idToken
                data.users[0].refreshToken = refreshToken

                this.loginUser(data.users[0])

                return { ok: true }

            } catch (error) {
                this.logOut()
                return { ok: false, message: error.response.data.error.message }
            }


        },

        logOut() {

            this.idToken = null
            this.refreshToken = null
            this.localId = null
            this.email = null
            this.displayName = null

            localStorage.removeItem('refreshToken')
            localStorage.removeItem('token')
        },

        loginUser(data) {

            this.localId = data.localId
            this.email = data.email
            this.displayName = data.displayName

            localStorage.setItem('refreshToken', data.refreshToken)
            localStorage.setItem('token', data.idToken)
        }




    }

})

export default useStoreLogin