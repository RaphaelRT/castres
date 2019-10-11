import Vue from 'vue'
import Router from 'vue-router'

import Redirect from './components/Redirect'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Redirect,
        },
        {
            path: '/:lang',
            name: 'home',
            component: Home,
        },
    ],
})
