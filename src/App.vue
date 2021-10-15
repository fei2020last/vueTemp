<template>
  <router-view></router-view>
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
        console.log('this.$route', this.$route)
        console.log('newRouter', newRouter)
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
</style>
