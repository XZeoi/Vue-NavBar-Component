import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from 'content/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    component: Layout
  }
]

const router = new VueRouter({
  routes
})

export default router
