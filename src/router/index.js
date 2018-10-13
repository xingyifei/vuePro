import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const constantRouteMap = [
  {
    path: '/',
    component: () => import('@/views/hello/index'),
    hidden: true
  },
  {
    path: '/home',
    component: () => import('@/views/login/index'),
    hidden: true
  }
]

export default new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouteMap
})
