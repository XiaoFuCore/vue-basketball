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
    path: '/register',
    name: 'Register',
    component: () =>
        import ('@/views/login/register')
}, {
    path: '/basketball',
    redirect: '/basketball/me',
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
}, ]


const router = new Router({
    routes
})

export default router;