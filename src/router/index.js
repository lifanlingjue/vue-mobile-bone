import Vue from 'vue'
import Router from 'vue-router'

// 引入子集文件
import Home from '@/views/Home/module-config/router'

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
  },
  ...Home
  ]
})

export default router
