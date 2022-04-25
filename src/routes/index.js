import { createRouter, createWebHashHistory } from 'vue-router'

import isAuthGuard from './auth-guard'

const routes = [{
        path: '/',
        name: 'Inicio',
        beforeEnter: [isAuthGuard],
        component: () =>
            import ('../modules/general/layouts/LayoutGeneral.vue'),
        children: [{
                path: '',
                name: 'Page1',
                component: () =>
                    import ('../modules/general/pages/Page1.vue')
            },
            {
                path: 'pagina-2',
                name: 'Page2',
                component: () =>
                    import ('../modules/general/pages/Page2.vue')
            },
        ]

    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../modules/login/layouts/LayoutLogin.vue'),
        children: [{
                path: '',
                name: 'SingIn',
                component: () =>
                    import ('../modules/login/pages/PageSingin.vue')
            },
            {
                path: 'singup',
                name: 'SingUp',
                component: () =>
                    import ('../modules/login/pages/PageSingup.vue')
            },
            {
                path: 'restore-password',
                name: 'RestprePassword',
                component: () =>
                    import ('../modules/login/pages/PageRestorePassword.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router