<template>
    <div class="reciever-address-list">  
            <el-table
            :data="tableData"
            style="width: 100%">
              <el-table-column
                type="selection"
                width="55">
        </el-table-column>
           
            <el-table-column 
                prop="recieverAddressCity"
                label="省/市/区"
                width="180">
            </el-table-column>
            <el-table-column 
                prop="recieverDetailAddress"
                label="详细地址">
            </el-table-column>
            <el-table-column 
                prop="recieverPostCode"
                label="邮政编号">
            </el-table-column>
            <el-table-column 
                prop="reciever"
                label="收件人">
            </el-table-column>
            <el-table-column 
                prop="recieverMobile"
                label="收件人手机号码">
            </el-table-column>

            <el-table-column 
                prop="recieverDefault"
                label="是否为默认地址"
                >
                  <template slot-scope="scope">
                    <el-tag
                    disable-transitions>{{scope.row.recieverDefault==='1'?'默认地址':'普通地址'}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
             tableData: [{
            recieverAddressName: '家',
            recieverAddressCity: '广东省/深圳市/宝安区',
            recieverDetailAddress: '桥头镇桥头村桥头路22号',
            recieverPostCode: '537116',
            reciever: '小林子',
            recieverMobile: '18312483564',
            recieverDefault:"1"
          }, {
            recieverAddressName: '公司',
            recieverAddressCity: '广东省/深圳市/南山区',
            recieverDetailAddress: '南山软件基地5c栋702',
            recieverPostCode: '537116',
            reciever: '小林子',
            recieverMobile: '18312483564',
            recieverDefault:"2"
          }]

        }
    },
    methods: {
        
    },
}
</script>
<style lang="sass">

</style>