<template>
  <div class="login__wrapper" @keydown.enter="handleLogin">
    <div class="login__container">
      <div class="appName">Vue-mobile-bone</div>
      <van-cell-group>
        <van-field v-model="loginFormModel.username" center clearable :placeholder="$t('login.userNamePlaceholder')">
          <van-icon slot="left-icon" class-prefix="iconfont" name="account" />
        </van-field>
        <van-field v-model="loginFormModel.password" center clearable :placeholder="$t('login.passwordPlaceholder')" v-bind="passwordType" @click-right-icon="viewPasswordFlag = !viewPasswordFlag">
          <van-icon slot="left-icon" class-prefix="iconfont" name="password" />
        </van-field>
      </van-cell-group>
      <van-button class="login__button" size="large" :text="$t('login.login')" type="info" :loading-text="$t('login.logging')" :loading="loadingFlag" @click="handleLogin" />
    </div>
  </div>
</template>
<script>
const BASEURL = {
  login: '/api/auth/oauth/token'
}
export default {
  name: 'login',
  data () {
    return {
      loginFormModel: {
        username: '',
        password: ''
      },
      viewPasswordFlag: false,
      loadingFlag: false
    }
  },
  computed: {
    passwordType () {
      if (this.viewPasswordFlag) {
        return {
          type: 'text',
          rightIcon: 'eye-o'
        }
      } else {
        return {
          type: 'password',
          rightIcon: 'closed-eye'
        }
      }
    }
  },
  methods: {
    handleLogin () {
      this.loadingFlag = true
      let params = `username=${this.loginFormModel.username}&password=${this.loginFormModel.password}`
      let ot = '&grant_type=password&scope=web&client_id=web&client_secret=web'

      this.$axios
        .post(`${BASEURL.login}?${params}${ot}`)
        .then(resp => {
          let respData = resp
          // 获取 token 并保存至 vuex 中
          let token = respData.access_token
          this.$store.commit('updateAccessToken', token)
          this.$router.replace({ name: 'home' })
        })
        .finally(() => {
          this.loadingFlag = false
        })
    }
  }
}
</script>
<style lang="less" scoped>
.login__wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/login_bg.png");
  background-size: cover;
  .login__container {
    width: 350px;
    .appName {
      margin-bottom: 40px;
      color: #ffffff;
      font-size: 35px;
      text-align: center;
    }
    .login__button {
      margin-top: 10px;
    }
  }
}
</style>
