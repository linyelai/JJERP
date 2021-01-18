<template>
  <div class="searchResult" >
      <div v-for="item in goodlist" v-bind="key" >
      <GoodItem :goods = item></GoodItem>
      </div>
      <div style="clear:both;">
        <el-pagination @size-change="nextPage" @current-change="nextPage" :current-page="currentPage" ></el-pagination>
      </div>
  </div>
</template>
<script>
import GoodItem from './goodItem.vue'
import ProductService from '../../service/ProductService.js'
import bus from '../../assets/eventBus.js'
  export default {
  
    data() {
      return {
          goodlist:[],
          productName:'',
          currentPage:1,
          pageSize:20,
          categoryId:'',
          totalPage:0,
      }
    },
    methods: {

      nextPage(page){
         this.currentPage = page;
         this.fetchData();
        
      },
      fetchData(){

           //分頁查找商品
      let that = this;
      let param = {"currentPage":this.currentPage,"pageSize":this.pageSize,
      "productName":this.productName,"categoryId":this.categoryId}
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
    components:{
        GoodItem
    },
    mounted() {
      //分頁查找商品
      let that = this;
      let param = {"currentPage":"1","pageSize":"20","productName":"","categoryId":""}
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
    //
    bus.$on("search",function(msg){
      that.goodlist = msg;
    })


    },
  }
</script>
<style lang="scss">

  .searchResult{
      width:1350px;
      margin-left: 80px;
      

  }
</style>
