<template>
  <simple-form v-model="formModel" :formField="formField"></simple-form>
</template>
<script>
export default {
  name: 'dashboard',
  data () {
    return {
      formModel: {}
    }
  },
  computed: {
    formField () {
      return [
        {
          prop: 'formExample',
          label: this.$t('formExample.title'),
          viewFlag: true,
          component: {
            clickable: true,
            isLink: true,
            to: { name: 'formExample' }
          }
        }
      ]
    }
  }
}
</script>
