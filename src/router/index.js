import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/index'
import page1 from '@/components/page1'
import page1of2 from '@/components/page1-2'
import page2 from '@/components/page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1
    },
    {
      path: '/page1/2',
      name: 'page1of2',
      component: page1of2
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    }
  ]
})
