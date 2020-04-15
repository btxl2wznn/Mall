import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import Toast from 'components/common/toast'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

Vue.use(Toast)

//解决移动端300ms延迟
FastClick.attach(document.body)

//添加图片懒加载
Vue.use(VueLazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
