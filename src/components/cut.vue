<template>
  <div id="cut">
        <button @click='cut'>Increment -1</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'cut',
  methods: {
    ...mapActions([
      'cut'
    ])
  }
}

</script>

<style lang="less">
</style>
