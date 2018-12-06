import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Axios from 'axios'
import Login from '@/components/Login'
import Registration from '@/components/Registration'
import Success from '@/components/Success'
import News from '@/components/News'

Vue.use(Router)
Vue.use(ElementUI)
Vue.prototype.$ajax = Axios

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    },
    {
      path: '/news',
      name: 'News',
      component: News
    }
  ]
})
