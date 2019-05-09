<template>
  <div class="cidr2ip">
    <input v-model='input_cidr' placeholder='ex: 192.168.0.1/31' v-on:change='cidrChanged'>
    <ul>
      <li
        v-for='ip in ipList'
        v-bind:key='ip'
      >{{ip}}</li>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'cidr_to_ip',
  data () {
    return {
      input_cidr: ''
    }
  },

  computed: {
    ipList () {
      return this.$store.getters.ipList
    }
  },

  methods: {
    cidrChanged: _.debounce(function () {
      this.$store.dispatch('cidr_to_ip', { cidr: this.input_cidr })
    }, 500)
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
