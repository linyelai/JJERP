<template>
    <div class="memberInfo">
        <div>个人资料</div>
        <div class="avatar-info">
           <div class="avatar"> <img src="../../../static/images/avatar.jpg"></div>
            <div class="uploadImg">  
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
        </div>
        <div class="nickname" >
            <el-input v-model="input" placeholder="昵称" ></el-input>
        </div >
        <div class="real-name">
            <el-input v-model="input" placeholder="真实姓名"></el-input>
        </div>
        <div class="gender">
           <template>
                <el-radio v-model="sex" label="1">男</el-radio>
                <el-radio v-model="sex" label="2">女</el-radio>
           </template>
        </div>
        <div class="birthday">
            <span class="demonstration">生日</span>
            <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
            </el-date-picker>
        </div>
        <div class="live-address">
             <span class="demonstration">居住地址</span>
        <el-cascader
            v-model="value"
            :options="options"
            @change="handleChange">
        </el-cascader>
        </div>
        <div class="hometown">
            <el-input v-model="input" placeholder="家乡"></el-input>
        </div>
        <div class="save-btn">
              <el-button type="primary">保存</el-button>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            
        sex: '1',
         options: [{
          value: '1',
          label: '广东省',
          children: [{
            value: '10001',
            label: '广州市',
            children: [{
              value: '1000101',
              label: '天河区'
            }]
          }]
         }]
        }
    },
    methods: {
        
    },
}
</script>
<style lang="scss">
.memberInfo{
    padding-left: 20px;
    padding-top: 20px;
}
.nickname,.real-name{
    width:400px;
    margin-top:10px;
}
.gender,.birthday,.live-address,.hometown,.save-btn{
    margin-top:10px;
}
.hometown{
    width:400px;
}
.avatar{
    float:left;
}
.uploadImg{
    float:left;
    margin-left: 10px;
    margin-top:20px;

}

</style>