import Vue from 'vue'
import VueRouter from 'vue-router'


import Log from '../pages/Log'
import Dashboard from '../pages/Dashboard'

Vue.use(VueRouter)

const routes = [
    { path: '/Dashboard', component: Dashboard },
    { path: '/Log', component: Log },
]

export default new VueRouter({
    routes 
})
