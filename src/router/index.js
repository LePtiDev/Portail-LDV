import Vue from 'vue'
import VueRouter from 'vue-router'
import EmploieDuTemps from '../pages/EmploieDuTemps'
import Dashboard from '../pages/Dashboard'
import Absence from '../pages/Absence'


Vue.use(VueRouter)

const routes = [
    { path: '/EmploieDuTemps', component: EmploieDuTemps},
    { path: '/', component: Dashboard},
    { path: '/Absence', component: Absence}
]

export default new VueRouter({
    routes 
})