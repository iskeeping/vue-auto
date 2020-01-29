import routerPath from '@/router/routerPath'

const home = () => import(/* webpackChunkName: "home" */ '@/home.vue')

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
            path: routerPath.imgListPath,
            requireAuth: true
          }
        },
        {
          path: 'imgUpload',
          name: '图片上传',
          component: () => import(/* webpackChunkName: "imgUpload" */ '@/views/imgUpload.vue'),
          meta: {
            path: routerPath.imgListPath,
            requireAuth: true
          }
        }
      ]
    }
  ]
]
export default dynamicRoutes
