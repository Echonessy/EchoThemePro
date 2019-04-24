import Vue from 'vue'
import Router from 'vue-router'
import { readSingleFolderFiles } from '@/common/utils/io'
import * as frame from './frame'

Vue.use(Router);

const route =[
  { path: '/400', component: () => import('@/components/error/400'), hidden: true },
  { path: '/403', component: () => import('@/components/error/403'), hidden: true },
  { path: '/404', component: () => import('@/components/error/404'), hidden: true },
  { path: '/500', component: () => import('@/components/error/500'), hidden: true },
  { path: '/503', component: () => import('@/components/error/503'), hidden: true },
  {
    path: '/',
    name: 'index',
    redirect:'/page1',
    component: frame.layout,
    children:[]
  },
  { path: '*',
    redirect: '/404',
    component: frame.error404,
    hidden: true
  }
]

// 读取modules下所有单js路由模块
const routerModules = readSingleFolderFiles(require.context('./modules/', true, /\.js$/))
// 将modules下所有模块路由加入总路由
if (JSON.stringify(routerModules) !== '{}') {
  const adminRouter = route.find(item => item.path === '/')
  Object.keys(routerModules).forEach(key => {
    adminRouter.children.push(...routerModules[key].default)
  })
}


const  router =new Router ({routes: route})

export default  router
