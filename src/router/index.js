// 路由配置文件
import { createRouter, createWebHistory } from 'vue-router'
const login = () => import('@/views/login/login.vue') //登录
const routes = [{
    name: 'index',
    path: '/',
    component: () => import('../views/index/index.vue') //首页
  },

  {
    name: 'index',
    path: '/index',
    component: () => import('../views/index/index.vue') //首页
  }
]
const routerHistory = createWebHistory()
const router = createRouter({
  mode: 'history',
  history: routerHistory,
  routes
})

export default router