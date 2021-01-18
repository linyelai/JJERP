<template>
 <div>
 <topbar></topbar>
 <div class="addCategory-form-style">
 <el-form ref="form" :model="category" label-width="80px">
     <el-col :span="12">
  <el-form-item label="类别名称">
    <el-input v-model="category.name"></el-input>
  </el-form-item>
  <el-form-item label="类别描述">
    <el-input type="textarea"  v-model="category.desc"></el-input>
  </el-form-item>
<el-upload
  class="upload-demo"
  action="http://localhost:8088/upload"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :on-success="handleUploadSuccess"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">上传图片</el-button>
  <span slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</span>
</el-upload>
 <el-form-item class='addCategoryBtn'>
    <el-button type="primary" @click="onSubmit">添加</el-button>
    <el-button>取消</el-button>
  </el-form-item>
     </el-col>
</el-form>
 </div>
 </div>
</template>

<script>
import topbar from "@/components/nav/topbar/topbar.vue"
import BrandService from '@/service/BrandService.js'
  export default {
      components: {
    topbar
  },
      mounted() {
         
      },
    data() {
      return {
        fileList:[],

        category:{
            name:'',
            desc:'',
            parentId:'',
            img:null
        },
        
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }]
          }]
        
      
      }
    },
    methods: {
      
      onSubmit(){
          
            BrandService.addCategory(this.category);
      },
      handleUploadSuccess (response, file, fileList) {
      this.category.img = response.data;
      
      
    }

    }
  }
</script>
<style lang="scss">
  .usernameInput
  {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    width:120px;
  }
  .addCategory-form-style{

      margin-top:20px;
      margin-left: 500px;

  }
  .addCategoryBtn{
      margin-top:30px
  }
</style>
