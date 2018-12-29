import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import FourZeroFour from '@/components/FourZeroFour'
import FiveHundred from '@/components/FiveHundred'
import LockScreen from '@/components/LockScreen'
import RecoverPassword from '@/components/RecoverPassword'
import Register from '@/components/Register'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/404',
      name: 'FourZeroFour',
      component: FourZeroFour
    },
    {
      path: '/500',
      name: 'FiveHundred',
      component: FiveHundred
    },
    {
      path: '/lockScreen',
      name: 'LockScreen',
      component: LockScreen
    },
    {
      path: '/recoverPassword',
      name: 'RecoverPassword',
      component: RecoverPassword
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
