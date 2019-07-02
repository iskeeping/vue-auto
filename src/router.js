import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/articleList',
      name: '',
      component: home,
      children: [
        {
          path: '/articleList',
          name: '文章列表',
          component: () => import(/* webpackChunkName: "about" */ './views/articleList.vue'),
          meta: {
            keepAlive: true // 需要被缓存
          }
        },
        {
          path: '/articleCreate',
          name: '文章新建',
          component: () => import(/* webpackChunkName: "about" */ './views/articleCreate.vue'),
          meta: {
            keepAlive: false
          }
        }
      ]
    }
  ]
})

export default router
