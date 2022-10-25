import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from "vue-router";
import router from './router'
import axios from "axios";
import './assets/style/default.sass'

Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.baseURL = `https://www.superheroapi.com/api/${process.env.VUE_APP_SUPERHERO_API_KEY}`

Vue.use(VueRouter)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
