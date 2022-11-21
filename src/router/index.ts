import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
// 配置路由信息
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../layout/index'),
    redirect: '/home',
    children: [
      {
        //默认 显示home组件
        path: '/home',
        name: 'Home',
        component: () => import('../view/home'),
      },
    ],
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router 
