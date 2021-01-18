<template>
  <div class="buynow" >
    <Nav>
    </Nav>
     <div style="width:1000px;margin:auto;">
         <div class="buy-order" style="height:100px;clear:both;">
            <div class="row1">
                <div class="logo" style="float:left;"><img src="../../../static/images/logo.jpg"/></div>
                <div class="order-status" style="float:left;">
                    <span>1.确认订单信息</span> 
                    <span>2.付款到支付宝 </span> 
                    <span>3.确认收货</span>
                    <span>4.双方互评</span>
                </div>
            </div>
         </div>
    <!--收货地址-->
    <div class="logistic">
        <div class="logistic-title">
            <div>确认收货地址</div>
            <div class="manage-logistic">管理收货地址</div>
        </div>
        <div style="clear:both;margin-top:30px;margin-bottom:30px;"><hr/></div>
        <div v-for="item in logistic" v-bind="key" style="margin-top:10px;height:32px;">
            <el-radio v-model="orderLogistic" :label="item.id" :value="item.id">
                 {{item.province}} {{item.city}} {{item.area}} {{item.address}} {{item.recipient}} {{item.recipientPhone}}
            </el-radio>
          
            
        </div>
        <div class="use-new-address"><el-button>使用新地址</el-button></div>
        <div class="" style="margin-top:20px;">
            <div>菜鸟驿站免费代收服务</div>
            <div style="clear:both;">
            <div style="float:left;width:600px;">使用代收服务 （收货不便，可使用菜鸟驿站代收服务，包裹到达后到驿站自提）</div>
            <div class="update-recipt-address">修改驿站</div>
            </div>
        </div>

    </div>
        <div style="margin-top:40px;height:80px;">
            <div style="clear:both;">确认订单信息</div>
           <div  v-bind="key"> 
                <div class="float-left order-table-head product-name">店铺宝贝</div>
                <div class="float-left order-table-head product-attribute">商品属性</div>
                <div class="float-left order-table-head product-price" >单价</div>
                <div class="float-left order-table-head product-count">数量</div>
                <div class="float-left order-table-head product-discount-style">优惠方式</div>
                <div class="float-left order-table-head product-total">小计</div> 
           </div>
        </div>
        <div style="clear:both;">
            <div><span>店铺：</span><span>格林艺品店</span> <span>卖家：</span><span> 慕宸子</span></div>
        </div>
        <div >
            <div v-for="item in orders" style="clear:both;height:60px;">
                 <div class="float-left order-table-head product-name">
                     <img src="/static/images/cup.jpg" style="width:48px;height:48px;float:left;"/>
                     <div style="line-height:48px;height:48px;display:inline-block;vertical-align:middle;width:150px;white-space:nowrap;overflow:hidden;float:left;margin-left:5px;text-overflow:ellipsis">{{item.productName}}</div>
                </div>
                <div class="float-left order-table-head product-attribute">
                    <span v-for="attribute in item.attributes">
                       {{attribute.name}}:{{attribute.value}}
                    </span>
                    </div>
                <div class="float-left order-table-head product-price" >{{item.productPrice}}</div>
                <div class="float-left order-table-head product-count">
                    <el-input-number  style="width:120px;" :min="1" :max="99999" :step="1"></el-input-number>
                </div>
                <div class="float-left order-table-head product-discount-style">{{item.discountStyle}}</div>
                <div class="float-left order-table-head product-total">{{item.total}}</div> 
            </div>
        </div>

         <!--付款信息-->
         <div style="height:300px;clear:both;margin-top:20px;">
             <div>
                 <div class="float-left " style="width:400px;">给卖家留言
                     <textarea/>
                 </div>
                 <div class="float-left" style="width:600px;">
                     <div style="clear:both"> <div class="float-left">运送方式：普通配送快递 免邮 </div><div class="float-left" style="margin-left:360px;">0.00</div></div>
                     <div style="clear:both"> <div class="float-left">运费险：<el-checkbox>运费险退换货可赔付9元</el-checkbox></div><div class="float-left">0.00</div></div>
                 </div>
                 <div>
                     <div style="margin-left:830px;margin-top:20px;clear:both;">店铺合计(含运费)￥13.90</div>
                 </div>
             </div>
             <div>
             </div>
             <!--淘金币-->
             <div style="width:400px;margin-left:700px;height:500px;">
                <div style="width:385px; height:120px;border: solid 1px rgb(255, 80, 0);margin-top:16px;">
                    <div style="clear:both;"><div style="margin-left:5px;margin-top:5px; float:left;">实付款:</div><div style="margin-left:5px;margin-top:5px; float:left;"></div></div>
                    <div style="clear:both;"><div style="margin-left:5px;margin-top:5px;float:left;">送货至:</div><div style="margin-left:5px;margin-top:5px;float:left;width:300px;">  广东省 深圳市 宝安区 福海街道 深圳桥头村桥达路22号</div></div>
                    <div style="clear:both;"><div style="margin-left:5px;margin-top:5px;float:left;">收货人:</div><div style="margin-left:5px;margin-top:5px;float:left;">linseven</div></div>
                </div>
                <div style="margin-left:185px;"><el-button style="height:42px;width:200px;background-color:rgb(255, 80, 0);color:#ffffff;">提交订单</el-button></div>
             </div>
         </div>
     </div>
     <Bottom style="clear:both;"></Bottom>
            
  </div>
</template>
<script>
import Nav from '../nav/nav'
import Bottom from '../nav/bottom'
  export default {
    components:{Nav,Bottom},
    data() {
      return {
         orderLogistic:'',
         logistic:[
             {
              "id":1,
             "province":"广东省",
             "city":"深圳市",
             "area":"宝安区",
             "address":" 深圳桥头村桥达路22号",
             "recipient":"linseven",
             "recipientPhone":"18312483564"
             },
             {
              "id":2,
             "province":"广东省",
             "city":"深圳市",
             "area":"宝安区",
             "address":" 深圳桥头村桥达路22号",
             "recipient":"linseven",
             "recipientPhone":"18312483564"
             }
             ,
             {
              "id":3,
             "province":"广东省",
             "city":"深圳市",
             "area":"宝安区",
             "address":" 深圳桥头村桥达路22号",
             "recipient":"linseven",
             "recipientPhone":"18312483564"
             },
             {
              "id":4,
             "province":"广东省",
             "city":"深圳市",
             "area":"宝安区",
             "address":" 深圳桥头村桥达路22号",
             "recipient":"linseven",
             "recipientPhone":"18312483564"
             },
             {
              "id":5,
             "province":"广东省",
             "city":"深圳市",
             "area":"宝安区",
             "address":" 深圳桥头村桥达路22号",
             "recipient":"linseven",
             "recipientPhone":"18312483564"
             }
         ],

        orders:[
          
        ]

      }
    },
    methods: {
     
    },
    mounted() {
        
        for(var i=0;i<10;i++){

            var order = {
              "productName":"陶瓷杯子马克杯带盖勺创意情侣",
              "attributes":[
                  {
                      "name":"颜色分类",
                      "value":"酒红色[早餐杯+专属勺]"
                  },
                   {
                      "name":"大小",
                      "value":"9cm"
                  }
              ],
              "productPrice":12.00,
              "count":5,
              "total":60.00,
              "discountStyle":"优惠方式"
          };
          this.orders.push(order);
        }

    },
  }
</script>
<style lang="scss">
.buynow{
    background-color: #ffffff;
}
.manage-logistic{
    margin-left: 790px;
}
.buy-order{
    width:100%;
    margin-left: 0px;
}
.logo{
    width:64px;
    float:left;
    margin-left: 0px;
}
.row1{
    margin-top: 20px;
    height: 80px;
}
.order-status{
    float:left;
    vertical-align: middle;
    margin-left: 375px;
}
.order-status span{

line-height: 64px;
margin-left: 15px;


}
.logo img{
    width:64px;
    height:64px;
}
.logistic{
    clear:both;
}
.logistic-title div{
    float:left;
    height: 40px;
}
.update-recipt-address{
    float:left;
    width:200px;
}
.use-new-address{
    clear:both;
    margin-top:20px;
    height:36px;
}
.float-left{
    float:left;
}
.order-table-head{
 text-align: left;   
}
.product-name{
    width:340px;

}
.product-attribute{
    width:200px;
}
.product-count{
    width:160px;
}
.product-discount-style{
    width:100px;
    
}
.product-price{
    width:80px;
}
.product-total{
    width:120px;
}
</style>
