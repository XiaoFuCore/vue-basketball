import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes = [{
        path: '/',
        redirect: '/login'
    }, {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('@/views/login')
    }, {
        path: '/login-code',
        name: 'LoginCode',
        component: () =>
            import ('@/views/login/code')
    }, {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('@/views/login/register')
    },
    {
        path: '/setting',
        name: 'Setting',
        component: () =>
            import ('@/views/me/setting')
    },
    {
        path: '/ability',
        name: 'Ability',
        component: () =>
            import ('@/views/me/ability')
    },
    {
        path: '/combat_detail',
        name: 'CombatDetail',
        component: () =>
            import ('@/views/combat/detail')
    },
    {
        path: '/combat_site',
        name: 'CombatSite',
        component: () =>
            import ('@/views/combat/site')
    },
    {
        path: '/release',
        name: 'Release',
        component: () =>
            import ('@/views/combat/release')
    },
    {
        path: '/pay',
        name: 'Pay',
        component: () =>
            import ('@/views/combat/pay')
    },
    {
        path: '/combat_record',
        name: 'CombatRecord',
        component: () =>
            import ('@/views/me/record')
    },
    {
        path: '/team_data',
        name: 'TeamData',
        component: () =>
            import ('@/views/team/data')
    },
    {
        path: '/team_evalute',
        name: 'TeamEvalute',
        component: () =>
            import ('@/views/team/evalute')
    },
    {
        path: '/person',
        name: 'Person',
        component: () =>
            import ('@/views/me/person')
    },
    {
        path: '/chat_singel',
        name: 'ChatSingel',
        component: () =>
            import ('@/views/chat/chat')
    },
    {
        path: '/basketball',
        redirect: '/basketball/combat',
        component: () =>
            import ('@/views/layout'),
        children: [{
            path: 'combat',
            name: 'Combat',
            component: () =>
                import ('@/views/combat')
        }, {
            path: 'chat',
            name: 'Chat',
            component: () =>
                import ('@/views/chat')
        }, {
            path: 'team',
            name: 'Team',
            component: () =>
                import ('@/views/team')
        }, {
            path: 'me',
            name: 'Me',
            component: () =>
                import ('@/views/me')
        }]
    },
]


const router = new Router({
    routes
})

export default router;