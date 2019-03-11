import VeeValidate from 'vee-validate'
import customRules from './customRules'

import zh from 'vee-validate/dist/locale/zh_CN'
import en from 'vee-validate/dist/locale/en'
let install = (Vue, i18n) => {
  Vue.use(VeeValidate, {
    i18n,
    dictionary: {
      zh,
      en
    }
  })

  Object.keys(customRules).forEach(key => {
    // 取VeeValidate构造器下的实例  注入自定义的校验规则
    VeeValidate.Validator.extend(key, customRules[key])
    console.log(`[Validate customRules Installed] ${key}`)
  })
}

export default install
