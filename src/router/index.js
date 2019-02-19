import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Cidr2Ip from '@/components/Cidr2Ip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cidr2Ip',
      component: Cidr2Ip
    }
  ]
})
