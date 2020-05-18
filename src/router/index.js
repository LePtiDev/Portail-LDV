import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../pages/Dashboard'
import EmploieDuTemps from '../pages/EmploieDuTemps'
import Ressources from '../pages/Ressources'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Dashboard },
    { path: '/EmploieDuTemps', component: EmploieDuTemps},
    { path: '/Ressources', component: Ressources},
]

export default new VueRouter({
    routes 
})
