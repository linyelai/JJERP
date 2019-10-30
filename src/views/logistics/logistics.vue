<template>
  <div style="margin-left:5px;">
    <div style="margin-top:5px;margin-bottom:5px;margin-left:10px;">
      <div >
        <el-input placeholder="模板名" style="width:120px; " ></el-input>
        <el-button type="primary" icon="el-icon-search" style="margin-left:10px; ">搜索</el-button>
        <el-button type="primary" icon="el-icon-delete">删除</el-button>
        <el-button type="primary" icon="el-icon-delete" @click="addProduct">添加退货地址</el-button>
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
            prop="templateName"
            label="类别名"
            width="200">
          </el-table-column>
          <el-table-column
            prop="province"
            label="省份"
            width="200">
          </el-table-column>
          <el-table-column
            prop="city"
            label="桂林市"
           ></el-table-column>
           <el-table-column
            prop="area"
            label="县/区"
           ></el-table-column>
           <el-table-column
            prop="detail"
            label="详细地址"
           >
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
  export default {
    data() {
      return {
        currentPage: 1,
        tableData: [{
          templateName: '桂林仓库',
           province:'广西壮族自治区',
          city: '桂林市',
          area: '七星区',
          detail:'广西师范大学育才路15号',
          createTime:'2019-10-30'

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
      addProduct:function(){
        this.$router.push("/addProduct");
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
</style>
