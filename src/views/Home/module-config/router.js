import Ready from '@/views/Ready'
export default [
  // Home模块下的路由配置
  {
    path: '/',
    name: 'app',
    redirect: '/home',
    component: Ready,
    children: [{
      path: '/home',
      name: 'home',
      redirect: {
        name: 'dashboard',
        query: {
          active: 0
        }
      },
      component: () => import('@/views/Home/Home'),
      children: [{
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/Home/Dashboard')
      },
      {
        path: 'myInfo',
        name: 'myInfo',
        component: () => import('@/views/Home/myInfo')
      }
      ]
    }]
  }
]
