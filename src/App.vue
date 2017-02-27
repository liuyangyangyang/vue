<template>
  <div id="app">
    <!-- <Display></Display>
    <Increment></Increment>
    <Cut></Cut> -->
  	 <div class="wrapper">
            <router-view></router-view> 
     </div>
           <foot></foot>
  </div>
</template>

<script>
import Display from './components/display'
import Increment from './components/increment'
import Cut from './components/cut'

import store from './vue/store' 
import theDefault, { name1, name2, name3 } from './script/test'
import foot from './components/footer'

export default {
  components: {
    Display,
    Increment,
    Cut,
    foot
  },
  name: 'app',
  store: store,
  created () {
    console.log(theDefault)
    console.log(name1, name2, name3)
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0; 
}
ul,ol{
	list-style: none;
}
html,body{
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 12px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: -webkit-flex;
  display: flex;
  flex-direction:column;
}

.wrapper{
  -webkit-flex:1;
  flex:1;
  overflow: hidden;
}

@font-face {
  font-family: "iconfont";
  src: url("./images/iconfont/iconfont.ttf");
  src: url("./images/iconfont/iconfont.woff"); 
 }
.ico{
	font-family: "iconfont";
}

</style>
