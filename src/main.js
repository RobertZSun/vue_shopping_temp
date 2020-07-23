import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './plugins/element.js'
// import global style file
import './assets/css/global.css'
// import fontawesome icons
import {
  library,
  dom
} from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret
} from '@fortawesome/free-solid-svg-icons'
import {
  faFontAwesome
} from '@fortawesome/free-brands-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faFontAwesome)
dom.watch()

// root request link
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
Vue.use(VueAxios, axios)
// Vue.prototype.$http = axios
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
