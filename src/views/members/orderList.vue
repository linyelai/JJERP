<template>
    <div>
        
          <el-table
            :data="tableData"
            
            style="width: 100%">
              <el-table-column type="selection" width="30"></el-table-column>
              <el-table-column  width="400"  label="宝贝">
                    <template slot-scope="scope">
                        <div class="order-col">
                        <div class="order-base-info"><span class="createTime">{{scope.row.createTime}}</span><span class="orderSn">订单号:{{scope.row.orderSn}}</span> 
                        </div>
                        <div class="order-other-info">
                            <div class="goodImage-order"><img src="../../../static/images/avatar.jpg" /></div>
                            <div class="good-title">{{scope.row.goodTitle}}</div>
                        </div>
                        </div>
                    </template>      
             </el-table-column>
             <el-table-column  width="100"  label="单价">
                    <template slot-scope="scope">
                        <div class="order-col shopName">
                        <div class="order-shop-name"><a href="#">{{scope.row.shopName}}</a>
                        </div>
                        <div class="order-other-info"> 
                            <div class="good-price">¥{{scope.row.price}}</div>
                        </div>
                        </div>
                    </template>      
             </el-table-column>
              <el-table-column  width="100"  label="实付款">
                    <template slot-scope="scope">
                        <div class="order-col shopName">
                        <div class="order-other-info"> 
                             <div class="good-price">¥{{scope.row.price}}</div>
                        </div>
                        </div>
                    </template>      
             </el-table-column>
             <el-table-column  width="80"  label="数量">
                    <template slot-scope="scope">
                        <div class="order-col">
                         
                            <div class="good-num">{{scope.row.num}}</div>
                        
                        </div>
                    </template>      
             </el-table-column>
             <el-table-column  width="100"  label="商品操作">
                    <template slot-scope="scope">
                        <div class="order-col shopName">
                        <div class="order-shop-name"><a href="#">联系商家</a>
                        </div>
                        <div class="order-other-info"> 
                            <div class="good-price">申请售后</div>
                        </div>
                        </div>
                    </template>      
             </el-table-column>
         <el-table-column  width="100"  label="状态">
                    <template slot-scope="scope">
                        <div class="order-col shopName">
                        <div class="order-status"> 
                            <div class="good-price">已完成</div>
                        </div>
                        </div>
                    </template>      
             </el-table-column>
             <el-table-column  width="100"  label="订单详情">
                    <template slot-scope="scope">
                        <div class="order-col shopName">
                        <div class="order-detail"> 
                           <a href="#"> 订单详情</a>
                        </div>
                        </div>
                    </template>      
             </el-table-column>
    </el-table>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData:[{
                createTime:'2019-09-22 12:09:30',
                orderSn:'201909022',
                goodTitle:'中国电信官方旗舰店 广西手机充值100元电信话费直充快充电信充值',
                shopName:'中国电信官方旗舰店',
                price:'99.80',
                num:1

            }]
        }
    },
}
</script>
<style lang="scss">
.goodImage-order{
 width:50px;
 height: 50px;
 margin-left: 20px;
}
.goodImage-order img{
    width:48px;
    height: 48px;
}
.good-title{
    width:250px;
    margin-top:5px;
    margin-left: 10px;
}

.goodImage-order,.good-title{
    float:left;
}
.orderSn{
    margin-left: 20px;
}
.createTime{
    margin-left: 20px;
}
.order-col{
    height: 80px;
    margin: 0 auto;
    
}
.good-num {
    height: 80px;
    margin-top: 30px;
    text-align: center;
    
}
.order-shop-name a{
   display: inline-block;
    width: 100px;
    line-height: 16px;
    vertical-align: middle;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left; 
    word-break: break-all;
    margin-left: 0px;
}
.order-price{
    width:100px;
    
}
.shopName{
    width:100px;
}
</style>