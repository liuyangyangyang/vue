<template>
  <div id="display">
        <h4>Count is {{getCount}}</h4>
        <h3>请求返回的结果：{{username}}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
name: 'display',
computed: {
  ...mapGetters([
    'getCount',
    'username'
  ])
}
}

</script>

<style lang="less">
</style>
