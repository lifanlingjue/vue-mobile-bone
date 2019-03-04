<template>
  <transition name="van-slide-right" v-if="isReady">
    <keep-alive>
      <router-view />
    </keep-alive>
  </transition>
</template>
<script>
import { mapMutations } from 'vuex'
const BASEURL = {
  initData: '/api/system/initData'
}

export default {
  name: 'Ready',
  data () {
    return {
      isReady: false
    }
  },
  created () {
    this.initializeSystem()
  },
  methods: {
    ...mapMutations(['initializeMenu', 'initializeDictionary', 'setUserInfo']),
    /**
         * 初始化系统数据
         * 1. 字典
         * 2. 菜单(权限)
         * 3. 登录用户信息
         */
    initializeSystem () {
      this.$toast.loading(
        {
          duration: 0, // 持续展示 toast
          forbidClick: true, // 禁用背景点击
          loadingType: 'spinner',
          message: this.$t('loading')
        }
      )
      this.$axios
        .post(BASEURL.initData)
        .then(resp => {
          let respData = resp.data
          this.initializeMenu(respData.menu)
          this.initializeDictionary(respData.dict)
          this.setUserInfo(respData.user)
          this.isReady = true
        })
        .finally(() => {
          this.$toast.clear()
        })
    }
  }
}
</script>
