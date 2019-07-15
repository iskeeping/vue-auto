import home from '@/home.vue'

let initRoutes = [
  {
    path: '/',
    // name: '内容管理系统',
    component: home,
    children: [
      {
        path: '/',
        name: '首页',
        component: () => import(/* webpackChunkName: "welcome" */ '@/views/welcome.vue')
      },
      {
        path: '/articleList',
        name: '文章列表',
        component: () => import(/* webpackChunkName: "articleList" */ '@/views/articleList.vue'),
        meta: {
          keepAlive: true,
          path: '/articleList'
        }
      },
      {
        path: '/articleCreate',
        name: '文章新建',
        component: () => import(/* webpackChunkName: "articleCreate" */ '@/views/articleCreate.vue'),
        meta: {
          path: '/articleList'
        }
      }
    ]
  }
]

export default initRoutes
