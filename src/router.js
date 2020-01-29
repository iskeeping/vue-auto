import Vue from 'vue'
import Router from 'vue-router'
import initRoutes from '@/router/init'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: initRoutes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {  // 判断该路由是否需要登录权限
    let token = localStorage.getItem('jwt-token')
    if (token) {  // 判断当前的token是否存在
      next()
    } else {
      next({
        path: '/login',
        // query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next();
  }

})

export default router
