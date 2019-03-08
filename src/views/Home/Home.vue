<template>
  <page-wrapper :nav-config="navConfig" :tab-config="tabConfig">
    <router-view slot="content" />
  </page-wrapper>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      navConfig: {
        // title: this.$t('dashboard.title'),
        right: [
          {
            type: 'icon',
            name: 'close',
            click: this.logout
          }
        ]
      },
      tabConfig: {
        active: Number(this.$route.query.active),
        tabs: [
          {
            icon: 'wap-home',
            name: this.$t('dashboard.title'),
            to: { name: 'dashboard', query: { active: 0 } }
          },
          {
            icon: 'contact',
            name: this.$t('myInfo.title'),
            to: { name: 'myInfo', query: { active: 1 } }
          }
        ]
      }
    }
  },

  methods: {
    logout () {
      this.$dialog.confirm({
        title: this.$t('tip.warning'),
        message: this.$t('tip.confirmLogout')
      }).then(() => {
        this.$store.commit('logout', this)
      }).catch(() => { })
    }
  }
}
</script>
