<!-- 商品类目-->
<template>
    <div class="goodCate" >
    <div class="first-good-cate">
      <ul>
          <li v-for="goodCate in firstCate" >
              <a href="#">{{goodCate.categoryName}}</a>
          </li>
      </ul>
        </div>
      <div class="second-cate-conatainer">
          <div class="second-cate" >
              <div class="second-cate-tilte" v-for="secondCate in secondCates" ><a href="#">{{secondCate.categoryName}}</a></div>
          </div>
           <div class="third-cate" v-for="thirdCateItem in thirdCates">
                  <div class="third-cate-item" v-for="cateItem in  thirdCateItem.data">
                  <a href="#">{{cateItem.name}}</a>      
                 </div>
              </div>
      </div>
   </div>
</template>
<script>
 import CategoryService from '../../service/CategoryService.js'

export default {
    data() {
        return {
            firstCate:[],
            secondCates:[],
            thirdCates:[
                    {
                        id:1,
                        data:[
                                {id:1,name:"女装新品"},{id:2,name:"同场同款"},{id:3,name:"仙女连衣裙"},{id:4,name:"T恤"},{id:5,name:"衬衫"},{id:6,name:"时髦外套"},{id:7,name:"休闲裤"},{id:8,name:"牛仔裤"},
                                {id:9,name:"无痕文胸"},{id:10,name:"运动文胸"},{id:11,name:"潮流家居服"},{id:12,name:"百搭船袜"}
                            ]
                    },
                            
                    
                    {
                        id:2,
                        data:[
                                {id:1,name:"毛呢外套"},{id:2,name:"羽绒服"},{id:3,name:"棉服"},{id:4,name:"丝绒卫衣"},{id:5,name:"毛针织衫"},{id:6,name:"皮毛一体"},{id:7,name:"皮草"},{id:8,name:"毛衣"},
                                {id:9,name:"衬衫"},{id:10,name:"卫衣"},{id:11,name:"织针衫"},{id:12,name:"T恤"}    
                            ]
                    },
                    {
                        id:3,
                        data:[
                                {id:1,name:"连衣裙"},{id:2,name:"半身裙"},{id:3,name:"A字裙"},{id:4,name:"荷叶边裙"},{id:5,name:"大摆裙"},{id:6,name:"包臀裙"},{id:7,name:"百褶裙"},{id:8,name:"长袖连衣裙"},
                                {id:9,name:"棉麻连衣裙"},{id:10,name:"牛仔裙"},{id:11,name:"蕾丝连衣裙"},{id:12,name:"真丝连衣裙"},{id:13,name:"印花连衣裙"}  
                            ]
                    },
                    {
                        id:4,
                        data:[
                                {id:1,name:"休闲裤"},{id:2,name:"阔腿裤"},{id:3,name:"牛仔裤"},{id:4,name:"打底裤"},{id:5,name:""},{id:6,name:"开叉运动裤"},{id:7,name:"哈伦裤"},{id:7,name:"背带裤"},{id:8,name:"小脚裤"},
                                {id:9,name:"西装裤"},{id:10,name:"短裤"}    
                            ]
                    },
                    {
                        id:5,
                        data:[
                                {id:1,name:"时尚套装"},{id:2,name:"休闲套装"},{id:3,name:"日系女装"},{id:4,name:"精选妈妈装"},{id:5,name:"大码女装"},{id:6,name:"职业女装"},{id:7,name:"优雅旗袍"},{id:8,name:"精致礼服"},
                                {id:9,name:"唐装"},{id:10,name:"婚纱"},{id:11,name:"小码女装"}    
                            ]
                    },
                    {
                        id:6,
                        data:[
                                {id:1,name:"光面文胸"},{id:2,name:"运动文胸"},{id:3,name:"美背文胸"},{id:4,name:"聚拢文胸"},{id:5,name:"大杯文胸"},{id:6,name:"轻薄塑身"}
                            ]
                    },
                    {
                        id:7,
                        data:[
                                {id:1,name:"春夏家居服"},{id:2,name:"纯棉家具服"},{id:3,name:"莫代尔家具服"},{id:4,name:"真丝家具服"},{id:5,name:"春夏睡裙"},{id:6,name:"男士家居服"},{id:7,name:"情侣家具服"},{id:8,name:"性感家居服"},
                                 
                            ]
                    },
                    {
                        id:8,
                        data:[
                                {id:1,name:"男士内裤"},{id:2,name:"女士内裤"},{id:3,name:"男士内裤多条装"},{id:4,name:"女士内裤多条装"},{id:5,name:"莫代尔内裤"}
                            ]
                    }
                ]
        }
    },
    mounted() {
        var data = {"currentPage":1,"pageSize":20,"parentId":0}
        let that = this;
          CategoryService.findCategory(data).then(function (response) {
               console.log(response);
               if(response.data.errorMsg==null){
                   that.firstCate =  response.data.data;
               }
               else{
                 log.console.error("error");
                 
               }
    }).catch(function (error) {
              console.log(error);
             });
    
    data.parentId = 4;
    CategoryService.findCategory(data).then(function (response) {
               console.log(response);
               if(response.data.errorMsg==null){
                   that.secondCates =  response.data.data;
               }
               else{
                 log.console.error("error");
                 
               }
    }).catch(function (error) {
              console.log(error);
             });

    },
    
    
}
</script>
<style lang="scss">
.first-good-cate{
    width:200px;
    height: 500px;
    float: left;
}
.first-good-cate ul{
    background-color:rgba(0,0,0,0.55);
    color:#ffffff;
    font-size:12px;
}
.first-good-cate ul li{
    height: 31.2px;
    color: #ffffff;

}
.first-good-cate ul li a{
    color:#ffffff;
    font-size: 14px;
     padding-top:5px;
     padding-left: 20px;
     display: block;
        height: 31.5px;
}
.first-good-cate ul li a:hover{
    color:#000000;
    background-color:#ffffff;
    display: block;
    width: 200px;
    height: 31.5px;
    padding-top:5px;
    padding-left: 20px;
}
.second-cate-conatainer{
    float: left;
    width:880px;
    background-color:#ffffff;
}
.second-cate{
    height: 500px;
    width:60px;
    padding-top: 20px;
    margin-left: 20px;
    float:left;


}
.second-cate-tilte{
    height: 60px;
    float:left;
    
}
.third-cate{
    float: left;
    margin-left: 10px;
    padding-top:5px;
    border-bottom: 1px dotted rgba(168, 166, 166, 0.91);
    height: 60px;
    width:460px;

}
.third-cate-item{
    margin-left: 10px;
    height: 25px;
    float: left;
    
}
.third-cate-item a:hover{
    color:#429cf0;
    
}
.goodCate{
    width:1080px;
    margin:auto;
    background-color: #ffffff;
    
}
</style>