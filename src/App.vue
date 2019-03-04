<template>
  <div id="app">
    <transition name="van-slide-right">
      <router-view />
    </transition>
  </div>
</template>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
