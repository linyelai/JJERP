
import UserManage from '../views/tables/userManage.vue'
import PermissionManage from '../views/permission/permission.vue'
import RoleManage from '../views/role/role.vue'
import ShopManage from '../views/shop/shop.vue'
import Orders from '../views/orders/order.vue'
import Goods from '../views/goods/goods.vue'
import Brand from '../views/brand/brand.vue'
import Category from '../views/category/category.vue'
//import AddCategory from '../views/category/addCategory.vue'
export default [ 
  {
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
  path: '/shopManage',
  name: 'shopManage',
  component: ShopManage,
  meta: ['商家管理']
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
 }
,{
  path: '/brandManage',
  name: 'brand',
  component: Brand,
  meta: ['品牌管理']
},{
  path: '/categoryManage',
  name: 'category',
  component: Category,
  meta: ['类别管理']
}
// ,{
//   path: '/addCategory',
//   name: 'addCategory',
//   component: AddCategory,
//   meta: ['添加类别']
// }
]
