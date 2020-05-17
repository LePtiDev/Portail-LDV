import Vue from 'vue'
import VueRouter from 'vue-router'

<<<<<<< HEAD

import Log from '../pages/Log'
import Dashboard from '../pages/Dashboard'
=======
import EmploieDuTemps from '../page/EmploieDuTemps'
>>>>>>> origin/antoine

Vue.use(VueRouter)

const routes = [
<<<<<<< HEAD
    { path: '/Dashboard', component: Dashboard },
    { path: '/Log', component: Log },
=======
    { path: '/EmploieDuTemps', component: EmploieDuTemps},
>>>>>>> origin/antoine
]

export default new VueRouter({
    routes 
<<<<<<< HEAD
})
=======
})
>>>>>>> origin/antoine
