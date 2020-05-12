import Vue from 'vue'
import VueRouter from 'vue-router'

import EmploieDuTemps from '../page/EmploieDuTemps'

Vue.use(VueRouter)

const routes = [
    { path: '/EmploieDuTemps', component: EmploieDuTemps},
]

export default new VueRouter({
    routes 
})