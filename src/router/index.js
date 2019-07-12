import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import Login from '@/components/Login'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },{
      path:'/detail',
      component:Detail
    },{
      path:'/login',
      component:Login
    },{
      path:'/cart',
      component:Cart
    }
  ]
})
