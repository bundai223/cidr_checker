// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueAnalytics from 'vue-analytics'

import App from './App'
import router from './router'
import storeroot from './store'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueAnalytics, {
  id: 'UA-139063243-2',
  router
})

const store = new Vuex.Store(storeroot)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App }
})
