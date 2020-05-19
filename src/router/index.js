import Vue from 'vue'
import VueRouter from 'vue-router'
import EmploieDuTemps from '../pages/EmploieDuTemps'
import Dashboard from '../pages/dashboard'
import PresenceContent from "../pages/PresenceContent";
import ProfileContent from "../pages/ProfileContent";


Vue.use(VueRouter)

const routes = [
    { path: '/EmploieDuTemps', component: EmploieDuTemps},
    { path: '/Dashboard', component: Dashboard},
    { path: '/Profile', component: ProfileContent},
    { path: '/Presence', component: PresenceContent},
]

export default new VueRouter({
    routes
})
