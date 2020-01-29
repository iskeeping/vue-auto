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
        path: 'articleList',
        name: '文章管理',
        component: () => import(/* webpackChunkName: "articleList" */ '@/views/articleList.vue'),
        meta: {
          keepAlive: true,
          path: routerPath.articleListPath,
          requireAuth: true
        }
      },
      {
        path: 'articleCreate',
        name: '文章新建',
        component: () => import(/* webpackChunkName: "articleCreate" */ '@/views/articleCreate.vue'),
        meta: {
          path: routerPath.articleListPath,
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
        path: 'tagList',
        name: '标签管理',
        component: () => import(/* webpackChunkName: "tagList" */ '@/views/tagList.vue'),
        meta: {
          keepAlive: true,
          path: routerPath.tagListPath,
          requireAuth: true
        }
      },
      {
        path: 'tagCreate',
        name: '标签新建',
        component: () => import(/* webpackChunkName: "tagCreate" */ '@/views/tagCreate.vue'),
        meta: {
          path: routerPath.tagListPath,
          requireAuth: true
        }
      },
      {
        path: 'commentList',
        name: '留言管理',
        component: () => import(/* webpackChunkName: "commentList" */ '@/views/commentList.vue'),
        meta: {
          path: routerPath.commentListPath,
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
        path: 'logList',
        name: '日志管理',
        component: () => import(/* webpackChunkName: "logList" */ '@/views/logList.vue'),
        meta: {
          path: routerPath.logListPath,
          requireAuth: true
        }
      },
      {
        path: 'informationList',
        name: '消息管理',
        component: () => import(/* webpackChunkName: "informationList" */ '@/views/informationList.vue'),
        meta: {
          path: routerPath.informationListPath,
          requireAuth: true
        }
      },
      {
        path: 'noticeList',
        name: '公告管理',
        component: () => import(/* webpackChunkName: "noticeList" */ '@/views/noticeList.vue'),
        meta: {
          keepAlive: true,
          path: routerPath.noticeListPath,
          requireAuth: true
        }
      },
      {
        path: 'noticeCreate',
        name: '公告新建',
        component: () => import(/* webpackChunkName: "noticeCreate" */ '@/views/noticeCreate.vue'),
        meta: {
          path: routerPath.noticeListPath,
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
