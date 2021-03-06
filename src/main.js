// 生产环境中注释掉以下语句
import 'sysStatic/css/theme-default.scss'
import '../mock/index.js'

import 'babel-polyfill'
import Vue from "vue"
import ElementUI from 'element-ui'
import router from './router'
import store from './store'
import axios from './util/ajax'
import i18n from './util/i18n'
import App from './index'

import './components/install'
import './plugins/install'

import $ from 'jquery'
import "./plugins/ztree/jquery-3.3.1.min"
import "./plugins/ztree/js/jquery.ztree.core.min.js"
import "./plugins/ztree/js/jquery.ztree.excheck.min.js"

// 注册组件到Vue
Vue.prototype.$axios = axios
Vue.use(ElementUI, {
    i18n: (key, value) => i18n.t(key, value)
})

new Vue({
    i18n,
    axios,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
