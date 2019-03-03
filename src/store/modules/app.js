function getPermisson (rootMenu, sysPermission) {
  if (rootMenu.children && rootMenu.children.length > 0) {
    rootMenu.children.forEach(item => {
      if (item.isShow === 0) {
        sysPermission.push(item)
      }
      getPermisson(item, sysPermission)
    })
  }
}

let app = {
  state: {
    appToken: '',
    sysMenu: [],
    sysPermission: [],
    sysDict: [],
    userInfo: {},

    // 用户是否有显示首页的权限
    isShowDashboard: false
  },
  mutations: {
    // 请求凭证 token
    updateAccessToken (state, accessToken) {
      state.appToken = accessToken
      localStorage.setItem('appToken', accessToken)
    },
    /** 菜单数据初始化 */
    initializeMenu (state, sysMenu) {
      state.sysMenu = sysMenu

      let homeRoute = sysMenu.children.find(item => item.name === 'home')
      if (homeRoute) {
        state.isShowDashboard = true
      } else state.isShowDashboard = false

      let sysPermission = []
      getPermisson(sysMenu, sysPermission)
      console.log(sysPermission)

      state.sysPermission = sysPermission
    },
    /** 字典数据初始化 */
    initializeDictionary (state, sysDict) {
      state.sysDict = sysDict
    },
    /** 设置用户信息 */
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    },
    /** 设置是否有首页权限标识 */
    setShowDashboardFlag (state, flag) {
      state.isShowDashboard = flag
    }
  },
  actions: {

  },
  getters: {

  }
}

export default app
