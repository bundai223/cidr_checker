<template>
  <div class="ip_to_cidr">
    <textarea v-model='input_ips' placeholder='ex: 192.168.0.1/31'></textarea>
    <ul>
      <li
        v-for='ip in ipList'
        v-bind:key='ip'
      >{{ip}}</li>
    </ul>
  </div>
</template>

<script>
var CIDR = require('cidr-js')

export default {
  name: 'ip_to_cidr',
  data () {
    return {
      input_ips: '',
      cidr: new CIDR()
    }
  },

  computed: {
    ipList () {
      return this.cidr.list(this.input_ips)
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
