import Vue from 'vue'
import VueRouter from 'vue-router'
import EmploieDuTemps from '../pages/EmploieDuTemps'
import Dashboard from '../pages/dashboard'

Vue.use(VueRouter)

const routes = [
    { path: '/EmploieDuTemps', component: EmploieDuTemps},
    { path: '/Dashboard', component: Dashboard},
]

export default new VueRouter({
    routes 
})