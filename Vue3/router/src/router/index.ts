import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    meta: {
      title: '登录页面',
      transition: 'animate__fadeIn'
    },
    component: () => import('@/components/login.vue'),
  },
  {
    path: '/reg',
    name: 'Reg',
    meta: {
      title: '注册页面',
      transition: 'animate__bounceIn'

    },
    component: () => import('@/components/reg.vue'),
  }

]

declare module 'vue-router' {
  interface RouteMeta {
    title: string
  }
}

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (to, from, savePosition) => {
    console.log('====', savePosition)
    if (savePosition) {
      return savePosition
    } else {
      return {
        top: 0
      }
    }
  },
  routes
})


router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  console.log(to);
  next()
})
export default router