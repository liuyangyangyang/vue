<template>
<div id="foot">
 <div class="footer">
    <ul>
      <li v-foot class="active" data-page=" ">
        <i class="ico">&#xe602;</i>
        <b>首页</b>
      </li>
      <li v-foot data-page="buy">
        <i class="ico">&#xe675;</i>
        <b>买买买</b>
      </li>
      <li v-foot data-page="concern">
        <i class="ico">&#xe61b;</i>
        <b>关注</b>
      </li>
      <li v-foot data-page="cart">
        <i class="ico">&#xe638;</i>
        <b>购物车</b>
      </li>
      <li v-foot data-page="my">
        <i class="ico">&#xe603;</i>
        <b>我的</b>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'foot',
  methods: {
    goPage: function (page) {
      console.log(this)
      this.$router.push('/' + page)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
 color: #FF5878;
}
.footer{
  width: 100%;
  height: 44px;
}
.footer ul{
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  display: flex;
}
.footer ul li{
  text-align: center;
  display: -webkit-flex;
  display: flex;
  -webkit-flex:1;
  flex:1;
  flex-direction:column;
  color: #8E8A88;
  line-height: 20px;
}
.footer ul li i{
  font-style: normal;
  font-weight: bold;
  font-size: .18rem;
}
.footer ul .active{
  color: #FF5878;
};
</style>
