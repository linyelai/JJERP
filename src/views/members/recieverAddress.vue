<template>
    <div class="reciver-address">
        <div class="reciever-title">收货地址</div>
        <div class="reciever-name"> <el-input v-model="input" placeholder="收货名称" ></el-input></div>
        <div class="reciever-address">
            <span class="demonstration">省市区</span>
            <el-cascader
            v-model="value"
            :options="city"
            @change="handleChange">
        </el-cascader>
        </div>
        <div class="reciever-detail-address">
            <el-input v-model="input" placeholder="详细地址"></el-input>
        </div>
        <div class="reciever-address-postcode">
            <el-input v-model="input" placeholder="邮政编号"></el-input>
        </div>
        <div class="reciever">
            <el-input v-model="input" placeholder="收货人姓名"></el-input>
        </div>
        <div class="reciever-mobile">
            <el-input v-model="input" placeholder="收货人手机号码"></el-input>
        </div>
        <div class="default-address">
            <template>
                <el-radio v-model="sex" label="1">默认地址</el-radio>
           </template>
        </div>
          <div class="address-btn">
            <el-button type="primary">保存</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            city: [{
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
.reciver-address{
    margin:20px 0 0 20px;
}
 .reciever-title,.reciever-name,.reciever-address,.reciever-detail-address,.reciever-address-postcode,.reciever,.reciever-mobile,.default-address,.address-btn{

    margin-top: 10px;
 }
 .reciever-name,.reciever-address,.reciever-address-postcode,.reciever-detail-address,.reciever-mobile,.reciever{
     width:400px;
 }
</style>