import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/articleList',
            name: '内容管理',
            component: home,
            children: [
                {
                    path: '/articleList',
                    name: '',
                    component: () => import(/* webpackChunkName: "about" */ './views/articleList.vue'),
                    meta: {
                        keepAlive: true // 需要被缓存
                    }
                },
                {
                    path: '/articleCreate',
                    name: '',
                    component: () => import(/* webpackChunkName: "about" */ './views/articleCreate.vue'),
                    meta: {
                        keepAlive: false 
                    }
                }
            ]
        }
    ]
})
