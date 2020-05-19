import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../pages/Dashboard'
import EmploieDuTemps from '../pages/EmploieDuTemps'
import Ressources from '../pages/Ressources'
import CoursView from '../pages/CoursView'
import AddEvent from '../pages/AddEvent'
import Absence from '../pages/Absence'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Dashboard },
    { path: '/EmploieDuTemps', component: EmploieDuTemps},
    { path: '/Ressources', component: Ressources},
    { path: '/CoursView', component: CoursView},
    { path: '/AddEvent', component: AddEvent},
    { path: '/Absence', component: Absence},


]

export default new VueRouter({
    routes 
})
