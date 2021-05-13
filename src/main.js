//查看vue的版本号:npm list vue 
//@vue/cli脚手架查看版本:vue -V 
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//elementplus组件
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')


