<template>
  <div style="margin-left:5px;">
   <div style="margin-top:5px;margin-bottom:5px;margin-left:10px;">
     <div >
       <el-input placeholder="工号" style="width:120px; " ></el-input>
       <el-button type="primary" icon="el-icon-search" style="margin-left:10px; ">搜索</el-button>
       <el-button type="primary" icon="el-icon-delete">删除</el-button>
     </div>
    </div>
 <div class="bastic-table">
      <div class="page-content">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="jobId"
        label="工号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
        </el-table-column>
      <el-table-column
        prop="phoneNum"
        label="手机号码">
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
    import "@/assets/erpicon/iconfont.css";
    export default {
      data() {
        return {
          currentPage: 1,
          tableData: [{
            jobId: '0000080701',
            name: '张飞',
            phoneNum: '13737724745',

          }, {
            jobId: '0000080701',
            name: '张飞',
            phoneNum: '13737724745',

          }, {
            jobId: '0000080701',
            name: '张飞',
            phoneNum: '13737724745',

          }, {
            jobId: '0000080701',
            name: '张飞',
            phoneNum: '13737724745',

          },{
            jobId: '0000080701',
            name: '张飞',
            phoneNum: '13737724745',

          },{
            jobId: '0000080701',
            name: '张飞',
            phoneNum: '13737724745',

          },{
            jobId: '0000080701',
            name: '张飞',
            phoneNum: '13737724745',

          },{
            jobId: '0000080701',
            name: '张飞',
            phoneNum: '13737724745',

          },{
            jobId: '0000080701',
            name: '张飞',
            phoneNum: '13737724745',

          },{
            jobId: '0000080701',
            name: '张飞',
            phoneNum: '13737724745',

          }]
        }
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
