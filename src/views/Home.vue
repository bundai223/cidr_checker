<template>
  <div class="home">
    <CidrChecker/>
  </div>
</template>

<script>
// @ is an alias to /src
import CidrChecker from '@/components/CidrChecker.vue'

export default {
  name: 'home',
  components: {
    CidrChecker
  }
}
</script>
