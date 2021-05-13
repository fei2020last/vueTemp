//查看vue的版本号:npm list vue 
//@vue/cli脚手架查看版本:vue -V 
//vuex版本4.0.0
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { GlobalDatas } from './utils/GlobalDatas'
import { xhr, def } from './utils/axios.js'
import { post } from './utils/axiosRequest.js'
import * as echarts from 'echarts';

//element+
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import helloworld from '@/components/HelloWorld.vue'

const app = createApp(App)
app.component('helloworld', {helloworld})
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')

//使用GlobalDatas内的全局变量
app.config.globalProperties.$datas= GlobalDatas

app.config.globalProperties.$axios = def
app.config.globalProperties.$xhr = xhr
app.config.globalProperties.$post = post
app.config.globalProperties.$echarts = echarts



router.beforeEach(({meta,path}, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  let auth = meta.auth
 
  // let isLogin = store.state.user.isLogin
  // console.log("store.state===",useStore().state);
  let isLogin = false
  if (auth && !isLogin) {
    next({
      path: '/login',
      query: {
        redirect: path === '/login' ? null : path
      }
    })
  } else {
    next()
  }
  if (path === '/login' && isLogin) {
    router.push({
      path: '/index'
    })
  }
})