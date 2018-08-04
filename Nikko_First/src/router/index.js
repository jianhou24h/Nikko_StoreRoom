import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import News from '../components/News'
import Eth from '../components/Eth'
import Lth from '../components/Lth'
import Btc from '../components/Btc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/eth',
      name: 'Eth',
      component: Eth
    },
    {
      path: '/btc',
      name: 'Btc',
      component: Btc
    },
    {
      path: '/lth',
      name: 'Lth',
      component: Lth
    }
  ]
})
