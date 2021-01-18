<template>
  <div class="goodItemFrame" >
    <div class="imgLink"><a href="http://localhost:8017/gooddetail#"><img  src="../../../static/images/1.jpg" width="190" ></a></div>
  <div>
      <div class="price"><span><a href="http://localhost:8017/gooddetail#">¥{{goods.productPrice}}</a> </span><span class="postIcon">包邮</span></div>
      <div class="title"><a href="http://localhost:8017/gooddetail#">{{goods.productName}}</a><span class="payNum">{{goods.payCount}}人付款</span></div>
  
  </div>
  </div>
</template>
<script>

  export default {
    props:["goods"],
    data() {
      return {}
    },
    methods: {
   
     
    }
  }
</script>
<style lang="scss">
.goodItemFrame{
    width:234px;
    
    border:1px solid rgba($color: #CCCCCC, $alpha: 0.5);
    margin:0 3px 10px 3px;;
    float:left;
    background-color: #ffffff;
    padding:20px;
}
.goodItemFrame:hover{
    border:1px solid rgba($color: #f40, $alpha: 0.5)
}
.imgLink{
    width:200;
    height: 220;
    margin-top:10px;
}
.price a{
    font-size: 14px;
    color:#f40;
}
.title{
    margin-left: 15px;
    font-size: 12px;
    margin-top:10px;
    

}
.title a{
  display: block;
  overflow: hidden;
    text-overflow: ellipsis;
    width:80px;
    float:left;
    height:24px;
    line-height: 24px;
    white-space: nowrap;
}
.title span{
   overflow: hidden;
    text-overflow: ellipsis;
    width:42px;
    float:left;
    height:24px;
    line-height: 24px;
    margin-left: 10px;
}
.title a:hover{
    text-decoration: underline;
}
.shopName a{
    margin-left:15px;
    font-size:12px;
    margin-top:10px;
    color:#888;
}
.payNum{
    margin-right: 15px;
    float:right;
    font-size: 12px;
    color:#888;
}
.postIcon{
    color:#ffffff;
    background-color: #f40;
    margin-left: 5px;
}

</style>
