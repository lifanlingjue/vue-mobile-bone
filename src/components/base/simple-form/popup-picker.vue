<template>
  <van-cell value-class="popup__picker--value" :title="formField.label" is-link @click="show = true" v-bind="formField.component" v-on="formField.event">
    <van-popup v-model="show" position="bottom" get-container="body" @opened="handlePopupOpened" v-bind="formField.component" v-on="formField.event">
      <van-picker ref="picker" show-toolbar value-key="label" @confirm="handlePickerConfirm" @cancel="show = false" v-bind="formField.component" v-on="formField.event" />
    </van-popup>
    <span>{{template}}</span>
    <div class="van-field__error-message">{{errorMessage}}</div>
  </van-cell>
</template>
<script>
export default {
  /**
   * @description:  errorMessage (String) => 组件校验异常信息
   *                formField (Object) => 组件配置信息
   *                          columns (Array) => picker的备选项，数据结构必须包含 value、label！！！
   *                                  value (String, Object) => 作为返回值返回
   *                                  label (String) => cell、picker备选项的显示值
   */
  name: 'popup-picker',
  props: {
    value: { required: true },
    formField: { type: Object, required: true },
    errorMessage: { type: String }
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    template () {
      let column = this.formField.component.columns.find((item) => {
        return item.value === this.value
      })
      return column ? column.label : ''
    }
  },
  methods: {
    handlePopupOpened () {
      // popup渲染完成后，设置picker的匹配索引
      let columnIndex = this.formField.component.columns.findIndex(item => {
        return item.value === this.value
      })
      if (columnIndex > -1) {
        this.$refs.picker.setColumnIndex(0, columnIndex)
      }
    },
    handlePickerConfirm (column, index) {
      this.$emit('input', column.value)
      this.show = false
    }
  }
}
</script>
<style lang="less">
.popup__picker--value {
  color: #323233;
}
</style>
