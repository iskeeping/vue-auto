import home from './home.vue'

let routerConfig = [
  {
    path: '/',
    // name: '内容管理系统',
    component: home,
    children: [
      {
        path: '/',
        name: '首页',
        component: () => import(/* webpackChunkName: "home" */ './views/index.vue')
      },
      {
        path: '/articleList',
        name: '文章列表',
        component: () => import(/* webpackChunkName: "articleList" */ './views/articleList.vue')
      },
      {
        path: '/articleCreate',
        name: '文章新建',
        component: () => import(/* webpackChunkName: "articleCreate" */ './views/articleCreate.vue')
      },
      {
        path: '/imgList',
        name: '图片列表',
        component: () => import(/* webpackChunkName: "imgList" */ './views/imgList.vue')
      },
      {
        path: '/imgUpload',
        name: '图片上传',
        component: () => import(/* webpackChunkName: "imgUpload" */ './views/imgUpload.vue')
      }
    ]
  }
]
export { routerConfig }
