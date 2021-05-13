// 这里跟vue2有点区别，vue2中是直接导入vue(import Vuex from 'vuex'),然后通过vue.use(xxx)
import {createStore} from 'vuex'
import user from './modules/user'
import demo from './demo'
//因为我把模块拆分了，但是我又不想每次都导入，就通过这个自动导入modules目录下的模块
const modulesFiles = require.context('./modules', true, /\.js$/)
const modulesItem = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user: user
  }
})

export default createStore({
  modulesItem,
  //也可以将外部的创建
  demo
})
