// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueReusource from 'vue-resource'
import App from './App'
import router from './router'
import '@/assets/css/app.css'


Vue.config.productionTip = false

Vue.use(VueReusource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
