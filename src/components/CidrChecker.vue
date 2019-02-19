<template>
  <div class="CidrChecker">
    <label>mode</label>
    <select v-model='current_mode'>
      <option v-for='mode in modes' v-bind:value="mode.name">{{mode.jp}}</option>
    </select>
    <keep-alive>
      <Cidr2Ip v-if='need_ip'/>
      <Ip2Cidr v-if='need_cidr'/>
    </keep-alive>
  </div>
</template>

<script>

import Cidr2Ip from './Cidr2Ip.vue'
import Ip2Cidr from './Ip2Cidr.vue'

var MODE_C2I = 'cidr_to_ip'
var MODE_I2C = 'ip_to_cidr'

export default {
  name: 'cidr_checker',

  components: {
    Cidr2Ip,
    Ip2Cidr
  },

  data () {
    return {
      current_mode: MODE_C2I
    }
  },

  computed: {
    need_ip () {
      return this.current_mode === MODE_C2I
    },
    need_cidr () {
      return this.current_mode === MODE_I2C
    },
    modes () {
      return [
        {name: MODE_C2I, jp: 'CIDRをIPへ'},
        {name: MODE_I2C, jp: 'IPのリストをCIDRへ'}
      ]
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
