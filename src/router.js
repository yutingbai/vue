import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Search from './views/Search.vue'
import Mine from './views/Mine.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/search',
      name: 'search',
      component: Search
    }, {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
