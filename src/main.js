//vue-router路由安装: npm install vue-router --save  现在版本:--------> @3.4.9
//@vue/cli脚手架查看版本:vue -V 现在:-------->4.5.9
//vue版本查看版本:npm list vue 现在:--------->vue@3.0.3
//后期可能会改
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


createApp(App).use(router).mount('#app')

