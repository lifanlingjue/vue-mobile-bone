<template>
  <form class="simple-form" data-vv-scope="simple-form">
    <template v-for="(formItem, index) in formField">
      <template v-if="!formItem.hidden">
        <!-- 自定义插槽 -->
        <template v-if="formItem.slotName">
          <slot :name="formItem.slotName" v-bind="{form: value}"></slot>
        </template>
        <template v-else-if="viewFlag || formItem.viewFlag">
          <van-cell v-model="value[formItem.prop]" :key="index" :title="formItem.label" v-bind="formItem.component" v-on="formItem.event" />
        </template>
        <template v-else>
          <van-field v-if="formItem.type === 'Input'" v-model="value[formItem.prop]" v-validate="formItem.vValidate" :key="index" :label="formItem.label" :name="formItem.prop" :error-message="errors.first(formItem.prop, 'simple-form')" clearable input-align="right" v-bind="formItem.component" v-on="formItem.event" />
        </template>
      </template>
    </template>
  </form>
</template>
<script>
export default {
  name: 'simple-form',
  props: {
    value: { type: Object, required: true },
    /**
         * formField 组成结构
         * prop (String) --> 绑定的属性
         * label (String) --> 表单每项控件的 label
         * type (String) --> 组件的类型
         * component (Object) --> 组件的相应属性
         * hidden (Boolean) --> 组件的显隐属性
         * viewFlag (Boolean) --> 组件的是否可编辑属性
         * slotName (String) --> 插槽的名称
         */
    formField: { type: Array, required: true },
    // 表单是否为查看模式
    viewFlag: { type: Boolean, default: false },
    dataVvScope: { type: String }
  },
  methods: {
    validate () {
      return this.$validator.validateAll('simple-form')
    }
  }
}
</script>
<style lang="less">
.simple-form {
  .van-field__error-message {
    text-align: right;
  }
}
</style>
