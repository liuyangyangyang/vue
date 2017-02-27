<template>
  <div id="cart">
    <div class="title">购物车</div>
    <div class="goods">
    	<div class="good-top">
    		<ul>
    			<li></li>
    			<li>韩都衣舍专卖店<b>良品</b></li>
    			<li>领券</li>
    			<li>></li>
    		</ul>
    	</div>
      <div class="good-cont">
        <ul v-for="(item,ind) in arr">
          <li @click="checkBtn(ind)">
            <img ref="imgs" v-bind:src="item.select" alt="">
          </li>
          <li>
            <img v-bind:src="item.img" alt="">
          </li>
          <li>
            <p>{{item.product}}</p>
            <p>{{item.inform}}</p>
            <p><b>¥{{item.nPrize}}</b><i>¥{{item.pPrize}}</i><em>x{{item.count}}</em></p>
          </li>
        </ul>
        
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'cart',
  created () {
   this.getData();
   //console.log(this.$refs)
  },
  data(){
    return{
      arr:null,
      select:"http://localhost:8081/static/images/xuan.jpg",
      selectd:"http://localhost:8081/static/images/xz.png"
    }
  },
  methods:{
    getData()
    {
      this.$http({
        url:"/api/cart",
        method:'GET'
      }).then(function(res)
      {
        this.arr=res.data.goods
      })
    },
    checkBtn(ind)
    {
      this.$refs.imgs[ind].src=this.$refs.imgs[ind].src==this.select?this.selectd:this.select
    } 
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body{
  background:#F7F7F7;
}
  .title{
  	height: 40px;
  	line-height: 40px;
    border-bottom:1px solid #ccc;
  }
  .good-top{
    margin-top:10px;
  	height:30px;
  	line-height:30px;
  	ul{
  		display:flex;
      border-bottom:1px solid #ccc;
  		li{
  			&:nth-child(1){
  				margin-left:10px;
  				width:20px;
  				height: 20px;
  				background: url(../images/xuan.jpg) no-repeat;
  				background-size:100% 100%;
          margin-right:10px;
          margin-top:5px;
  			}
  			&:nth-child(2){
          flex:1;
          text-align:left;
  				b{
  					width:30px;
  					display:inline-block;
            background:#FDE6A3;
            font-size:8px;
            font-weight:normal;
            text-align:center;
            margin-left:5px;
            height:20px;
            line-height:20px;
  				}
  			}
        &:nth-child(3){
          width:40px;
        }
        &:nth-child(4){
          width:20px;
        }
  		}
  	}
  }
  .good-cont{
    ul{
      display:flex;
      height:95px;
      margin-top:10px;
      li{       
        &:nth-child(1){
          width:20px;
          line-height:95px;
          img{
            width:100%;
          }
          margin:0 5px 0 5px;
        }
        &:nth-child(2){
          width:70px;
          img{
            width:100%;
          }
        }
        &:nth-child(3){
          width:215px;
          text-align:left;
          margin-left:5px;
          margin-right:5px;
          display:flex;
          flex-direction:column;
          p{
            line-height:20px;
            &:nth-child(2){
              color:#C1C1C1;
              flex:1;
            }
            &:nth-child(3){
              display:flex;
              i{
                flex:1;
              }
              i,em{
                color:#C1C1C1;
                font-style:normal;
                text-decoration: line-through;
              }
            }
          }
        }
      }
    }
  }
</style>
