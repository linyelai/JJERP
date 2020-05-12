<template>
  <div >
    <div class="productForm">
        <div><el-input placeholder="商品名" v-model="productName"  clearable></el-input></div>
        <div>
            <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </div>
        
        <div><el-input placeholder="商品价格" v-model="price"  clearable></el-input></div>
      
        <div><el-input placeholder="库存" v-model="num"  clearable></el-input></div>
        <div><el-input placeholder="sku" v-model="spu"  clearable></el-input></div>
        <div>
             <el-select v-model="category" placeholder="类目">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>    
            </el-select>
        </div>
        <div>
            <el-select v-model="brand" placeholder="品牌">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>    
            </el-select>
        </div>
        <div>
           <el-select v-model="logistic" placeholder="物流">
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
    <div class="productDesc"><VueUEditor ></VueUEditor></div>
    <div class="submitBtn"><el-button type="primary" @click="addProduct()">发布</el-button><el-button type="info">返回</el-button></div>
  </div>
</template>
<script>
import VueUEditor from '@/components/UEditor.vue'
import httpclient from '../../tool/httpclient.js'
 
  export default {
    data() {
      return {
          productName:"",
          spu:"",
          images:'',
          price:'',
          num:'',
          brandId:'',
          cateId:'',
          logisticsId:logisticsId,
          category:[{id:'1',name:'家用电器'}],
          options:{},
          checkList:[],
          brand:[],
          logistic:[]
          
      }
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
      addProduct:function(){
        //发布商品
        console.log("发布商品");
        httpclient.post('/api/product',{
                   productName:'this.productName',
                   productImg:'this.spu',
                   price:10,
                   stock:10,
                   cateId:10,
                   brandId:40,
                   logisticsId:10,
                   desc:'this.desc'
                  }).then(function (response) {
                    // handle success
                    console.log(response);
                  }).catch(function (error) {
                    // handle error
                    console.log(error);
                  }).then(function () {
                    // always executed
                  });
        
      }
     
    },
    components:{
        VueUEditor
    }
  }
</script>
<style lang="scss">
  .productForm{
    margin-top:30px;
    margin-bottom: 30px;
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
