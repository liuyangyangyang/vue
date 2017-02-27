<template>
  <div id="concern">
    <div class="concern">
      <div class="top">
        动态
      </div>
      <div class="tab">
        <ul>
          <li class="active">全部</li>
          <li>买家秀</li>
          <li>关注的人</li>
          <li>收藏的店</li>
        </ul>
      </div>
      <scroller lock-x height="1000px" @on-scroll="onScroll">
      <div class="con1">
        <ul>
          <li class="cl1">
            <span><img src="../images/user1.png" alt=""></span>
            <span>咔咔小姐的店</span>
            <span><img src="../images/shouc.png" alt=""></span>
          </li>
          <li>
            <span></span>
            <span>春季新款，超美发箍，百搭街拍，韩系妹子。这款非常推荐，不管是日常还是外出，都非常合适的发箍</br>很显气质的款式</span>
          </li>
          <li>
            <span></span>
            <span>
              <img src="../images/fa.png" alt="">
            </span>
          </li>
          <li>
            <span></span>
            <span>
              <img src="../images/che.png" alt="">
              <b>搭配一件商品</b>
            </span>
            <span>
              <img src="../images/zan.png" alt="">
              <b>350</b>
            </span>
          </li>
        </ul>
      </div>
      <div class="con1">
        <ul>
          <li class="cl1">
            <span><img src="../images/user2.png" alt=""></span>
            <span>猫了个咪</span>
            <span><img src="../images/shouc.png" alt=""></span>
          </li>
          <li>
            <span></span>
            <span>
              <b>#新年新气象#</b></br>
              休闲韩范十足的衬衫颜色很好看 棉麻的质感非常亲肤 很适合春天的颜色 外套式的衬衫太适合春天的穿搭了 内搭T恤 背心 牛仔裤 休闲好看</span>
          </li>
          <li>
            <span></span>
            <span>
              <img src="../images/mi.png" alt="">
            </span>
          </li>
          <li>
            <span></span>
            <span>
              <img src="../images/dian.png" alt="">
              <b>店铺上新</b>
            </span>
            <span>
              <img src="../images/zan.png" alt="">
              <b>60</b>
            </span>
          </li>
        </ul>
      </div>
      </scroller>
    </div>
  </div>
</template>

<script>
import { Scroller } from 'vux'

export default {
  name: 'concern',
  components: {
    Scroller
  },
  methods: {
    onScroll (pos) {
      console.log('on scroll', pos)
      this.scrollTop = pos.top
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top{
  height: 40px;
  line-height: 40px;
}
.tab ul{
  height: 38px;
  display:-webkit-flex;
  display: flex;
  line-height: 38px;
}
.tab ul li{
  flex:1;
  -webkit-flex:1;
  border-bottom: 1px solid #E5E5E5;
}
.tab ul .active{
  color: #EE4566;
  border-bottom: 1px solid #EE4566;
}
.con1{
  margin-bottom: 10px;
}
.con1 li{
  display: -webkit-flex;
  display: flex;
  &:nth-child(2){
    display:-webkit-flex;
    display: flex;
    b{
      color: #EE5471;
    }
    span{
      &:nth-child(1){
        width:80px;
      };
      &:nth-child(2){
        margin-right: 5px;
        flex:1;
        text-align: left;
        line-height: 18px;
      };
    }
  };
  &:nth-child(3){
    span{
      &:nth-child(1){
       width:80px; 
      };
      &:nth-child(2){
        flex:1;
        text-align: left;
        img{
          width: 70%;
          margin-top: 10px;
        }
      };
    }
  };
  &:nth-child(4){
    height: 25px;
    line-height: 25px;
    span{
      display: -webkit-flex;
      display:flex;
      img{
        width: 25px;
      }
      b{
        margin-left: 3px;
        font-weight: normal;
      }
      &:nth-child(1){
        width:80px; 
      };
      &:nth-child(2){
        flex:1;
      };
      &:nth-child(3){
        width: 70px;
      };
    }
  };
}
.cl1{
  height: 30px;
  line-height: 30px;
}
.cl1 span{
  &:nth-child(1){
    width:80px;
  };
  &:nth-child(2){
    flex:1;
    text-align: left;
  };
  &:nth-child(3){
    width:80px;
    img{
      margin-top: 3px;
      height: 80%;
    }
  };
}
.cl1 img{
  height: 100%;
}
</style>
