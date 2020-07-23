import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'main',
  redirect: '/login'
}, {
  path: '/login',
  name: 'login',
  component: Login
}, {
  path: '/home',
  name: 'home',
  component: Home
}]

const router = new VueRouter({
  routes // short for `routes: routes`
})

// load login guard
router.beforeEach((to, from, next) => {
  const tokenStr = window.sessionStorage.getItem('vuesptoken')
  if (to.path === '/login' || tokenStr) {
    next()
  } else {
    next('/login')
  }
})

export default router
