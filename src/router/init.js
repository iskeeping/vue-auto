import home from '@/home.vue'
import routerPath from '@/router/routerPath'

let initRoutes = [
  {
    path: routerPath.loginPath,
    name: '登录',
    meta: {
      requireAuth: false
    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/login.vue')
  },
  {
    path: routerPath.homePath,
    // name: '内容管理系统',
    component: home,
    children: [
      {
        path: '',
        name: '首页',
        component: () => import(/* webpackChunkName: "welcome" */ '@/views/welcome.vue'),
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'courseList',
        name: '课程管理',
        component: () => import(/* webpackChunkName: "courseList" */ '@/views/courseList.vue'),
        meta: {
          keepAlive: true,
          path: routerPath.courseListPath,
          requireAuth: true
        }
      },
      {
        path: 'courseCreate',
        name: '课程新建',
        component: () => import(/* webpackChunkName: "courseCreate" */ '@/views/courseCreate.vue'),
        meta: {
          path: routerPath.courseListPath,
          requireAuth: true
        }
      },
      {
        path: 'columnList',
        name: '栏目管理',
        component: () => import(/* webpackChunkName: "columnList" */ '@/views/columnList.vue'),
        meta: {
          keepAlive: true,
          path: routerPath.columnListPath,
          requireAuth: true
        }
      },
      {
        path: 'columnCreate',
        name: '栏目新建',
        component: () => import(/* webpackChunkName: "columnCreate" */ '@/views/columnCreate.vue'),
        meta: {
          path: routerPath.columnListPath,
          requireAuth: true
        }
      },
      {
        path: 'userList',
        name: '用户管理',
        component: () => import(/* webpackChunkName: "userList" */ '@/views/userList.vue'),
        meta: {
          keepAlive: true,
          path: routerPath.userListPath,
          requireAuth: true
        }
      },
      {
        path: 'userCreate',
        name: '用户新建',
        component: () => import(/* webpackChunkName: "userCreate" */ '@/views/userCreate.vue'),
        meta: {
          path: routerPath.userListPath,
          requireAuth: true
        }
      },
      {
        path: 'roleList',
        name: '角色管理',
        component: () => import(/* webpackChunkName: "roleList" */ '@/views/roleList.vue'),
        meta: {
          keepAlive: true,
          path: routerPath.roleListPath,
          requireAuth: true
        }
      },
      {
        path: 'roleCreate',
        name: '角色新建',
        component: () => import(/* webpackChunkName: "roleCreate" */ '@/views/roleCreate.vue'),
        meta: {
          path: routerPath.roleListPath,
          requireAuth: true
        }
      },
      {
        path: 'authorityList',
        name: '权限管理',
        component: () => import(/* webpackChunkName: "authorityList" */ '@/views/authorityList.vue'),
        meta: {
          keepAlive: true,
          path: routerPath.authorityListPath,
          requireAuth: true
        }
      },
      {
        path: 'authorityCreate',
        name: '权限新建',
        component: () => import(/* webpackChunkName: "menuCreate" */ '@/views/authorityCreate.vue'),
        meta: {
          path: routerPath.authorityListPath,
          requireAuth: true
        }
      },
      {
        path: 'menuList',
        name: '菜单管理',
        component: () => import(/* webpackChunkName: "menuList" */ '@/views/menuList.vue'),
        meta: {
          keepAlive: true,
          path: routerPath.menuListPath,
          requireAuth: true
        }
      },
      {
        path: 'menuCreate',
        name: '菜单新建',
        component: () => import(/* webpackChunkName: "menuCreate" */ '@/views/menuCreate.vue'),
        meta: {
          path: routerPath.menuListPath,
          requireAuth: true
        }
      },
      {
        path: 'imgList',
        name: '图片管理',
        component: () => import(/* webpackChunkName: "imgList" */ '@/views/imgList.vue'),
        meta: {
          keepAlive: true,
          path: routerPath.imgListPath,
          requireAuth: true
        }
      },
      {
        path: 'imgCreate',
        name: '图片新建',
        component: () => import(/* webpackChunkName: "imgCreate" */ '@/views/imgCreate.vue'),
        meta: {
          path: routerPath.imgListPath,
          requireAuth: true
        }
      }
    ]
  },
  {
    path: '*',
    name: '文件找不到',
    component: () => import(/* webpackChunkName: "notFoundComponent" */ '@/views/notFoundComponent.vue')
  }
]

export default initRoutes