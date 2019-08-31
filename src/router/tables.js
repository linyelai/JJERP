import Basictable from '../views/tables/basic.vue'
import Fixedheadertable from '../views/tables/fixedheader.vue'
import UserManage from '../views/tables/userManage.vue'
import PermissionManage from '../views/permission/permission.vue'
import RoleManage from '../views/role/role.vue'
import CustomerManage from '../views/customer/customer.vue'
import Orders from '../views/orders/order.vue'
import Goods from '../views/goods/goods.vue'
import Bom from '../views/bom/bom.vue'
export default [{
    path: 'basic',
    name: 'basictable',
    component: Basictable,
    meta: ['基础表格'],
}, {
    path: 'fixedheader',
    name: 'fixedheadertable',
    component: Fixedheadertable,
    meta: ['固定标头表格']
}, {
  path: '/userManage',
  name: 'userManage',
  component: UserManage,
  meta: ['用户管理']
}, {
  path: '/permissionManage',
  name: 'permissionManage',
  component: PermissionManage,
  meta: ['权限管理']
}, {
  path: '/roleManage',
    name: 'roleManage',
    component: RoleManage,
    meta: ['角色管理']
},{
  path: '/customerManage',
  name: 'customerManage',
  component: CustomerManage,
  meta: ['客户管理']
},{
  path: '/orderManage',
  name: 'orders',
  component: Orders,
  meta: ['订单管理']
},{
  path: '/goodsManage',
  name: 'goods',
  component: Goods,
  meta: ['商品管理']
},{
  path: '/bomManage',
  name: 'bom',
  component: Bom,
  meta: ['物料管理']
}]
