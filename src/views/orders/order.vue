<template>
  <div style="margin-left:5px;">
    <div style="margin-top:5px;margin-bottom:5px;margin-left:10px;">
      <div >
        <el-input placeholder="订单号" style="width:120px; " ></el-input>
        <el-button type="primary" icon="el-icon-search" style="margin-left:10px; ">搜索</el-button>
        <el-button type="primary" icon="el-icon-delete">删除</el-button>
      </div>
    </div>
    <div class="bastic-table">
      <div class="page-content">
        <el-table
          :data="orderList"
          style="width: 100%">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="orderSn"
            label="订单号"
            width="200">
          </el-table-column>
          <el-table-column
            prop="totalMoney"
            label="总计消费"
           >
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态"
          >
          <template slot-scope="scope">
                    <span v-if="scope.row.status == 0">待付款</span> 
                    <span v-else-if="scope.row.status==1">已完成</span>
                    <span v-else-if="scope.row.status==2">已取消</span>
                </template>
          </el-table-column>
          <el-table-column
            prop="createTime"
            label="创建时间"
           >
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="150">
            <template slot-scope="scope">
              <el-button @click="handleEditClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 15, 20, 30]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {orderList} from '@/testdata/data'
  export default {
    data() {
      return {
        currentPage: 1,
        orderList: []
      }
    },
    mounted() {
        
        this.orderList = orderList;
      
      },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleEditClick(val)
      {
        console.log(val.jobId);
      },
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
</style>
