<template>
  <div class="page__wrapper">
    <van-nav-bar v-if="navConfig" v-bind="navConfig" v-on="navConfig.event" :title="navConfig.title || this.tabConfig.tabs[this.tabConfig.active].name">
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

    <div class="content" :class="{[contentClass]: !!contentClass}">
      <slot name="content"></slot>
    </div>

    <van-tabbar v-if="tabConfig" v-model="tabConfig.active" :fixed="false">
      <van-tabbar-item v-for="(tab,index) in tabConfig.tabs" v-bind="tab" :key="index">{{tab.name}}</van-tabbar-item>
    </van-tabbar>
    <slot v-else name="footer"></slot>
  </div>
</template>
<script>
/**
 * @description:  header content footer 封装
                  navConfig: nav配置，left、right为数组 接收文字/图标
                            title: 非必须，若未传参数，则取tabbar的name
                  tabConfig：tab配置，tabs为数组，接收图标/文字/路由信息
                            active: 必须，指定当前高亮的tab
                  content-class: 配置content的class名
 * @prop {navConfig, tabConfig} 非必须，若未传入参数，则走slot插槽
 */
export default {
  props: {
    navConfig: Object,
    tabConfig: Object,
    contentClass: String
  }
}
</script>
<style lang="less" scoped>
.page__wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
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
    .van-icon,
    .van-nav-bar__text {
      color: #ffffff;
    }
  }
  .content {
    background: #f1f6f9;
    flex: 1;
    position: relative;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
