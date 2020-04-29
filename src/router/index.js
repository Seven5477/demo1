import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/Index',
    name: 'index',
    component: Index
  },
  {
    path: '/User',
    name: 'user',
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
