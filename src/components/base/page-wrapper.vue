<template>
  <div class="page-wrapper c_flex c_direction_v">
    <van-nav-bar v-if="navConfig" :title="navConfig.title || this.tabConfig.tabs[this.tabConfig.active].name">
      <template v-if="navConfig.left">
        <template v-for="(left, index) in navConfig.left">
          <van-icon v-if="left.type === 'icon'" class="nav_button" v-bind="left.componentProp" :name="left.name" slot="left" :key="index" @click="left.click" />
          <span v-else class="nav_button" v-text="left.name" slot="left" :key="index" @click="left.click" />
        </template>
      </template>
      <template v-if="navConfig.right">
        <template v-for="(left, index) in navConfig.right">
          <van-icon v-if="left.type === 'icon'" class="nav_button" v-bind="left.componentProp" :name="left.name" slot="right" :key="index" @click="left.click" />
          <span v-else class="nav_button" v-text="left.name" slot="right" :key="index" @click="left.click" />
        </template>
      </template>
    </van-nav-bar>
    <slot v-else name="header"></slot>

    <div class="content c_flex_1">
      <slot name="content"></slot>
    </div>

    <van-tabbar v-if="tabConfig" v-model="tabConfig.active" :fixed="false">
      <van-tabbar-item v-for="(tab,index) in tabConfig.tabs" v-bind="tab" :key="index">{{tab.name}}</van-tabbar-item>
    </van-tabbar>
    <slot v-else name="footer"></slot>
  </div>
</template>
<script>
export default {
  props: {
    navConfig: Object,
    tabConfig: Object
  }
}
</script>
<style lang="less" scoped>
.page-wrapper {
  height: 100%;
  .van-nav-bar {
    background-image: url("../../assets/nav_bg.png");
    background-size: cover;
    .van-nav-bar__title {
      color: #ffffff;
    }
    .nav_button {
      color: #ffffff;
      display: inline-block;
      height: 100%;
      margin: 0 5px;
    }
  }
  .content {
    position: relative;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
