<template>
  <simple-form v-model="formModel" :formField="formField"></simple-form>
</template>
<script>
export default {
  name: 'myInfo',
  data () {
    return {
      formModel: {}
    }
  },
  computed: {
    formField () {
      return [
        {
          prop: 'aboutUs',
          label: this.$t('myInfo.aboutUs'),
          viewFlag: true,
          component: {
            clickable: true,
            isLink: true
            // to: { name: 'aboutUs' }
          }
        }
      ]
    }
  }
}
</script>
