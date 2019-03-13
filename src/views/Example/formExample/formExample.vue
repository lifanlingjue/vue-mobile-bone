<template>
  <page-wrapper :navConfig="navConfig">
    <template slot="content">
      <simple-form v-model="formModel" :formField="formField" ref="simple-form"></simple-form>
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
        input: 'Click me to input',
        switch: 'Y'
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
        },
        {
          prop: 'select',
          type: 'Select',
          label: this.$t('formExample.select'),
          vValidate: 'required',
          component: {
            // columns 的数据结构必须包含 value、label
            columns: this.$getDictList('quarter'),
            required: true
          }
        },
        {
          prop: 'datetimePicker',
          type: 'DatetimePicker',
          label: this.$t('formExample.datetimePicker'),
          vValidate: 'required',
          component: {
            required: true
          }
        },
        {
          prop: 'datePicker',
          type: 'DatetimePicker',
          label: this.$t('formExample.datePicker'),
          vValidate: 'required',
          component: {
            type: 'date',
            // format 为自定义属性，声明显示、绑定值的格式，规则遵从moment.js
            format: 'YYYY-MM-DD',
            required: true
          }
        },
        {
          prop: 'switch',
          type: 'Switch',
          label: this.$t('formExample.switch'),
          component: {
            activeValue: 'Y',
            inactiveValue: 'N'
          }
        }
      ]
    }
  },
  methods: {
    validate () {
      console.log(this.formModel)
      this.$refs['simple-form'].validate()
        .then(valid => {
          if (!valid) {
            this.$notify('校验未通过！')
          } else {
            this.$notify({ message: '校验通过，请进行下一步操作！', background: '#07c160' })
          }
        })
    }
  }
}
</script>
