import Vue from 'vue'
import VueRouter from 'vue-router';
import Presence from "../pages/Presence";
import Compte from "../pages/Compte";




Vue.use(VueRouter)

const routes = [
  { path: '/Presence', component: Presence},
  { path: '/Compte', component: Compte},
]

export default new VueRouter({
  routes
})
