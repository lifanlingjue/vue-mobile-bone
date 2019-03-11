import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import axios from './axios'
import dictionary from './dictionary'

// rem适配
import 'amfe-flexible'

// 引入Vant组件库
import Vant from 'vant'
import 'vant/lib/index.css'

// 引入自定义组件库
import customComponent from './components'

// 导入样式文件
import 'normalize.css/normalize.css'
import './styles/index.less'

// 引入工具函数
import utils from './utils'

// 引入VeeValidate校验 + 自定义校验规则
import validator from './validator'

Vue.use(dictionary)
Vue.use(Vant)
Vue.use(customComponent)
Vue.use(validator, i18n)

// 配置全局变量
Vue.prototype.$axios = axios
Vue.prototype.$utils = utils
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
