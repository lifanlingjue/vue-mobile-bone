import Vue from 'vue'
import Router from 'vue-router'

import Ready from '@/views/Ready'

// 引入子集文件
import user from '@/views/user/module-config/router'

Vue.use(Router)
let router = new Router({
  scrollBehavior: () => {
    return {
      y: 0
    }
  },
  routes: [{
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  }, {
    path: '/',
    name: 'app',
    redirect: '/home',
    component: Ready,
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home'),
      children: [{
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard')
      },
      ...user
      ]
    }]
  }]
})

export default router
