import Ready from '@/views/Ready'
export default [
  // Home模块下的路由配置
  {
    path: '/example',
    name: 'example',
    redirect: '/formExample',
    component: Ready,
    children: [{
      path: '/formExample',
      name: 'formExample',
      component: () => import('@/views/Example/formExample/formExample')
    }]
  }
]
