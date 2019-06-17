import vue from 'vue'
import app from './app.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

vue.config.productionTip = false

new vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
