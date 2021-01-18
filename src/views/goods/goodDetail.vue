<template>
  <div class="goodDetailFrame" >
    <Nav></Nav>
    <ShopHead></ShopHead>
      <div class="goodDetail">
        <div class="mainInfo">
            <div class="goodImage">
              <img src="../../../static/images/main.jpg" />
              <div>
                  <ul>
                    <li v-for="item in goodsImgs"><div class="goodImgItem"><img src="../../../static/images/main.jpg"/></div></li>
                    
                  </ul>
              </div>
              </div>
            <div class="priceInfo">
              <div class="goodTitle"><span >【直营】ALDI奥乐齐澳洲进口烘烤咸味开心果600g休闲零食原味坚果</span></div>
              <div class="priceDetail"><span class="price-tag">价格</span><span class="price">¥99</span></div>
              <div class="logistic">
                <div>运费</div>
              </div>
              <div class="comment-container">
                <div class="comment">累计评价</div>
                <div class="comment-num">1000</div>
              </div>
              <div class="sku">
                  <div class="sku-name">食品口味</div>
                  <div class="sku-value">盐焗口味</div>
              </div>
              <div class="goods-num">
                  <div class="goods-num-tag">数量</div>
                  <div class="goods-num-value">
                    <input type="text"/>
                  </div>
                  <div class="goods-num-tag">件</div>
              </div>
              <div class="buy-now">
                <div class="buy-right-now"><a href="http://localhost:8017/buynow" >立即购买</a></div>
                <div class="put-into-car"><a href="http://localhost:8017/buynow">加入购物车</a></div>
              </div>
              <div class="other-infos">
                  <div class="service-info">服务承诺</div>
                  <div class="service-info">破损包退</div>
                  <div class="service-info">正品保障</div>
                  <div class="service-info">进口保税</div>
                  <div class="service-info">赠运费险</div>
                  <div class="service-info">支付方式</div>
              </div>
            </div>
        </div>
        <div class="goodDetail-bottom">
           <div class="shop-info">商家信息</div>
           <div class="goods-left">
             <div class="goods-info-title">
             <div class="goods-info-detail"><a href="#" @click="showGoodsInfo">商品详情</a></div>
             <div class="goods-info-comment"><a href="#">评论</a></div>
             </div>
             <div>
              <div id="goodsInfoDetail">
                  <div>品牌名称</div>
                  <div class="attibute-list">
                    <ul>
                       <li class="attribute"><span>厂名</span>: <span>ALDI STORES</span></li>
                        <li class="attribute"><span>厂址</span>: <span>ALDI STORES, 1 Sargengts Road</span></li>
                         <li class="attribute"><span>厂家联系方式</span>: <span>4008201973</span></li>
                          <li class="attribute"><span>保质期</span>: <span>360 天</span></li>
                        <li class="attribute"><span>品牌</span>: <span>FORRESTERS</span></li>
                         <li class="attribute"><span>系列</span>: <span>开心果600g</span></li>
                    </ul>
                  </div>
                  <div class="goods-img-list">
                    
<p><img src="https://img.alicdn.com/imgextra/i2/3837114482/TB2P1_MoljTBKNjSZFwXXcG4XXa_!!3837114482-0-scmitem1000.jpg" align="absmiddle" class="img-ks-lazyload" data-spm-anchor-id="a220o.1000855.0.i24.275e10efJizDpv"><img src="https://img.alicdn.com/imgextra/i4/3837114482/TB2WlgdoljTBKNjSZFuXXb0HFXa_!!3837114482-0-scmitem1000.jpg" align="absmiddle" class="img-ks-lazyload"><img src="https://img.alicdn.com/imgextra/i1/3837114482/TB2cbgtobsrBKNjSZFpXXcXhFXa_!!3837114482-0-scmitem1000.jpg" align="absmiddle" class="img-ks-lazyload"><img src="https://img.alicdn.com/imgextra/i3/3837114482/TB2XnUpnZIrBKNjSZK9XXagoVXa_!!3837114482-0-scmitem1000.jpg" align="absmiddle" class="img-ks-lazyload"><img src="https://img.alicdn.com/imgextra/i2/3837114482/TB2l_SHjwZC2uNjSZFnXXaxZpXa_!!3837114482-0-scmitem1000.jpg" align="absmiddle" class="img-ks-lazyload"><img src="https://img.alicdn.com/imgextra/i1/3837114482/TB2F72RokUmBKNjSZFOXXab2XXa_!!3837114482-0-scmitem1000.jpg" align="absmiddle" class="img-ks-lazyload"><img src="https://img.alicdn.com/imgextra/i4/3837114482/TB27NsxoiQnBKNjSZFmXXcApVXa_!!3837114482-0-scmitem1000.jpg" align="absmiddle" class="img-ks-lazyload"><img src="https://img.alicdn.com/imgextra/i3/3837114482/O1CN011iyndNBjh1v9vp1_!!3837114482-0-scmitem1000.jpg" align="absmiddle" class="img-ks-lazyload"><img src="https://img.alicdn.com/imgextra/i2/3837114482/TB2ohZOubZnBKNjSZFrXXaRLFXa_!!3837114482-0-scmitem1000.jpg" align="absmiddle" class="img-ks-lazyload"></p>

                  </div>

              </div>
              <div id="goodscomments">
                <div class="comments">
                  <div class="comment-item" v-for="item in comments">
                    <div class="comment-info">
                      <div class="content">非常好吃</div>
                      <div class="commment-bottom">
                      <div class="comment-img-list">
                        <ul>
                          <li v-for="item in commentImgs"><div class="comment-img"><img src="../../../static/images/main.jpg"/></div></li>
                        </ul>
                      </div>
                    </div>
                    <div class="goods-info">
                        <ul>
                          <li>食品口味：盐焗口味</li>
                        </ul>
                    </div>
                    <div class="member-info">
                        林**来（匿名）
                    </div>
                    </div>
                  </div>
                </div>
              </div>
             </div>

           </div>
        </div>
      </div>
  </div>
</template>
<script>
import Nav from '../nav/nav'
import ShopHead from '../nav/ShopHead'
  export default {
    components:{Nav,ShopHead},
    data() {
      return {
         
          commentImgs:[1,2,3,4],
          comments:[1,2,3,4,5,6,7,8,9,10],
          goodsImgs:[1,2,3,4,5]
      }
    },
    methods: {
     showGoodsInfo:function(){

       }
    }
  }
</script>
<style lang="scss">

.goodDetail{
   width:1180px;
   margin:auto;
   //border-right: 1px solid #cccccc; 
   margin-top:10px;
  
}
.mainInfo{

height: 600px;
width:1180px;
//border-right: 1px solid #cccccc; 

}
.goodImage {

width:420px;
height:420px;
margin:20px 0 0 20px;
border: 1px solid #cccccc; 
float: left;
}
.goodImage img{

width:418px;
height:418px;
}
.priceInfo{
  float:left;
  width:540px;
  height: 420px;
  margin-left: 20px;
}
.goodTitle{
  padding: 20px 0 0 0;
  font-size: 16px;
  font-family: "microsoft yahei";
  color:#000;
}
.priceDetail{
 
  background-color: #f8f6f6;
  margin-top:10px;
  height: 40px;
}
.price{
  margin-left: 20px;
  color:#ff0000;
  font-size: 18px;
  padding-top: 20px;
}
.price-tag{
 font-size: 14px;
  color:#333;
  margin-left: 10px;
}
.logistic{
  height: 40px;
  padding: 10px;
}
.comment{
  float:left;
  margin-left:10px;
  padding-top:10px;
}
.comment-num{
  float:left;
  margin-left: 10px;
  padding-top: 10px;
  color:#ff0000;
}
.comment-container{
  margin-left:0;
  margin-right: 0;
  height: 40px;
}
.sku{
  height: 40px;
  margin:auto;
  margin-left: 10px;

}
.sku-name{
  color:#333;
  float:left;

}
.sku-value{
  float:left;
  margin-left:10px;
  border:1px solid #ff0000;
}
.goods-num{
  height: 40px;
  margin-left: 10px;
}
.goods-num-tag{
  float:left;

}
.goods-num-value{
  float:left;
  margin-left: 30px;
  width:43px;
  height: 31px;
  border:1px solid #cccccc;

}
.goods-num-value input{
    width:43px;
    height: 31px;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    -webkit-appearance: textfield;
    background-color: white;
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 0px;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;

}
.goods-num-value select{
  margin-top:10px;
}
.buy-now{
  height: 40px;
  margin-top: 20px;
}
.buy-right-now{
  background-color:#ffeded;
  border:1px solid #ff0000;
  color:#ff0000;
  width:180px;
  height: 40px;
  float:left;
  padding-top: 10px;
  margin-left: 20px;
  text-align: center;

}
.buy-right-now a{
  display: block;
  width:178px;
  height: 38px;
}
.put-into-car{
  background-color: #ff0000;
  color:#ffffff;
  width:180px;
  height: 40px;
  margin-left:20px;
  float:left;
  text-align: center;
  padding-top:10px;
}
.put-into-car a{
  color:#ffffff;
  display: block;
  width:178px;
  height: 38px;
}
.other-infos{
  height: 40px;
  padding-top:10px;
}
.service-info{
  font-size:12px;
  color:#666;
  float:left;
  margin-left: 20px;
}
.goodImgItem img{
  width:72px;
  height: 72px;
  margin-top:5px;
  float:left;
  margin-left: 10px;

}
.shop-info{
  border:1px solid #cccccc;
  height: 200px;
  width:173px;
  float:left;
}
.goods-left{
  width:788px;
  margin-top: 5px;
 // border:1px solid #cccccc;
  float:left;
  margin-left: 20px;
  min-height: 500px;
}
.goods-info-title{
  height: 60px;
  padding-top:20px;
}
.goods-info-detail{
  float:left;
  margin-left: 20px;

}
.goods-info-comment{
  float:left;
  margin-left: 20px;
}
.goods-service{
  float:left;
  margin-left: 20px;
}

.goods-info-title{
  border-top:1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
}
.goods-info-title a:hover{
  color:#ff0000;

}
.attribute{
  width:220px;
  height: 18px;
  font-size: 12px;
  float:left;
  margin:10px 15px 0 0;
  color:#666;
  overflow: hidden;
}
.attibute-list{
  height: 90px;
}
.goods-img-list{
  margin-top:30px;
}
.comment-item{
 width:790px;
 height: 129px;
 border-bottom:1px solid #ccc;
 margin-left: 10px;
}
.comment-img-list{
  height: 40px;
  width:500px;
  float:left;
}
.comment-img{
  height: 50px;
  width:50px;
  border:1px solid #ccc;
  float:left;
  margin-left: 20px;
  margin-top:20px;
}
.comment-img img{
  height: 48px;
  widows: 48px;
  
  

}
.goods-info{
  float:left;
  margin-top:20px;
}
.member-info{
  float:left;
  margin-left: 30px;
  font-size:12px;
  margin-top:20px;
}
.goods-num-tag{
  float: left;
  text-align: center;
  padding-top: 5px;
  margin-left: 5px;
}
.commment-bottom{

}
.goodDetail-bottom{
  background-color: #ffffff;
}
</style>
