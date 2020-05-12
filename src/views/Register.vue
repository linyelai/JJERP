<template>
  <div class="register">
    <div class="top"></div>
    <div class="logo">
        <div class="logo_img"><img src="../../static/images/logo.png"></div>
        
    </div>
    <div class="register-step">
        <div class="step1">
            <div class="step-num" >1</div><div class="step-title" >设置用户名</div>
        </div>
        <div class="step2">
            <div class="step-num" v-bind:style="stepNum2">2</div><div class="step-title" v-bind:style="stepTitle2" >完善账号信息</div>
        </div>
         <div class="step3">
            <div class="step-num" v-bind:style="stepNum3">3</div><div class="step-title" v-bind:style="stepTitle3">注册成功</div>
        </div>

    </div>
    <div class="line"></div>
    <div class="register_form">
        <div v-show="showUserInfo">
            <div class="phone-num">
                <input placeholder="手机号码" id="phoneNum" /> 
                <a href="#">发送验证码</a>
            </div>
            
            <div class="valite-code"> <input placeholder="验证码" type="text"  id="smsCode"/></div>
         <div class="next-step" v-show="showNextBtn"><a class="submit"  @click="nextstep()" >下一步</a></div>
  
        </div>
         <div class="perfer-info" v-show="showPerferInfo">
             <div><input class ="nick-name" id="nickName" placeholder="昵称" type="text"/></div>
             <div><input class="password" placeholder="密码" id="password" type="password"/></div>
             <div><input class="password" placeholder="确认密码" id="confirmPassword" type="password"/></div>
             <div class="next-step" v-show="showNextBtn"><a class="submit"  @click="nextstep()" >下一步</a></div>

         </div>
         <div v-show="isSuccess" >
             <div class="success-tag"><img src="../../static/images/gou.jpg" style="width:40px;height:40px;"> 恭喜您注册成功</div>
             <div class="login"><a href="/login" class="submit">立即登录</a></div>
         </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
   
   return {
   currentStep:1,
   showPerferInfo:false,
   showUserInfo:true,
   isSuccess:false,
   showNextBtn:true,
   stepNum3:{
       backgroundColor:""
   },
   stepTitle3:{
       color:""
   },
    stepNum2:{
       backgroundColor:""
   },
   stepTitle2:{
       color:""
   }
   };
  },
  methods: {
    // 下一步
    nextstep(){
        if(!this.showPerferInfo){
           this.showPerferInfo =true;
           this.showUserInfo=false;
           this.stepNum2.backgroundColor="#00a597";
           this.stepTitle2.color="#000000";
           
        }
        else if(this.showPerferInfo){
         // this.showPerferInfo = false;
          this.stepNum3.backgroundColor="#00a597";
           this.stepTitle3.color="#000000";
           this.showPerferInfo =false;
           this.showNextBtn = false;
           this.isSuccess = true;
           //提交注册信息
           var memberName = phoneNum;
           var password = password;
           var smsCode = smsCode;
           var nickName = nickName;
           var memberInfo = {'memberName':memberName,'password':password,'smsCode':smsCode,'nickName':nickName};
           memberService.registerMember(memberInfo)

        }
    }
   
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
.phone-num{
 width:400px;
    height: 45px;
    margin-left:0px;
    margin-right: 0px;
    margin-top:50px;
}
.valite-code{
    width:400px;
    height: 45px;
    margin-left:0px;
    margin-right: 0px;
    margin-top:5px;
    
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
.nick-name,.password{
    height: 45px;
    width:80%;
    border:solid rgba(2,223,223,0.5) 1px;
    margin-top:5px;
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
       
        margin-top:5px;
    
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
        height: 70px;
    }
    .step-title{
        float:left;
        width:90px;
        height: 20px;
        font-size: 14px;
        margin-left: 2px;
    }
    
     .step2 .step-num{
       margin-left:0;
       background-color: #888888;
       
    }
    .step2 .step-title,.step3 .step-title{
        color:#888888;
    }
      .step3 .step-num{
       margin-left: 0px;
        background-color: #888888;
        
    }
    .step1,.step2,step3{
        height:20px;
    }
    
    .success-tag{
        color:#00ff00;
        font-size: 40px;
        margin-top:40px;
    }
    .login{
        margin-top:40px;
    }
</style>
