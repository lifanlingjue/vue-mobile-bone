import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import axios from './axios'

// 引入Vant组件库
import Vant from 'vant'
import 'vant/lib/index.css'

// 导入样式文件
// import 'normalize.css/normalize.css'
import './styles/index.less'

Vue.use(Vant)

// 配置全局变量
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
