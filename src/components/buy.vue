<template>
  <div id="buy">
    <div class="top">
        <ul class="search">
          <li class="l1">
            <i class="ico">&#xe66f;</i>
            <b>分类</b>
          </li>
          <li class="l2">
            <span class="ico s1">&#xe743;</span>
            <span><input type="text" placeholder="显瘦百搭韩版毛衣"></span>
            <span class="ico s2">&#xe604;</span>
          </li>
          <li class="ico l3">&#xe6ac;</li>
        </ul>
        <scroller lock-y :scrollbar-x=false>
          <ul class="con1">
            <li>
              <img src="../images/x.png" alt="">
            </li>
            <li>
              <img src="../images/x2.png" alt="">
            </li>
            <li>
              <img src="../images/x3.png" alt="">
            </li>
            <li>
              <img src="../images/p4.png" alt="">
            </li>
          </ul>
        </scroller>
        <ul class="con2">
          <li>
            <img src="../images/y1.png" alt="">
            <b>优选</b>
          </li>
          <li>
            <img src="../images/y2.png" alt="">
            <b>良品</b>
          </li>
          
          <li>
            <img src="../images/y3.png" alt="">
            <b>品牌战</b>
          </li>
          
          <li>
            <img src="../images/x4.png" alt="">
            <b>发现</b>
          </li>
        </ul>
      </div>
      <scroller lock-x height="220px" @on-scroll="onScroll">
      <div class="bottom">
        <ul>
          <li>
            <span class="s3">上衣</span>         
            <span class="s4">冬季热卖七折抢购</span>        
            <span class="s5"><img src="../images/t1.png" alt=""><b>上新9999+></b></span>
          </li>
          <li>
            <span class="s3">裤子</span>
            <span class="s4">显瘦裤子3折疯抢</span>
            <span class="s5"><img src="../images/t2.png" alt=""><b>上新8786+></b></span>
          </li>
          <li>
            <span class="s3">裙子</span>
            <span class="s4">美裙低至</span>
            <span class="s5"><img src="../images/t3.png" alt=""><b>上新9849+></b></span>
          </li>
          <li>
            <span class="s3">套装</span>
            <span class="s4">5折限量抢新，手慢无</span>
            <span class="s5"><img src="../images/t4.png" alt=""><b>上新8786+></b></span>
          </li>
          <li>
            <span class="s3">女鞋</span>
            <span class="s4">冬上新美鞋集结</span>
            <span class="s5"><img src="../images/t5.png" alt=""><b>热销8988+></b></span>
          </li>
          <li>
            <span class="s3">裤子</span>
            <span class="s4">冬季热卖七折抢购</span>
            <span class="s5"><img src="../images/t2.png" alt=""><b>上新8786+></b></span>
          </li>
        </ul>
      </div>
      </scroller>
    </div>
</template>

<script>
import { Scroller } from 'vux'

export default {
  name: 'buy',
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
<style scoped>
  .top{
  width: 100%;
  background: #fff;
  padding-top: 10px;
}
  .search{
    width: 100%;
    height: 35px;
    display: -webkit-flex;
    display: flex;
  }
  .search li{
    text-align: center;
  };
  .search .l1{
    width:40px;
    text-align: center;
    display: -webkit-flex;
    display: flex;
    flex-direction:column;
    font-size: 12px;
  };
  .search .l1 i,b{
    font-style: normal;
    font-weight: normal;
  };
  .search .l2{
    line-height: 35px;
    -webkit-flex:1;
    flex:1;
    background: #EEEEEE;
    border-radius: 5px;
    display: -webkit-flex;
    display: flex;
  }
  .search .l2 .s1{
    width:35px;
    height: 35px;
    text-align: center;
  };
  .search .l2 .s2{
    -webkit-flex:1;
    flex:1;
  }
  .search .l2 .s2 input{
    border: none;
    -webkit-appearance: none;
    background: none;
  }     
  .l3{
    width:40px;
    height: 35px;
    font-size: 20px;
    text-align: center;
    line-height: 35px;
  };
  .con1{
    width: 510px;
    height: 128px;
    display: -webkit-flex;
    display: flex;
  }
  .con1 li{
    height: 128px;
    float: left;
      margin: 10px;
    }
     .con1 li img{
       height: 100%;
      }
  .con2{
    width: 100%;
    display: -webkit-flex;
    display: flex;
  }
  .con2 li{
    -webkit-flex:1;
    flex:1;
    margin:10px;
    text-align: center;
  }
 .con2 li img{
    width: 100%;
    margin-bottom: 10px;
  }
.bottom{
  width: 100%;
  background: #fff;
  margin-top: 10px;
}
.bottom ul li{
  height: 36px;
  margin-left: 15px;
  line-height: 36px;
  border-bottom: 1px solid #E8E8E8;
  display: -webkit-flex;
  display: flex;
}
.bottom ul li .s3{
  width: 50px;
  font-weight: bold;
}
.bottom ul li .s4{
  -webkit-flex:1;
  flex:1;
  text-align: left;
}
.bottom ul li .s5{
  width: 120px;
}
.bottom ul li .s5 img{
  height: 80%;
  float: left;
  margin-top: 5px;
}
.bottom ul li .s5 b{
  float: left;
  display: inline-block;
}
</style>
