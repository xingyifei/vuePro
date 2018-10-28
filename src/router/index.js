import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const constantRouteMap = [
  {
    path: '/', // 首页
    component: () => import('@/views/hello/index'),
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/hello/index'),
      }    
    ]
  },
  {
    path: '/me', // 个人信息
    component: () => import('@/views/showme/index'),
    hidden: true,
  },
  {
    path: '/article/:id', // 文章展示
    hidden: true,
    component: () => import('@/views/article/index'),
  },
  {
    path: '/home', // 新页面
    component: () => import('@/views/login/index'),
    hidden: true
  }
]

export default new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouteMap
})

export const asyncRouterMap = [
  {
    path: '/error',
    name: 'ErrorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/errorPage/401'),
        name: 'Page401',
        meta: { title: 'page401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/errorPage/404'),
        name: 'Page404',
        meta: { title: 'page404', noCache: true }
      }
    ]
  },
]
