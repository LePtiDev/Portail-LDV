import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../pages/Dashboard'
import EmploieDuTemps from '../pages/EmploieDuTemps'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Dashboard },
    { path: '/EmploieDuTemps', component: EmploieDuTemps},
]

export default new VueRouter({
    routes 
})
