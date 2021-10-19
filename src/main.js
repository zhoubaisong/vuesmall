import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast/index'

import fastclick from 'fastclick'
fastclick.attach(document.body); //解决移动端延迟300ms的问题，浏览器上测试不了

import vueLazyLoad from 'vue-lazyload'
Vue.use(vueLazyLoad);

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(toast);

new Vue({
  router,
  store,
  toast,
  render: h => h(App)
}).$mount('#app')
