import Vue from 'vue'
import VueI18n from 'vue-i18n'

import enLocale from 'vant/lib/locale/lang/en-US'
import zhLocale from 'vant/lib/locale/lang/zh-CN'

import enUS from './locale/en-US'
import zhCN from './locale/zh-CN'

Vue.use(VueI18n)

let messages = {
  en: Object.assign(enUS, enLocale),
  zh: Object.assign(zhCN, zhLocale)
}

const i18n = new VueI18n({
  locale: 'zh',
  messages
})

export default i18n
