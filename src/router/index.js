import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import Users from '../components/user/Users'
import Rights from '../components/role/Rights'
import Roles from '../components/role/Roles'

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
  component: Home,
  redirect: '/welcome',
  children: [{
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  }, {
    path: '/users',
    name: 'users',
    component: Users
  }, {
    path: '/rights',
    name: 'rights',
    component: Rights
  }, {
    path: '/roles',
    name: 'roles',
    component: Roles
  }]
}]

const router = new VueRouter({
  routes // short or `routes: routes`
})

// load login guard
router.beforeEach((to, from, next) => {
  const tokenStr = window.sessionStorage.getItem('token')
  if (to.path === '/login' || tokenStr) {
    next()
  } else {
    next('/login')
  }
})

export default router
