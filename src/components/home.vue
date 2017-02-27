<template>
  <div id="home">
    <div class="banner">
        <ul>
          <li class="l1">
            <span class="ico">&#xe743;</span>
            <span class="in">
              <input type="text" placeholder="必备万能加绒打底裤">
            </span>
            <span class="ico">&#xe604;</span>
          </li>
          <li class="ico l2">&#xe6ac;</li>
        </ul>      
          <swiper :list="demo01_list" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
    <div class="imghead">
        <ul>
          <li>
            <img src="../images/head1.png" alt="">
            <b>红人馆</b>
          </li>
          <li>
            <img src="../images/head2.png" alt="">
            <b>直播</b>
          </li>
          <li>
            <img src="../images/head3.png" alt="">
            <b>社区</b>
          </li>
          <li>
            <img src="../images/head4.png" alt="">
            <b>签到</b>
          </li>
        </ul>

    </div>
    <div class="star">
        <img src="../images/tang.png" alt="">
    </div>
    <div class="bot">
      <p>穿搭课堂</p>
      <ul>
        <li>
          <img src="../images/bot1.png" alt="">
        </li>
        <li>
          <img src="../images/bot2.png" alt="">
        </li>
        <li>
          <img src="../images/bot3.png" alt="">
        </li>
      </ul>   
    </div>
</template>

<script>
import { Swiper } from 'vux'
const baseList = [{
  url: 'javascript:',
  img: 'http://img0.imgtn.bdimg.com/it/u=4251116820,3534129286&fm=21&gp=0.jpg'
}, {
  url: 'javascript:',
  img: 'http://img4.imgtn.bdimg.com/it/u=2136358503,2532603911&fm=23&gp=0.jpg'
}, {
  url: 'javascript:',
  img: 'http://img1.imgtn.bdimg.com/it/u=1730772632,1022208113&fm=23&gp=0.jpg'
}, {
  url: 'javascript:',
  img: 'http://img1.imgtn.bdimg.com/it/u=2977555530,2968416821&fm=15&gp=0.jpg'
}]

export default {
  name: 'home',
  components: {
    Swiper
  },
  methods: {
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    },
    demo01_onIndexChange (index) {
      this.demo01_index = index
    }
  },
  data () {
    return {
      demo01_list: baseList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  width: 100%;
  height: 180px;
  position: relative;
}
  .banner ul{
    position: absolute;
    width: 95%;
    height: 35px;
    left: 20px;
    top:25px;
    z-index: 9999;
    display: -webkit-flex;
    display: flex;
  }
  .banner ul li{
    line-height: 35px;
  }     
  .l1{
    -webkit-flex:1;
    flex:1;
    background: #EFECDD;
    border-radius: 5px;
    opacity: .7;
    display: -webkit-flex;
    display: flex;
  }
  .l1 span{
    width:35px;
    height: 35px;
    text-align: center;
  }
  .l1 .in{
    -webkit-flex:1;
    flex:1;
  }
  .l1 .in input{
      border: 0;
      -webkit-appearance: none;
      background: none;
      width: 100%;
  }
 .l2{
    width:50px;
    height: 35px;
    text-align: center;
    color: #fff;
  };
  ol{
    width: 100%;
    height: 100%;
  }
  ol li{
    width: 100%;
    height: 100%;
  }
  .yellow{
    background: url('../images/banner.jpg') no-repeat;
    background-size: 100% 100%;
  };
  .pink{
    background: #EDBCCF;
  };
  .blue{
    background: #A5D6E7;
  };
  .imghead{
  width: 100%;
  height: 90px;
  background: #fff;
  }
  .imghead ul{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    display: flex;
  }
.imghead ul li{
  -webkit-flex:1;
  flex:1;
  margin: 15px;
  text-align: center;
}
  .imghead ul li img{
    width: 100%;
  }
.star{
  width: 100%;
  height: 120px;
  background: #fff;
}
.star img{
    width: 97%;
    margin:6px;
}
.bot{
  width: 100%;
  background: #fff;
  margin-top: 8px;
}
.bot p{
  font-weight: bold;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
  .bot ul{
    width: 100%;
    display: -webkit-flex;
    display: flex;
  }
  .bot ul li{
    -webkit-flex:1;
    flex:1;
    margin: 0 10px 0 10px;
  }
  .bot ul li img{
    width: 100%;
  }


</style>
