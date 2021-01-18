<template>
  <div style="margin-left:5px;">
    <div style="margin-top:5px;margin-bottom:5px;margin-left:10px;">
      <div >
        <el-input placeholder="商品名" style="width:120px; " v-model="productName"></el-input>
        <el-button type="primary" icon="el-icon-search" style="margin-left:10px; " @click="search">搜索</el-button>
        <el-button type="primary" icon="el-icon-delete">删除</el-button>
        <el-button type="primary" icon="el-icon-delete" @click="addProduct">发布商品</el-button>
      </div>
    </div>
    <div class="bastic-table">
      <div class="page-content">
        <el-table
          :data="productList"
          style="width: 100%">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
           <el-table-column
           
            label="商品图片"
            >
                <template   slot-scope="scope">            
                    <img :src="scope.row.productMainImg"  width="48" height="48" />
                 </template>  
          </el-table-column>
          <el-table-column
            prop="productName"
            label="商品名"
            width="200">
          </el-table-column>
          <el-table-column
            prop="productPrice"
            label="价格"
          >
          </el-table-column>
          <el-table-column
            prop="productCateId"
            label="类型"
           >
          </el-table-column>
          <el-table-column
            prop="productBrandId"
            label="品牌"
           >
          </el-table-column>

          <el-table-column
            label="图片"
           >
            <template slot-scope="scope">
                    <img :src="scope.row.productMainImg" width="48" height="48" />
                </template>
          </el-table-column>

          <el-table-column
            prop="stock"
            label="库存"
          >
          </el-table-column>

           <el-table-column
            prop="status"
            label="状态"
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
            @current-change="search"
            :current-page="currentPage"
            :page-sizes="[10, 15, 20, 30]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            :total-page="totalPage">
          </el-pagination>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import ProductService from '../../service/ProductService'
  export default {
    mounted() {
      search(1);
    },
    data() {
      return {
        currentPage: 1,
        pageSize:10,
        categoryId:"",
        productName:"",
        total:0,
        productList: []
      }
    },
    created(){
      this.search(1);
    },
    methods: {
      
      search(page){

        this.currentPage = page;
        let that = this;
            var param = {"currentPage":this.currentPage,"pageSize":this.pageSize,
      "productName":this.productName,"categoryId":this.categoryId};
        ProductService.findProduct(param).then(function (response) {
                      // handle success
                      console.log(response);
                      let data = response.data;
                      that.productList = data.data;
                      that.totalPage = data.totalPage;
                      that.total = data.total;
                    }).catch(function (error) {
                      // handle error
                      console.log(error);
                    }).then(function () {
                      // always executed
                    });
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);

      },
      handleEditClick(val)
      {
        console.log(val.jobId);
      },
      addProduct:function(){
        this.$router.push("/addProduct");
      },
      loadData:function(){
        //goods
      search();
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
