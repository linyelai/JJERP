<template>
    <div>
        <Nav></Nav>
        <div class="person-menu">
            <ul>
                全部功能
                <li><a href="#">我的购物车</a></li>
                 <li><a href="#">已买到的宝贝</a></li>
                 <li><a href="#">购买过得店铺</a></li>
                 <li><a href="#">我的发票</a></li>
                 <li><a href="#">我的收藏</a></li>
                 <li><a href="#">我的积分</a></li>
                 <li><a href="#">我的优惠信息</a></li>
                 <li><a href="#">评价管理</a></li>
                 <li><a href="#">退款维权</a></li>
                 <li><a href="#">我的足迹</a></li>
                 <li><a href="#">流量钱包</a></li>
            </ul>
        </div>
        <div class="person-content">
             <OrderList></OrderList>
        </div>
    </div>
</template>
<script>
import Nav from '../nav/nav'
import OrderList from '../../views/members/orderList'
export default {
    data() {
        return {
            
        }
    },
    components:{Nav,OrderList}
}
</script>
<style lang="scss">
.person-menu{
    float:left;
    width:120px;
    height: 500px;
}
.person-menu ul{
    font-size: 16px;
    color:#f40;
}
.person-menu ul li a{
 display: inline;
}
.person-menu ul li a:hover{
  color:#f40;
}
.person-menu ul li {
    margin-top: 5px;
  height: 20px;
  padding-top: 5px;
}

.person-menu{
    margin-left: 70px;
    margin-top: 10px;
}
</style>