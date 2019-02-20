<template>
  <div class="cidr2ip">
    <input v-model='input_cidr' placeholder='ex: 192.168.0.1/31'>
    <ul>
      <li
        v-for='ip in ip_list'
        v-bind:key='ip'
      >{{ip}}</li>
    </ul>
  </div>
</template>

<script>
var Netmask = require('netmask').Netmask
var cidrRegex = require('cidr-regex')

export default {
  name: 'cidr_to_ip',
  data () {
    return {
      input_cidr: '',
      ip_list: []
    }
  },

  computed: {
    ipList () {
      if (!cidrRegex({exact: true}).test(this.input_cidr)) {
        return []
      }
      var block = Netmask(this.input_cidr)
      var ips = []
      block.forEach(function (ip, long, index) {
        ips.push(ip)
      })

      return ips
    }
  },

  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
