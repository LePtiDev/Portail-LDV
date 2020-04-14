import Vue from 'vue'
import App from './App.vue'
import Menu from './components/Menu.vue'

Vue.config.productionTip = false

new Vue({
  Menu,
  render: h => h(App),
}).$mount('#app')
