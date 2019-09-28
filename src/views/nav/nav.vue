<template>
    <div class="site-nav">
        <div class="float-left home"><a href="#">首页</a></div>
        <div class="float-left login-tip"><a href="#">请登录</a></div>
        <div class="float-left register-tip"><a href="#">免费注册</a></div>
        <div class="float-right person-profile"> <a href="#">我的淘宝</a></div>
        <div class="float-right"> <a href="#">购物车</a></div>
        <div class="float-right"> <a href="#">手机版</a></div>
         <div class="float-right"> <a href="#">淘宝网</a></div>
        <div class="float-right"> <a href="#">商家支持</a></div>
        <div class="float-right"> <a href="#">网络导航</a></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style lang="scss">
.site-nav{

height: 33px;
background-color: #f2f2f2;

}
.float-left{
    float:left;
    padding-top: 5px;
   
}
.home{
    margin-left: 20px;
}
.login-tip{
    margin-left: 20px;
    

}
.register-tip{
    margin-left:20px;
}
.float-left a{
 color:#999;
 font-size: 12px;
}
.float-right{
    float:left;
    padding-top: 5px;
    margin-left: 20px;
}
.float-right a{
    color:#999;
    font-size: 12px;
}
.person-profile{
    margin-left: 800px;
}
</style>