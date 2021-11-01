import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mainStyle from './styles/main.scss'

Vue.config.productionTip = false

const req = require.context('@/components', true, /\.(js|vue)$/i)
req.keys().map(key => {
  if (!(req(key).default || {}).name) {
    return
  }
  Vue.component(req(key).default.name, req(key).default)
})

new Vue({
  router,
  store,
  mainStyle,
  render: (h) => h(App),
}).$mount('#app')
