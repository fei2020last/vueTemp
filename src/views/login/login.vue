<!-- 登录页 -->
<template>
  <div class="loginPage">
    <h1>欢迎来到登录页</h1>
    <h2>{{netError}}</h2>
    <el-button type="success" @click="goLogin()">跳转首页</el-button>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'login',
  props: [],
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      loginForm:{
        username: 'admin',
        password: '123456'
      },
      netError: this.$datas.netError
    }
  },
  //计算属性
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goLogin() {
      this.$xhr
        .login(this.loginForm)
        .then((res) => {
          console.log('res====>', res)
          if (res.data) {
            this.$router.push({ name: 'index' })
          }
        })
        .catch((e) => {
          console.log(e)
          console.log('登陆失败')
          //this.$message.error('用户名或密码错误')
        })
    }
  },
  //生命周期 - 创建之前
  beforeCreate() {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载之前
  beforeMount() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //生命周期 - 更新之前
  beforeUpdate() {},
  //生命周期 - 更新之后
  updated() {},
  //生命周期 - 销毁之前
  beforeUnmount() {},
  //生命周期 - 销毁完成
  unmounted() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {}
}
</script>
<style lang='less'>
//@import url(); 引入公共css类
.loginPage {
}
</style>