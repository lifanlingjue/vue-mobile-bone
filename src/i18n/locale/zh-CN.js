// 引入子集模块
import Home from '@/views/Home/module-config/locale/zh-CN'
import Example from '@/views/Example/module-config/locale/zh-CN'

export default {
  tip: {
    appLoading: '系统准备中...',
    warning: '提示',
    loading: '加载中...',
    confirmLogout: '确认登出系统？',
    confirmSubmit: '确认提交？',
    submitSuccess: '提交成功!'
  },
  validate: {
    notSelect: '请选择'
  },
  operation: {
    back: '返回',
    yes: '是',
    no: '否',

    submit: '提交',
    submitting: '提交中...'
  },
  login: {
    login: '登录',
    logging: '登录中...',
    userNamePlaceholder: '请输入用户名',
    passwordPlaceholder: '请输入密码'
  },
  ...Home,
  ...Example
}
