<template>
  <div style="margin-left:5px;">
    <div style="margin-top:5px;margin-bottom:5px;margin-left:10px;">
      <div >
        <el-input placeholder="类别名" style="width:120px; " ></el-input>
        <el-button type="primary" icon="el-icon-search" style="margin-left:10px; ">搜索</el-button>
          <el-button type="primary" icon="el-icon-add" style="margin-left:10px; " @click="addCategory">添加</el-button>
        <el-button type="primary" icon="el-icon-delete">删除</el-button>
      </div>
    </div>
    <div class="bastic-table">
      <div class="page-content">
        <el-table
          :data="categoryList"
          style="width: 100%">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="categoryName"
            label="类别名"
            width="200">
          </el-table-column>
          <el-table-column
            prop="desc"
            label="描述"
           >
            </el-table-column>
           <el-table-column
            prop="parentCategory"
            label="父类别"
          >
          </el-table-column>
         
          <el-table-column
            label="图片"
          >
          <template slot-scope="scope">
                  <img :src="scope.row.img" width="32" height="32" />
            </template>
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
import {categoryList} from '@/testdata/data'

  export default {
      mounted() {
          this.categoryList = categoryList;
      },
    data() {
      return {
        currentPage: 1,
        categoryList: []
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
      addCategory(){
          this.$router.push('/addCategory');
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
