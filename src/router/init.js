import home from '@/home.vue'
import routerPath from '@/router/routerPath'

let initRoutes = [
  {
    path: routerPath.loginPath,
    name: '登录',
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
        component: () => import(/* webpackChunkName: "welcome" */ '@/views/welcome.vue')
      },
      {
        path: 'articleList',
        name: '文章管理',
        component: () => import(/* webpackChunkName: "articleList" */ '@/views/articleList.vue'),
        meta: {
          keepAlive: true,
          path: routerPath.articleListPath
        }
      },
      {
        path: 'articleCreate',
        name: '文章新建',
        component: () => import(/* webpackChunkName: "articleCreate" */ '@/views/articleCreate.vue'),
        meta: {
          path: routerPath.articleListPath
        }
      },
      {
        path: 'columnList',
        name: '栏目管理',
        component: () => import(/* webpackChunkName: "columnList" */ '@/views/columnList.vue'),
        meta: {
          keepAlive: true,
          path: routerPath.columnListPath
        }
      },
      {
        path: 'columnCreate',
        name: '栏目新建',
        component: () => import(/* webpackChunkName: "columnCreate" */ '@/views/columnCreate.vue'),
        meta: {
          path: routerPath.columnListPath
        }
      },
      {
        path: 'tagList',
        name: '标签管理',
        component: () => import(/* webpackChunkName: "tagList" */ '@/views/tagList.vue'),
        meta: {
          keepAlive: true,
          path: routerPath.tagListPath
        }
      },
      {
        path: 'tagCreate',
        name: '标签新建',
        component: () => import(/* webpackChunkName: "tagCreate" */ '@/views/tagCreate.vue'),
        meta: {
          path: routerPath.tagListPath
        }
      },
      {
        path: 'commentList',
        name: '留言管理',
        component: () => import(/* webpackChunkName: "commentList" */ '@/views/commentList.vue'),
        meta: {
          path: routerPath.commentListPath
        }
      },
      {
        path: 'userList',
        name: '用户管理',
        component: () => import(/* webpackChunkName: "userList" */ '@/views/userList.vue'),
        meta: {
          keepAlive: true,
          path: routerPath.userListPath
        }
      },
      {
        path: 'userCreate',
        name: '用户新建',
        component: () => import(/* webpackChunkName: "userCreate" */ '@/views/userCreate.vue'),
        meta: {
          path: routerPath.userListPath
        }
      },
      {
        path: 'roleList',
        name: '角色管理',
        component: () => import(/* webpackChunkName: "roleList" */ '@/views/roleList.vue'),
        meta: {
          keepAlive: true,
          path: routerPath.roleListPath
        }
      },
      {
        path: 'roleCreate',
        name: '角色新建',
        component: () => import(/* webpackChunkName: "roleCreate" */ '@/views/roleCreate.vue'),
        meta: {
          path: routerPath.roleListPath
        }
      },
      {
        path: 'authorityList',
        name: '权限管理',
        component: () => import(/* webpackChunkName: "authorityList" */ '@/views/authorityList.vue'),
        meta: {
          keepAlive: true,
          path: routerPath.authorityListPath
        }
      },
      {
        path: 'authorityCreate',
        name: '权限新建',
        component: () => import(/* webpackChunkName: "menuCreate" */ '@/views/authorityCreate.vue'),
        meta: {
          path: routerPath.authorityListPath
        }
      },
      {
        path: 'menuList',
        name: '菜单管理',
        component: () => import(/* webpackChunkName: "menuList" */ '@/views/menuList.vue'),
        meta: {
          keepAlive: true,
          path: routerPath.menuListPath
        }
      },
      {
        path: 'menuCreate',
        name: '菜单新建',
        component: () => import(/* webpackChunkName: "menuCreate" */ '@/views/menuCreate.vue'),
        meta: {
          path: routerPath.menuListPath
        }
      },
      {
        path: 'logList',
        name: '日志管理',
        component: () => import(/* webpackChunkName: "logList" */ '@/views/logList.vue'),
        meta: {
          path: routerPath.logListPath
        }
      },
      {
        path: 'informationList',
        name: '消息管理',
        component: () => import(/* webpackChunkName: "informationList" */ '@/views/informationList.vue'),
        meta: {
          path: routerPath.informationListPath
        }
      },
      {
        path: 'noticeList',
        name: '公告管理',
        component: () => import(/* webpackChunkName: "noticeList" */ '@/views/noticeList.vue'),
        meta: {
          keepAlive: true,
          path: routerPath.noticeListPath
        }
      },
      {
        path: 'noticeCreate',
        name: '公告新建',
        component: () => import(/* webpackChunkName: "noticeCreate" */ '@/views/noticeCreate.vue'),
        meta: {
          path: routerPath.noticeListPath
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
