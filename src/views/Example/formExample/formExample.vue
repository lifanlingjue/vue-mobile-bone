<template>
  <page-wrapper :navConfig="navConfig">
    <template slot="content">
      <simple-form v-model="formModel" :formField="formField" ref="test"></simple-form>
    </template>
    <van-button slot="footer" size="large" :text="$t('formExample.validate')" type="info" @click="validate" />

  </page-wrapper>
</template>
<script>
export default {
  name: 'formExample',
  data () {
    return {
      navConfig: {
        title: this.$t('formExample.title'),
        leftText: this.$t('operation.back'),
        leftArrow: true,
        event: {
          'click-left': () => {
            this.$router.go(-1)
          }
        }
      },
      formModel: {
        viewFlag: '我是只读Field',
        input: 'Click me to input'
      }
    }
  },
  computed: {
    formField () {
      return [
        {
          prop: 'viewFlag',
          label: this.$t('formExample.viewFlag'),
          viewFlag: true
        },
        {
          prop: 'input',
          type: 'Input',
          label: this.$t('formExample.input'),
          vValidate: 'required',
          component: {
            required: true
          }
        },
        {
          prop: 'mobile',
          type: 'Input',
          label: this.$t('formExample.mobile'),
          // vee-validate未提供mobile校验，此校验规则为自定义
          vValidate: 'required|mobile',
          component: {
            required: true
          }
        }
      ]
    }
  },
  methods: {
    validate () {
      this.$refs.test.validate()
        .then(valid => {
          debugger
        })
    }
  }
}
</script>
