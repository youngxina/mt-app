import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import Index from '@/page/index.vue'
import goodsList from '@/page/goodsList.vue'
import changeCity from '@/page/changeCity.vue'
import Login from '@/page/login.vue'
import Register from '@/page/register.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/index',
      component: defaultPage,
      children: [{
        path: 's/:name',
        name: 'goods',
        component: goodsList
      }, {
        path: '/index',
        name: 'index',
        component: Index

      }, {
        path: '/changeCity',
        name: 'changeCity',
        component: changeCity
      }]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage,
      children: [{
        path: '/login',
        name: 'login',
        component: Login
      }, {
        path: '/register',
        name: 'register',
        component: Register
      }]
    }
  ]
})
