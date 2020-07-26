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
  faUserSecret,
  faUserFriends,
  faCubes,
  faTasks,
  faStore,
  faChartLine,
  faPlusCircle
} from '@fortawesome/free-solid-svg-icons'
import {
  faFontAwesome
} from '@fortawesome/free-brands-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faFontAwesome, faUserFriends, faCubes, faTasks, faStore, faChartLine, faPlusCircle)
dom.watch()

// root request link
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.use(VueAxios, axios)
// Vue.prototype.$http = axios
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
