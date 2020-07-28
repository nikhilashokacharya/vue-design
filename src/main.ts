import Vue from 'vue'
import App from './App.vue'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.use(BootstrapVue)
Vue.use(PerfectScrollbar)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
