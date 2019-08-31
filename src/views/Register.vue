<template>
  <div class="register">
    <div class="top"></div>
    <div class="logo">
        <div class="logo_img"><img src="../../static/images/logo.png"></div>
        
    </div>
    <div class="register-step">
        <div class="step1">
            <span class="step-num">1</span><span class="step-title">设置用户名</span>
        </div>
        <div class="step2">
            <span class="step-num">2</span><span class="step-title">完善账号信息</span>
        </div>
         <div class="step3">
            <span class="step-num">3</span><span class="step-title">注册成功</span>
        </div>

    </div>
    <div class="line"></div>
    <div class="register_form">
        <div class="phone-num">
         <input placeholder="手机号码" /> 
         <a href="#">发送验证码</a>
         </div>
         
       <div class="valite-code"> <input placeholder="验证码" type="text"  /></div>
       <div class="next-step"><a class="submit" href="javascript:;" >下一步</a></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
   
  },
  methods: {
    // 模拟登录
   
  }
};
</script>
<style lang="scss">
@import "../assets/css/mixin.scss";

body{
    font-size: 12px;
    color:#000000; 
}
.register{

 width:1366px;
 background-color: #ffffff;

}
.top{
    width:100%;
    background-color: #f5f5f4;
    height: 33px;
}
.logo{
    height: 200px;
    width: 1366px;
    margin: auto;
}
.logo_img{

margin-top:15px;
float:left;
width:200px;
height: 150px;
margin-left: 100px;
}
.logo_img img{
    width:180px;
    height: 180px;
}
.phone-num,.valite-code{
    width:400px;
    height: 45px;
    margin-left:0px;
    margin-right: 0px;
    margin-top:20px;
    
}
.phone-num  input{
    margin-left: 0px;
    margin-right: 0px;
    height:45px;
    width:80%;
    float:left;
    border:solid rgba(2,223,223,0.5) 1px;
}
.valite-code  input{
    margin-left: 0px;
    margin-right: 0px;
    height:45px;
    width:80%;
    border:solid rgba(2,223,223,0.5) 1px;
}


.submit {
      display: block;
      height: 45px;
      text-align: center;
      line-height: 45px;
      border-radius: 6px;
      background: $--color--primary;
      color: #fff;
      font-size: 16px;
       width:320px;
       
        margin-top:40px;
    
    }
   
    .register_form{
        width:400px;
        height:300px;
        margin:auto;
       
    }
    .phone-num a{
        display: block;
        float:left;
        margin-top:10px;
        margin-left: 5px;
        color:#00a597;

    }
    .line{
        border-top: 1px solid rgba(2,223,223,0.5);
        width:100%;
    }
    .step-num {
        width:20px;
        height: 20px;
        background-color: #00a597;
        border-radius: 50%;
        color:#ffffff;
        text-align: center;
        float: left;
    }
    .register-step{
        margin:auto;
        width:800px;
        height: 20px;
    }
    .step-title{
        float:left;
        width:90px;
        height: 20px;
        font-size: 14px;
        margin-left: 2px;
    }
    .step1{
       margin-left: 200px;
    }
     .step2 .step-num{
       margin-left: 20px;
       background-color: #888888;
       
    }
    .step2 .step-title,.step3 .step-title{
        color:#888888;
    }
      .step3 .step-num{
       margin-left: 20px;
        background-color: #888888;
        
    }
</style>
