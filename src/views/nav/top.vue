<template>
<div class="head-layout">
    <div class="head"> 
    <div class="float-left logo">
        <img src="../../../static/images/logo.jpg"/>
    </div>
    <div class="float-left search">
        <div class="search-input"><input type="text"/></div>
        <div class="search-btn"><a  @click="search()">搜 索</a></div>
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
    methods: {
        search() {
         
          let that = this;
          let param = {"currentPage":"1","pageSize":"20","productName":""}
           ProductService.findProduct(param).then(function (response) {
               console.log(response);
               if(response.data.errorMsg==null){
                   that.goodlist =  response.data.data;
               }
               else{
                 log.console.error("error");
               }
          }).catch(function (error) {
              console.log(error);
             });

        }
    },
}
</script>
<style lang="scss">
.float-left{
    float:left;
}
.head{
    height: 100px;
    border-bottom: 1px dotted rgba($color: #ccc, $alpha: 0.5);
    width:1080px;
    margin:auto;
    background-color: #ffffff;
}
.logo{
    width:100px;
    height: 92px;
}
.logo img{
    height: 80px;
    width:80px;
}
.search{
    
    width:800px;
    height: 92px;
    padding-top: 20px;
    

}
.search-input{
border:2px solid #FF0036;
float:left;
width:510px;

}
.search input{
    width:510px;
    padding: 5px 3px 5px 5px;
    height: 36px;

}
.search-btn{
    float:left;
}
.search button{
    font-size: 24px;
    background-color: #FF0036;
    color:#ffffff;
    width: 132px;
    height: 40px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 5px;
    text-align-last: center;
}
.head-layout{
    background-color: #ffffff;
}
</style>