<template>
  <div class="goodItemFrame" >
    <div class="imgLink"><img  src="../../../static/images/1.jpg"></div>
  <div>
      <div class="price"><span><a href="#">¥99.99</a> </span><span class="postIcon">包邮</span></div>
      <div class="title"><a href="#">LeeX-LINE女款2019年新款蓝色</a></div>
      <div class="shopName"><span><a href="#">lee官方旗舰店</a></span> <span class="payNum">1人付款</span></div>
  </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
         
          
      }
    },
    methods: {
   
     
    }
  }
</script>
<style lang="scss">
.goodItemFrame{
    width:250px;
    
    border:1px solid rgba($color: #CCCCCC, $alpha: 0.5);
    margin:0 3px 10px 3px;;
    float:left;
    background-color: #ffffff;
}
.goodItemFrame:hover{
    border:1px solid rgba($color: #f40, $alpha: 0.5)
}
.imgLink{
    width:220;
    height: 220;
    margin-left:15px;
    margin-top:10px;
}
.price a{
    font-size: 14px;
    color:#f40;
    margin-left: 15px;
}
.title{
    margin-left: 15px;
    font-size: 12px;
    margin-top:10px;

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
