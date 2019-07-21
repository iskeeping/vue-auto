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
        name: '文章管理',
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
      },
      {
        path: '/columnList',
        name: '栏目管理',
        component: () => import(/* webpackChunkName: "columnList" */ '@/views/columnList.vue'),
        meta: {
          keepAlive: true,
          path: '/columnList'
        }
      },
      {
        path: '/columnCreate',
        name: '栏目新建',
        component: () => import(/* webpackChunkName: "columnCreate" */ '@/views/columnCreate.vue'),
        meta: {
          path: '/columnList'
        }
      },
      {
        path: '/tagList',
        name: '标签管理',
        component: () => import(/* webpackChunkName: "tagList" */ '@/views/tagList.vue'),
        meta: {
          keepAlive: true,
          path: '/tagList'
        }
      },
      {
        path: '/tagCreate',
        name: '标签新建',
        component: () => import(/* webpackChunkName: "tagCreate" */ '@/views/tagCreate.vue'),
        meta: {
          path: '/tagList'
        }
      },
      {
        path: '/commentList',
        name: '留言管理',
        component: () => import(/* webpackChunkName: "commentList" */ '@/views/commentList.vue'),
        meta: {
          path: '/commentList'
        }
      },
      {
        path: '/userList',
        name: '用户管理',
        component: () => import(/* webpackChunkName: "userList" */ '@/views/userList.vue'),
        meta: {
          keepAlive: true,
          path: '/userList'
        }
      },
      {
        path: '/userCreate',
        name: '角色新建',
        component: () => import(/* webpackChunkName: "userCreate" */ '@/views/userCreate.vue'),
        meta: {
          path: '/userList'
        }
      },
      {
        path: '/roleList',
        name: '角色管理',
        component: () => import(/* webpackChunkName: "roleList" */ '@/views/roleList.vue'),
        meta: {
          keepAlive: true,
          path: '/roleList'
        }
      },
      {
        path: '/roleCreate',
        name: '角色新建',
        component: () => import(/* webpackChunkName: "roleCreate" */ '@/views/roleCreate.vue'),
        meta: {
          path: '/roleList'
        }
      },
      {
        path: '/authorityList',
        name: '权限管理',
        component: () => import(/* webpackChunkName: "authorityList" */ '@/views/authorityList.vue'),
        meta: {
          keepAlive: true,
          path: '/authorityList'
        }
      },
      {
        path: '/menuList',
        name: '菜单管理',
        component: () => import(/* webpackChunkName: "menuList" */ '@/views/menuList.vue'),
        meta: {
          keepAlive: true,
          path: '/menuList'
        }
      },
      {
        path: '/logList',
        name: '日志管理',
        component: () => import(/* webpackChunkName: "logList" */ '@/views/logList.vue'),
        meta: {
          path: '/logList'
        }
      },
      {
        path: '/informationList',
        name: '消息管理',
        component: () => import(/* webpackChunkName: "informationList" */ '@/views/informationList.vue'),
        meta: {
          path: '/informationList'
        }
      },
      {
        path: '/noticeList',
        name: '公告管理',
        component: () => import(/* webpackChunkName: "noticeList" */ '@/views/noticeList.vue'),
        meta: {
          keepAlive: true,
          path: '/noticeList'
        }
      },
      {
        path: '/noticeCreate',
        name: '公告新建',
        component: () => import(/* webpackChunkName: "noticeCreate" */ '@/views/noticeCreate.vue'),
        meta: {
          path: '/noticeList'
        }
      }
    ]
  }
]

export default initRoutes
