<template>
  <div id="app">
    <router-view></router-view>
    <div
      class="copyWriting"
      :style="{ color: curTagName === 'homePage' ? '#ffffff' : '' }"
      v-if="curTagName !== 'login'"
    >*本模板仅供参考，不用于考核和发布</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      curTagName: ''
    }
  },
  watch: {
    $route: {
      handler(newRouter) {
        // console.log('this.$route', this.$route)  console.log('newRouter', newRouter)
        this.curTagName = newRouter.name
      },
      immediate: true
    }
  }
}
</script>

<style>
html {
  background: #deebfd;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, Microsoft Yahei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  min-height: 600px;
  min-width: 1580px;
  overflow: hidden;
}
.copyWriting {
  position: absolute;
  left: 45%;
  bottom: 4px;
  font-size: 14px;
  color: #666;
}
</style>

