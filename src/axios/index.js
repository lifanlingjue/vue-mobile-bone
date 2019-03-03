import axios from 'axios'
import Vue from 'vue'
import router from '../router'
import serverUrl from '../config/url'

let v = new Vue()

axios.defaults.timeout = 50000
axios.defaults.baseURL = serverUrl

let pending = []
let CancelToken = axios.CancelToken

let removePending = ever => {
  for (const p in pending) {
    if (pending[p].u === `${ever.url}&${ever.method}`) {
      pending[p].f('Cancel')
      pending.splice(p, 1)
    }
  }
}

axios.interceptors.request.use(config => {
  removePending(config)

  config.cancelToken = new CancelToken(c => {
    pending.push({
      u: `${config.url}&${config.method}`,
      f: c
    })
  })

  let appToken = localStorage.appToken
  if (appToken) config.headers.Authorization = `Bearer ${appToken}`

  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(resp => {
  removePending(resp.config)
  let respData = resp.data

  if ((respData.ok && respData.code === 200) || respData.access_token || respData.type === 'application/octet-stream') return respData
  else {
    v.$notify(respData.message)
    return Promise.reject(respData)
  }
}, error => {
  if (error.message && error.message === 'Cancel') return Promise.reject(error)
  else {
    let errResp = error.response
    if (errResp && errResp.data) {
      if (errResp.status === 401) {
        router.replace({
          name: 'login'
        })
        v.$notify(errResp.data.error)
      } else {
        v.$notify(errResp.data.message)
      }
      return Promise.reject(error)
    }

    v.$notify(error.message)
    return Promise.reject(error)
  }
})

export default axios
