import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import axios from './axios'
import dictionary from './dictionary'

// 引入Vant组件库
import Vant from 'vant'
import 'vant/lib/index.css'

// 引入自定义组件库
import customComponent from './components/index'

// 导入样式文件
// import 'normalize.css/normalize.css'
import './styles/index.less'

// 引入工具函数
import utils from './utils'

Vue.use(dictionary)
Vue.use(Vant)
Vue.use(customComponent)

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
