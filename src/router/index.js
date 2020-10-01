import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  children: [{
      path: '/tomatotime',
      name: 'tomatotime',
      component: () => import('../components/TomatoTime')
    },
    {
      path: '/resttime',
      name: 'Resttime',
      component: () => import('../components/Resttime')
    },
    {
      path: '/halftime',
      name: 'Halftime',
      component: () => import('../components/Halftime')
    },
    {
      path:'/:catchAll(.*)',//路由的重定向
      redirect:'/tomatotime'
    },
    
  ]
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router