import pageWrapper from './base/page-wrapper'
const components = {
  pageWrapper
}

let install = (Vue) => {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
    console.log(`[Component Installed] ${key}`)
  })
}

export default install
