import useStoreLogin from '../modules/login/store'

const isAuthGuard = async(to, from, next) => {

    const storeLogin = useStoreLogin()

    const { ok } = await storeLogin.reNewToken()

    ok ? next() : next({ name: 'SingIn' })
}

export default isAuthGuard