import Vue from 'vue'
import Vuex from 'vuex'

var Netmask = require('netmask').Netmask
var cidrRegex = require('cidr-regex')

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,

  state: {
    ip_list: []
  },

  mutations: {
    cidr_to_ip (state, ipList) {
      state.ip_list = ipList
    }
  },
  actions: {
    cidr_to_ip ({ commit }, data) {
      var cidr = data.cidr
      var _ipList = []
      if (!cidrRegex({exact: true}).test(cidr)) {
        return
      }
      var block = new Netmask(cidr)
      block.forEach(function (ip, long, index) {
        _ipList.push(ip)
      })

      commit('cidr_to_ip', _ipList)
    }
  }
})
