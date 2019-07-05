import Vue from 'vue'
import Router from 'vue-router'
import { routerConfig } from './routerConfig'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: routerConfig
})

export default router
