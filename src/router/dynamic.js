const home = () => import(/* webpackChunkName: "home" */ '@/home.vue')
import routerPath from '@/router/routerPath'

let dynamicRoutes = [
  [
    {
      path: '/admin',
      component: home,
      children: [
        {
          path: 'imgList',
          name: '图片列表',
          component: () => import(/* webpackChunkName: "imgList" */ '@/views/imgList.vue'),
          meta: {
            keepAlive: true,
            path: routerPath.imgListPath
          }
        },
        {
          path: 'imgUpload',
          name: '图片上传',
          component: () => import(/* webpackChunkName: "imgUpload" */ '@/views/imgUpload.vue'),
          meta: {
            path: routerPath.imgListPath
          }
        }
      ]
    }
  ]
]
export default dynamicRoutes
