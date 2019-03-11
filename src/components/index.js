import pageWrapper from './base/page-wrapper'
import simpleForm from './base/simple-form/simple-form'
const components = {
  pageWrapper,
  simpleForm
}

let install = (Vue) => {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
    console.log(`[Component Installed] ${key}`)
  })
}

export default install
