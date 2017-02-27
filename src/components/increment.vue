<template>
  <div id="increment">
        <button @click='add'>Increment +1</button>
  </div>
</template>

<script>
import Vue from 'vue'
/*import { mapActions } from 'vuex'
*/
export default {
  name: 'increment',
  methods: {
    /*...mapActions([
      'increment',
      'add'
    ])*/
	 add()
   {
    this.$store.dispatch('increment',1)
   }
  }
}

</script>

<style lang="less">
</style>
