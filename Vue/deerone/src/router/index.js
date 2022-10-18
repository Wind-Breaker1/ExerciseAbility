import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // 主页
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue'),
    children: [
      // 工作台
      {
        path: 'workbench',
        name: 'Workbench',
        component: () => import(/* webpackChunkName: "Workbench" */ '../views/Workbench.vue')
      },
      // 监控
      {
        path: 'monitor',
        name: 'monitor',
        component: () => import(/* webpackChunkName: "AdvertProDiagnose" */ '../views/monitor'),
        children: [
          {
            path: 'advertprodiagnose',
            name: 'AdvertProDiagnose',
            component: () => import(/* webpackChunkName: "AdvertProDiagnose" */ '../views/monitor/AdvertProDiagnose.vue')
          },
          {
            path: 'advertprogram',
            name: 'advertprogram',
            component: () => import(/* webpackChunkName: "AdvertProgram" */ '../views/monitor/AdvertProgram.vue')
          },
          {
            path: 'warnset',
            name: 'WarnSet',
            component: () => import(/* webpackChunkName: "warnset" */ '../views/monitor/WarnSet.vue'),

          },
          {
            path: '/home',
            redirect: '/home/workbench'
          }
        ]

      },
      // 素材库
      {
        path: 'material',
        name: 'Material',
        component: () => import(/* webpackChunkName: "header" */ '../views/Material.vue')
      },
      // 设置
      {
        path: 'setup',
        name: 'setup',
        component: () => import(/* webpackChunkName: "warnset" */ '../views/setup'),
        children: [
          {
            path: 'account',
            name: 'Account',
            component: () => import(/* webpackChunkName: "account" */ '../views/setup/Account.vue')
          }, 
          
        ]
      },
    ]
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/',
    redirect:'/home'
  }
   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
