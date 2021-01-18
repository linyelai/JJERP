<template>
  <div >
  <topbar></topbar>
    <div class="productForm">
        <div><el-input placeholder="商品名" v-model="productName"  clearable></el-input></div>
        <div>
            <el-upload
            class="upload-demo"
            action="http://127.0.0.1:8088/upload"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            accept="image/jpeg,image/png"
            :on-success="onUploadSuccess"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :method="post"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </div>
        
        <div><el-input placeholder="商品价格" v-model="productPrice"  clearable></el-input></div>
      
        <div><el-input placeholder="库存" v-model="stock"  clearable></el-input></div>
        <div><el-input placeholder="spu" v-model="productSpu"  clearable></el-input></div>
        <div>
             <el-select v-model="productCateId" placeholder="类目">
                <el-option
                v-for="item in category"
                :key="item.id"
                :label="item.categoryName"
                :value="item.id">
                </el-option>    
            </el-select>
        </div>
        <div>
            <el-select v-model="productBrandId" placeholder="品牌">
                <el-option
                v-for="item in brand"
                :key="item.id"
                :label="item.brandName"
                :value="item.id">
                </el-option>    
            </el-select>
        </div>
        <div>
           <el-select v-model="logisticsId" placeholder="物流">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>    
            </el-select>
        </div>
        <div>
            服务承诺<el-checkbox-group v-model="checkList" >
                <el-checkbox label="赠保价险"></el-checkbox>
                <el-checkbox label="正品保证"></el-checkbox>
                <el-checkbox label="极速退款"></el-checkbox>
                <el-checkbox label="赠运费险" ></el-checkbox>
                <el-checkbox label="七天无理由退换" ></el-checkbox>
            </el-checkbox-group>
  </div>
        <div>商品属性<el-button type="primary">+</el-button></div>
        
        
    </div>
    <div class="productDesc"><vue-ueditor-wrap v-model="description" :config="myConfig" ></vue-ueditor-wrap></div>
    <div class="submitBtn"><el-button type="primary" @click="addProduct()">发布</el-button><el-button type="info">返回</el-button></div>
  
  </div>
</template>
<script>
import VueUeditorWrap from 'vue-ueditor-wrap'
import httpclient from '@/tool/httpclient.js'
import topbar from "@/components/nav/topbar/topbar.vue"
import CategoryService from '../../service/CategoryService.js'
import BrandService from '../../service/BrandService.js'
import ProductService from '../../service/ProductService.js'
  export default {
    components:{
        VueUeditorWrap,
        topbar
    },
    data() {
      return {
        
          myconfig:{
            
            UEDITOR_HOME_URL:'@/components/',
            autoHeightEnabled:true,
            autoFloatEnabled:true,
            initialFrameHeight:340,
            initialFrameWidth:'100%',
            enableAutoSave:true

          },
          productName:"",
          productSpu:"",
          productMainImg:'',
          productPrice:'',
          shopId:'',
          discount:'',
          productCateId:'',
          productBrandId:'',
          description:'',
          logisticsId:'',
          category:[],
          options:{},
          checkList:[],
          brand:[],
          logistic:[],
          fileList:[]
          
      }
    },
    mounted() {
      //H获取分类
      let that = this;
      var param = {"currentPage":"1","pageSize":"200","parentId":""}
       CategoryService.findCategory(param).then(function (response) {
               console.log(response);
               if(response.data.errorMsg==null){
                   that.category =  response.data.data;
               }
               else{
                 log.console.error("error");
               }
        }).catch(function (error) {
              console.log(error);
             });
      
      //获得品牌
      var brandParam = {"currentPage":"1","pageSize":"200","parentId":""};
      BrandService.findBrand(brandParam).then(function (response) {
               console.log(response);
               if(response.data.errorMsg==null){
                   that.brand =  response.data.data;
               }
               else{
                 log.console.error("error");
               }
        }).catch(function (error) {
              console.log(error);
             });
      


    },
    methods: {
      handlePreview: function(){

      },
      handleRemove:function(){

      },
      beforeRemove:function(){

      },
      handleExceed:function(){

      },
      onUploadSuccess:function(response,file,fileList){
        
           this.productMainImg = response.data;

      },
      addProduct:function(){
        //发布商品
       
        console.log("发布商品");
        var product = {"productName":this.productName,
        "productSpu":this.productSpu,"shopId":this.shopId,
        "productMainImg":this.productMainImg,
        "discount":this.discount, "productPrice":this.productPrice,
        "productCateId":this.productCateId,
        "productBrandId":this.productBrandId,"description":this.description};

        ProductService.addProduct(product).then(function (response) {
               if(response.data.errorMsg==null){
                  console.log("success");
               }
               else{
                 log.console.error("error");
               }
        }).catch(function (error) {
              console.log(error);
             });
        
      }
     
    }
  }
</script>
<style lang="scss">
  .productForm{
    margin-top:30px;
    
  }
  .productForm div{
      margin-top:5px;
      width:400px;
      margin:auto;
      margin-bottom: 5px;
  }
  .submitBtn{
    margin:auto;
    width:400px;
    padding-top: 80px;
    height:200px;
  }
  .productDesc{
    width:80%;
    margin:auto;
    height:600px;

  }
  VueUEditor{
    height:400px;
  }
</style>
