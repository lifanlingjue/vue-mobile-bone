export default [
  // user模块下的路由配置
  {
    path: '/myInfo',
    name: 'myInfo',
    component: () => import('@/views/user/myInfo')
  }
]
