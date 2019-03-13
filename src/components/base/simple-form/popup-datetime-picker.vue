<template>
  <van-cell value-class="popup__datetime__picker--value" :title="formField.label" is-link @click="show = true" v-bind="formField.component" v-on="formField.event">
    <van-popup v-model="show" position="bottom" get-container="body" @opened="handlePopupOpened" v-bind="formField.component" v-on="formField.event">
      <van-datetime-picker ref="datetime-picker" show-toolbar @confirm="handleDatetimePickerConfirm" @cancel="show = false" v-bind="formField.component" v-on="formField.event" />
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
   *                          format (String) => 自定义属性，声明显示、绑定值的格式，规则遵从moment.js
   */
  name: 'popup-datetime-picker',
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
      if (this.value) {
        return this.$moment(this.value).format(this.formField.component.format || 'YYYY-MM-DD HH:mm:ss')
      } else {
        return ''
      }
    }
  },
  methods: {
    handlePopupOpened () {
      // popup渲染完成后，设置datetime-picker的匹配索引  value为空时则自动设置到当天为焦点
      let dateObj = this.$moment(this.value).toDate()
      this.$refs['datetime-picker'].updateColumnValue(dateObj)

      // 通过阅读源码，该组件只有touchEnd事件触发时 才会执行change事件，父组件根据change事件才会更新值，所以需要手动触发一下change！
      this.$nextTick(() => {
        let firstColumn = this.$refs['datetime-picker'].$refs.picker.children[0]
        firstColumn.$emit('change', firstColumn.currentIndex)
      })
    },
    handleDatetimePickerConfirm (value) {
      this.$emit('input', this.$moment(value).format(this.formField.component.format || 'YYYY-MM-DD HH:mm:ss'))
      this.show = false
    }
  }
}
</script>
<style lang="less">
.popup__datetime__picker--value {
  color: #323233;
}
</style>
