<template>
<div id="my">
  <div class="my-inform">
    <ul>
      <li class="l1">
        <span class="ico s1">&#xe619;</span>
        <span class="ico s2">&#x343c;</span>
        <span class="ico s3">&#xe6ac;</span>
      </li>
      <li class="l2">
        <img src="../images/sean.png" alt="">
      </li>
      <li class="l3">
        <span class="l3s1">Sean小Y</span>
        <span class="l3s2">申请加v享特权</span>
      </li>
      <li class="l4">
        <span>关注2</span>
        <span>粉丝2</span>
      </li>
    </ul>
  </div>
  <div class="my-con1">
    <ul>
      <li>
        <i class="ico">&#xe64d;</i>
        <b>关注</b>
      </li>
      <li>
        <i class="ico">&#xe621;</i>
        <b>收藏</b>
      </li>
      <li>
        <i class="ico">&#xe60c;</i>
        <b>足迹</b>
      </li>
    </ul>
  </div>
  <div class="my-con2">
    <ul>
      <li>
        <i class="ico">&#xe627;</i>
        <b>全部订单</b>
      </li>
      <li>
        <i class="ico">&#xe60b;</i>
        <b>待付款</b>
      </li>
      <li>
        <i class="ico">&#xe506;</i>
        <b>待收货</b>
      </li>
      <li>
        <i class="ico">&#xe61a;</i>
        <b>待评价</b>
      </li>
      <li>
        <i class="ico">&#xe643;</i>
        <b>售后</b>
      </li>
    </ul>
  </div>
  <div class="my-con3">
    <ul class="u1">
      <li class="u1l1">
        <span class="ico us1">&#xe674;</span>
        <span class="us2">
          <b>我的钱包</b>
          <i>白富美分期商场</i>
        </span>
      </li>
      <li class="u1l2">
        <span class="ico us1">&#xe600;</span>
        <span class="us2">
          <b>优惠券</b>
          <i>优惠多多 享不停</i>
        </span>
      </li>
    </ul>
    <ul class="u2">
      <li class="u2l1">
        <span class="ico us1">&#xe72b;</span>
        <span class="us2">
          <b>蘑豆商城</b>
          <i>【领蘑豆】</i>
        </span>
      </li>
      <li class="u2l2">
        <span class="ico us1">&#xe601;</span>
        <span class="us2">
          <b>分享赚钱</b>
          <i>立赚十元召唤好友</i>
        </span>
      </li>
    </ul>
    <ul class="u3">
      <li class="u3l1">
        <span class="ico us1">&#xe50e;</span>
        <span class="us2">
          <b>客服与帮助</b>
          <i>真诚为您服务</i>
        </span>
      </li>
      <li class="u3l2">
        <span class="ico us1">&#xe615;</span>
        <span class="us2">
          <b>意见反馈</b>
          <i>提建议，说想法</i>
        </span>
      </li>
    </ul>
    <ul class="u4">
      <li class="u4l1">
        <span class="ico us1">&#xe64f;</span>
        <span class="us2">
          <b>生活助手</b>
          <i>星座、大姨妈</i>
        </span>
      </li>
      <li class="u4l2">
        <span class="ico us1">&#xe501;</span>
        <span class="us2">
          <b>姐妹APP</b>
          <i>美丽联合集团旗下</i>
        </span>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'buy'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .my-inform{
  width: 100%;
  height: 200px;
  background: #FFE5EB;
}
.my-inform ul{
  color: #515151;
}
.my-inform ul .l1{
  height: 40px;
  line-height: 40px;
  display: -webkit-flex;
  display: flex;
}
.my-inform ul .l1 .s2{
  font-size: 18px;
    width:40px;
    text-align: center;
  };
.my-inform ul .l1 .s3{
  width:40px;
  text-align: center;
  font-size: 18px;
};
.my-inform ul .l1 .s1{
  font-size: 18px;
  text-align: left;
  -webkit-flex:1;
    flex:1;
  margin-left: 10px;
}

.my-inform ul .l2{
  text-align: center;
  height: 80px;
  line-height: 80px;
}
.my-inform ul .l2 img{
  height: 100%;
}

.my-inform ul .l3{
  display: -webkit-flex;
  display: flex;
  height: 40px;
  -webkit-justify-content:center;
}
.my-inform ul .l3 .l3s1{
  line-height:40px;
};
.my-inform ul .l3 .l3s2{
  line-height: 20px;
  width:92px;
  height: 20px;
  background: #00CFC4;
  color: #fff;
  margin-top: 10px;
  border-radius: 12px;
};
.my-con1{
  width: 100%;
  height: 35px;
  background: #fff;
}
.my-con1 ul{
  display: -webkit-flex;
  display: flex;
}
.my-con1 ul li{
  -webkit-flex:1;
  flex:1;
  text-align: center;
  line-height: 35px; 
}
.my-con1 i{
  font-size: 14px;
}
.my-con1 i,b{
  font-style: normal;
  font-weight: normal;
}
  
.my-con2{
  width: 100%;
  height: 50px;
  background: #fff;
  margin-top: 10px; 
}
.my-con2 ul{
  display: -webkit-flex;
  display: flex;
}
.my-con2 i,b{
  font-style: normal;
  font-weight: normal;
}
.my-con2 ul li{
-webkit-flex:1;
flex:1;
display: -webkit-flex;
display: flex;
text-align: center;
flex-direction:column;
line-height: 25px;
}
.my-con2 ul li i{
  font-size: 20px;
}
.my-con3{
  width: 100%;
  background: #fff;
  margin-top: 10px;
}
.my-con3 ul{
  display: -webkit-flex;
  display: flex;
}
.my-con3 ul li{
  -webkit-flex:1;
  flex:1;
  display: -webkit-flex;
  display: flex;
  height: 50px;
}
.my-con3 ul li .us1{
  margin:12px;
  width:26px;
  height: 26px;
  color: #fff;
  border-radius: 50%;
  line-height: 25px;
  text-align: center;
};
.my-con3 ul li .us2{
  text-align: left;
  margin-top: 10px;
  -webkit-flex:1;
  flex:1;
  display: -webkit-flex;
  display: flex;
  flex-direction:column;
}
.my-con3 ul li .us2 b{
  color: #565656;
  font-weight: bold;
}
.my-con3 ul li .us2 i{
  font-style: normal;
}
.my-con3 ul li .us2 b i{
  font-size: 12px;
}
.my-con3 .u1 .u1l1 .us1{
  background:#FF6600;
};       
.my-con3 .u1 .u1l2 .us1{
  background:#FF6600;
};
.my-con3 .u2 .u2l1 .us1{
  background:#50CA32;
};
.my-con3 .u2 .u2l2 .us1{
  background:#F45E9B;
};
    
.my-con3 .u3 .u3l1 .us1{
  background:#6EACF8;
};
.my-con3 .u3 .u3l2 .us1{
  background:#6EACF8;
};
.my-con3 .u4 .u4l1 .us1{
  background:#9A92FB;
};
.my-con3 .u4 .u4l2 .us1{
  background:#FF5777;
};
</style>
