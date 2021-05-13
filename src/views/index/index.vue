<!-- 首页 -->
<template>
  <div class="indexPage">
    <div class>
      <!-- 卡在VUE3不能使用Element-UI -->
      <el-select></el-select>
      <el-button type="primary" size="small" @click="goLogin()">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'index',
  props: [],
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {}
  },
  //计算属性
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //跳转登录页
    goLogin() {
       this.$router.push({ path: "/login" });
    },
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
.indexPage {
}
</style>