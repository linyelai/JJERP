<template>
  <nav class="wq-sidebar" v-bind:class='foldObj'>
    <div class="sidebar-menu"  >
    <el-menu :default-active="$route.path" :unique-opened=true router  @open="handleOpen" @close="handleClose" class="right_menu"
    :collapse='isCollapse'
      v-for="(item, index) in menuItem" :key="index" background-color="#545c64" text-color="#fff" active-text-color="#353535">
      <el-menu-item v-if="typeof item.child === 'undefined'" :index="item.path" active-text-color="#353535" class="right_menu">
        <!--<i class="icon" :class="item.class">hh</i>-->
        <span class="icon" :class="item.class"><img :src="item.image"  style="width:16px;height:16px;" /></span>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
      <el-submenu v-else :index="item.path">
        <template slot="title">
          <i class="icon" :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </template>
        <el-menu-item v-for="(child_item, child_index) in item.child" :index="child_item.path" :key="child_index">
          <i class="icon" :class="child_item.icon"></i>
          <span slot="title">{{ child_item.title }}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    </div>
  </nav>
</template>
<script>
import iconSvg from "@/components/icon-svg";
import "@/assets/erpicon/iconfont.css";
export default {
  data() {
    return {
      menuItem: [
        {
          title: "用户管理",
          path: "/userManage",
          image: "../../../../static/icon/person.svg"
        },
        {
          title: "权限管理",
          path: "/permissionManage",
          image: "../../../../static/icon/permission.svg"
        },
        {
          title: "角色管理",
          path: "/roleManage",
          image: "../../../../static/icon/role.svg"
        },{
          title: "客户管理",
          path: "/customerManage",
          image: "../../../../static/icon/customer.svg"
        },
        {
          title: "订单管理",
          path: "/orderManage",
          image: "../../../../static/icon/order.svg"
        },
    {
      title: "商品管理",
      path: "/goodsManage",
      image: "../../../../static/icon/goods.svg"
    },{
          title: "物料管理",
          path: "/bomManage",
          image: "../../../../static/icon/matirel.svg"


        }
        ,{
          title: "品牌管理",
          path: "/brandManage",
          image: "../../../../static/icon/matirel.svg"


        }
          ,{
          title: "类目管理",
          path: "/cateManage",
          image: "../../../../static/icon/matirel.svg"


        }
          ,{
          title: "物流管理",
          path: "/logisticManage",
          image: "../../../../static/icon/matirel.svg"


        }
      ],
      isCollapse: false
    };
  },
  computed: {
    iconObj() {
      return this.$store.state.app.siderbar.opened ? "fold" : "unfold";
    },
    foldObj() {
      return this.$store.state.app.siderbar.opened
        ? "show-sidebar"
        : "hide-sidebar";
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleFold() {
      this.isCollapse = this.$store.state.app.siderbar.opened;
      this.$store.dispatch("toggle_siderbar");
    }
  },
  components: {
    iconSvg
  }
};
</script>
<style lang="scss">
@import "../../../assets/css/common.scss";

.wq-sidebar {
  height: 100%;
  overflow: hidden;

  .sidebar-fold {
    cursor: pointer;
    text-align: center;
    height: 28px;
    .fold-svg {
      color: #000000;
      font-size: 26px;
    }
    &.hide-sidebar {
      width: 64px;
    }
  }
  &.show-sidebar {
    min-width: 200px;
  }
  &.hide-sidebar {
    min-width: 64px;
  }
}
.custom-00a597 .el-menu,.wq-sidebar
{
  background-color: #feffff;

}
.custom-00a597 .el-menu-item{
  color: #8c8c8c;
}
.custom-00a597 .el-menu-item:hover {
  background-color: #d1e5e5;
  color: #000000;
}
  .icon-yonghuguanli{
    color:red;
    background-image: url("../../../../static/icon/person.svg");
  }
</style>
