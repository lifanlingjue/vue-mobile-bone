import Vue from 'vue'
import Router from 'vue-router'

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
    component: () => import('../views/Login.vue')
  }]
})

export default router
