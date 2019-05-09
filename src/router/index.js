import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import CidrChecker from '@/components/CidrChecker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CidrChecker',
      component: CidrChecker
    }
  ]
})
