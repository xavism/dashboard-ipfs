import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vue-flag-icon'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
