<template>
    <div>
        <div class="login-container">
            <div class="login-form">
                <el-form>
                    <el-input class="member-name" placeholder="会员名" icon="el-icon-search"></el-input>
                    <el-input class="member-password" placeholder="密码" icon="el-icon-search" show-password></el-input>
                    <div class="login-btn"><a href="#">登录</a></div>
                </el-form>
            </div>
        </div>
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
.login-container{
    background-image: url('../../../static/images/login_background.jpg') ;
    background-size:100%; 
    
}
.login-form{
    width:300px;
    height: 200px;
    position: relative;
    left: 700px;
    top: 250px;
    background-color: #ffffff;
}
.member-name input,.member-password input{
    margin-left: 50px;
    margin-top: 20px;
    width:200px;
}
.login-btn{
    color:#ffffff;
    background-color: #f40;
    width:200px;
    margin-left: 50px;
    margin-top: 20px;
    height: 36px;
    text-align: center;
    padding-top: 8px;
    
}
.login-btn a{
    color:#ffffff;
   
}
</style>