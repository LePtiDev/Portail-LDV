import Vue from 'vue'
import VueRouter from 'vue-router';
import Presence from "../pages/Presence";




Vue.use(VueRouter)

const routes = [
  { path: '/Presence', component: Presence},
]

export default new VueRouter({
  routes
})
