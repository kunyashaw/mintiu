// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// axios
import Axios from 'axios'
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'http://localhost:3000/';

Vue.config.productionTip = false
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUserCog } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {faBookmark}  from '@fortawesome/free-solid-svg-icons'
import {faHeart}  from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)
library.add(faHome)
library.add(faUserCog)
library.add(faCog)
library.add(faShoppingCart)
library.add(faBookmark)
library.add(faHeart)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// 准备tab对应的组件
import IndexComponent from '@/components/Index'
import CartComponent from '@/components/Cart'
import UserCenterComponent from '@/components/UserCenter'
import SettingsComponent from '@/components/Settings'
Vue.component('index',IndexComponent)
Vue.component('cart',CartComponent)
Vue.component('usercenter',UserCenterComponent)
Vue.component('settings',SettingsComponent)


import myStore from './store'
Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:myStore,
  components: { App },
  template: '<App/>'
})
