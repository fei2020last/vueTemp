// 路由配置文件
import {
  createRouter,
  createWebHistory
} from 'vue-router'
const index = () => import('@/views/home/index.vue') //机构管理
const routes = [{
    path: '/',
    redirect: '/index'
  },
  {
    name: 'index',
    path: '/index',
    component: index, //主页
  }
]
const routerHistory = createWebHistory()
const router = createRouter({
  mode: 'history',
  history: routerHistory,
  routes
})

export default router